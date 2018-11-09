import { IPost } from "../Api/AdventCalendar";

export interface IPayloadTemplate {
  fillOut(posts: IPost[]): object;
}
