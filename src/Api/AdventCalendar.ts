export interface IPost {
  author: string;
  date: string;
  day: number;
  title: string;
  url: string;
}

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

  public getUnreadPosts(): IPost[] {
    const responseAsString = UrlFetchApp
      .fetch(this.baseUrl)
      .getContentText();
    const response = JSON.parse(responseAsString) as IGetUnreadPostsApiResponse;

    return response.posts;
  }
}
