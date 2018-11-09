import { IPost } from "../Api/AdventCalendar";
import { IPayloadTemplate } from "./PayloadTemplate";

export class PostNotExistsTemplate implements IPayloadTemplate {
  public fillOut(_: IPost[]) {
    return { content: "```\n＊（カレンダーは真っ白だ）\n```" };
  }
}
