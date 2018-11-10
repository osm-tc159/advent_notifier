import { IPostCollectionReportTemplate, PostCollection } from "../Post/PostCollection";

export class MentionToPatipatiTemplate implements IPostCollectionReportTemplate {
  public fillOut(_: PostCollection) {
    const patipatiDiscordId = PropertiesService
      .getScriptProperties()
      .getProperty("PATIPATI_DISCORD_ID");
    return {
      avatar_url: "https://cdn.img-conv.gamerch.com/img.gamerch.com/imascg-slstage-wiki/1452696909.jpg",
      content: `<@${patipatiDiscordId}> アドベント書いてないけどなんで？一生おさむん家するんじゃないの？`,
      username: "二宮飛鳥",
    };
  }
}
