import { Controller, Get } from "routing-controllers";

@Controller()
export default class MoodController {
  @Get("/hello")
  main() {
    return {
      hello: "World",
    };
  }
}
