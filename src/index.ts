import { AdventCalendar } from "./Api/AdventCalendar";
import { Discord } from "./Api/Discord";
import { PostExistsTemplate } from "./PayloadTemplate/PostExistsTemplate";
import { PostNotExistsTemplate } from "./PayloadTemplate/PostNotExistsTemplate";

function postToDiscord() {
  const validPosts = new AdventCalendar()
    .getUnreadPosts()
    .filter((post) => post.url !== "");

  const payloadTemplate = validPosts.length === 0
    ? new PostNotExistsTemplate()
    : new PostExistsTemplate();
  new Discord().postMessage(payloadTemplate.fillOut(validPosts));
}
