import { AdventCalendar } from "./Api/AdventCalendar";
import { Discord } from "./Api/Discord";
import { MentionToPatipatiTemplate } from "./Domain/PostCollectionReport/MentionToPatipatiTemplate";
import { PostExistsTemplate } from "./Domain/PostCollectionReport/PostExistsTemplate";
import { PostNotExistsTemplate } from "./Domain/PostCollectionReport/PostNotExistsTemplate";

function postWeeklyReport() {
  const posts = new AdventCalendar().getUnreadPosts();
  const payloadTemplate = posts.hasNobodyWritten()
    ? new PostNotExistsTemplate()
    : new PostExistsTemplate();
  new Discord().postMessage(posts.outputReport(payloadTemplate));
}

function checkPatipati() {
  const posts = new AdventCalendar().getUnreadPosts();
  if (posts.onlyValid().authors().indexOf("パチパチ") !== -1) {
    return;
  }
  new Discord().postMessage(posts.outputReport(new MentionToPatipatiTemplate()));
}
