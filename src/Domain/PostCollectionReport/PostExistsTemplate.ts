import { IPostCollectionReportTemplate, PostCollection } from "../Post/PostCollection";

export class PostExistsTemplate implements IPostCollectionReportTemplate {
  public fillOut(posts: PostCollection) {
    const validPosts = posts.onlyValid();
    const authors = validPosts.authors();

    return {
      content: "",
      embeds: [
        {
          description: `前回の放送から${authors.length}人（${authors.join("、")}）が記事を書きました`,
          fields: [
            {
              inline: true,
              name: ":page_facing_up: 今週分の記事数",
              value: `${validPosts.length}`,
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
