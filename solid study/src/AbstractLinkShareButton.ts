import AbstractShareButton from "./AbstractShareButton";
import EventHandler from "./EventHandler";

export default abstract class AbstractLinkhareButton extends AbstractShareButton{
    url: string;

    constructor(eventHandler: EventHandler, clazz: string, url: string){
        super(eventHandler, clazz);
        this.url = url;
    }

    abstract createLink(): string;

    createAction():any {
        const link = this.createLink();
        return () => window.open(link);
        
    }
}