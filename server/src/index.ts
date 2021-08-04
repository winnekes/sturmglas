import "reflect-metadata";
import { createKoaServer } from "routing-controllers";
import MoodController from "./mood/mood-controller";

const port = process.env.PORT || 4000;

const app = createKoaServer({
  controllers: [MoodController],
});

app.listen(port, () => console.log(`Listening on port ${port}`));
