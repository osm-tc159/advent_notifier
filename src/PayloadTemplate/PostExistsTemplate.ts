import { IPost } from "../Api/AdventCalendar";
import { IPayloadTemplate } from "./PayloadTemplate";

export class PostExistsTemplate implements IPayloadTemplate {
  public fillOut(posts: IPost[]) {
    const authors = posts
      .map((p) => p.author)
      .reduce((acc: string[], item) => {
        return (acc.indexOf(item) !== -1) ? acc : [...acc, item];
      }, []);

    return {
      content: "",
      embeds: [
        {
          description: `前回の放送から${authors.length}人（${authors.join("、")}）が記事を書きました`,
          fields: [
            {
              inline: true,
              name: ":page_facing_up: 今週分の記事数",
              value: `${posts.length}`,
            },
          ],
          footer: {
            text: "© 2014-2018 Osamu's House Technical Committee 159",
          },
          thumbnail: {
            url: "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/calendar-512.png",
          },
          title: "おさむん家 Advent Calendar",
          url: "http://goo.gl/Kxkvis",
        },
      ],
    };
  }
}
