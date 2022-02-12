
import AbstractLinkShareButton from "./AbstractShareButton";

export default class ShareButtonPrint extends AbstractLinkShareButton{
    
    constructor(clazz: string){
        super(clazz);

    };

    createAction() {
        return () => window.print();
    }


}

