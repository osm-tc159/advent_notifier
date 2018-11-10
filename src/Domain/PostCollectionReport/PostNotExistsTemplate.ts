import { IPostCollectionReportTemplate, PostCollection } from "../Post/PostCollection";

export class PostNotExistsTemplate implements IPostCollectionReportTemplate {
  public fillOut(_: PostCollection) {
    return { content: "```\n＊（カレンダーは真っ白だ）\n```" };
  }
}
