import { AdventCalendar } from "./Api/AdventCalendar";
import { Discord } from "./Api/Discord";
import { PostExistsTemplate } from "./Domain/PostCollectionReport/PostExistsTemplate";
import { PostNotExistsTemplate } from "./Domain/PostCollectionReport/PostNotExistsTemplate";

function postWeeklyReport() {
  const posts = new AdventCalendar().getUnreadPosts();
  const payloadTemplate = posts.hasNobodyWritten()
    ? new PostNotExistsTemplate()
    : new PostExistsTemplate();
  new Discord().postMessage(posts.outputReport(payloadTemplate));
}
