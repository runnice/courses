
import AbstractShareButton from "./AbstractLinkShareButton";

export default class ShareButtonLinkedIn extends AbstractShareButton{
    
    constructor(clazz: string, url:string){
        super(clazz, url);

    };

    createLink(): string {
        return `http://www.linkedin.com/shareArticle?url=${this.url}`;
    }


}