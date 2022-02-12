import AbstractShareButton from "./AbstractShareButton";
import DOMEventHandler from "./DOMEventHandler";
import ShareButtonFacebook from "./ShareButtonFacebook";
import ShareButtonLinkedIn from "./ShareButtonLinkedIn";
import ShareButtonPrint from "./ShareButtonPrint";
import ShareButtonTwitter from "./ShareButtonTwitter"

const eventHandler =  new DOMEventHandler();

const twitter: AbstractShareButton = new ShareButtonTwitter(".btn-twitter", "https://www.youtube.com/rodrigobranas");
twitter.bind();
const facebook: AbstractShareButton = new ShareButtonFacebook(".btn-facebook", "https://www.youtube.com/rodrigobranas");
facebook.bind();
const linkedin: AbstractShareButton = new ShareButtonLinkedIn(".btn-linkedin", "https://www.youtube.com/rodrigobranas");
linkedin.bind();
const print: AbstractShareButton = new ShareButtonPrint(".btn-print");
print.bind();