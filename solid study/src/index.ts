import AbstractShareButton from "./AbstractShareButton";
import ShareButtonFacebook from "./ShareButtonFacebook";
import DOMEventHandler from "./DOMEventHandler";
import MockEventHandler from "./MockEventHandler";
import ShareButtonLinkedIn from "./ShareButtonLinkedIn";
import ShareButtonPrint from "./ShareButtonPrint";
import ShareButtonTwitter from "./ShareButtonTwitter"


const eventHandler =  new MockEventHandler();

const twitter: AbstractShareButton = new ShareButtonTwitter(eventHandler, ".btn-twitter", "https://www.youtube.com/rodrigobranas");
twitter.bind();
const facebook: AbstractShareButton = new ShareButtonFacebook(eventHandler, ".btn-facebook", "https://www.youtube.com/rodrigobranas");
facebook.bind();
const linkedin: AbstractShareButton = new ShareButtonLinkedIn(eventHandler, ".btn-linkedin", "https://www.youtube.com/rodrigobranas");
linkedin.bind();
const print: AbstractShareButton = new ShareButtonPrint(eventHandler, ".btn-print");
print.bind();