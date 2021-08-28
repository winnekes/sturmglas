import { IsDate, IsEnum, ValidateNested } from "class-validator";
import { Arg, Authorized, Ctx, Field, InputType, Mutation, Resolver } from "type-graphql";
import { getRepository, In, Repository } from "typeorm";
import { ServerContext } from "../../../context";
import { Tag } from "../../tags/entities/tag-entity";
import { TagInputType, TagType } from "../../tags/graphql/tag-type";
import { Emotion, Mood } from "../entities/mood-entity";
import { MoodType } from "./mood-type";

@InputType()
export class AddMoodInputType {
  @IsEnum(Emotion)
  @Field(type => Emotion)
  emotion!: Emotion;

  @IsDate()
  @Field()
  date!: Date;

  @Field()
  description!: string;

  @Field(type => [TagInputType])
  @ValidateNested()
  tags!: TagType[];
}

@Resolver()
export class AddMoodMutation {
  private moodRepository = getRepository("Mood") as Repository<Mood>;
  private tagRepository = getRepository("Tag") as Repository<Tag>;

  @Authorized()
  @Mutation(returns => MoodType)
  async addMood(
    @Arg("data") data: AddMoodInputType,
    @Ctx() context: ServerContext
  ): Promise<MoodType> {
    if (!context.authId || !context.user) {
      throw new Error("No user set on context");
    }
    const tags = await this.tagRepository.find({
      where: { name: In(data.tags.map(tag => tag.name)) },
    });

    const mood = this.moodRepository.create();
    mood.user = context.user;
    mood.emotion = data.emotion;
    mood.date = data.date;
    mood.description = data.description;

    mood.tags = tags;

    for (const tag of data.tags) {
      if (!tags.find(existingTag => existingTag.name === tag.name)) {
        const newTag = this.tagRepository.create();
        newTag.name = tag.name;
        newTag.icon = "";
        newTag.user = context.user;
        await this.tagRepository.save(newTag);
        mood.tags = [...mood.tags, newTag];
      }
    }

    return this.moodRepository.save(mood);
  }
}
