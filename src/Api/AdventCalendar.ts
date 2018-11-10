import { IPost } from "../Domain/Post/Post";
import { PostCollection } from "../Domain/Post/PostCollection";

export interface IGetUnreadPostsApiResponse {
  posts: IPost[];
}

export class AdventCalendar {
  private baseUrl = PropertiesService
    .getScriptProperties()
    .getProperty("ADVENT_CALENDAR_API_BASE_URL");

  constructor(baseUrl?: string) {
    if (baseUrl) {
      this.baseUrl = baseUrl;
    }
  }

  public getUnreadPosts() {
    const responseAsString = UrlFetchApp
      .fetch(this.baseUrl)
      .getContentText();
    const response = JSON.parse(responseAsString) as IGetUnreadPostsApiResponse;

    return new PostCollection(response.posts);
  }
}
