import { IPost } from "./Post";

export interface IPostCollectionReportTemplate {
  fillOut(posts: PostCollection): object;
}

export class PostCollection {
  constructor(private container: IPost[]) {}

  get length() {
    return this.container.length;
  }

  public onlyValid() {
    return new PostCollection(this.container.filter(({ url }) => url !== ""));
  }

  public hasNobodyWritten() {
    return this.onlyValid().length === 0;
  }

  public authors() {
    return this
      .container
      .reduce((acc: string[], { author }) => {
        return (acc.indexOf(author) !== -1) ? acc : [...acc, author];
      }, []);
  }

  public outputReport(template: IPostCollectionReportTemplate) {
    return template.fillOut(this);
  }
}
