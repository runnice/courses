import EventHandler from "./EventHandler";

export default abstract class ShareButton{
    eventHandler: EventHandler;
    url: string;
    clazz: string;

    constructor(clazz: string, url:string){
        this.eventHandler = new EventHandler();
        this.url = url;
        this.clazz = clazz;
        
    }

    abstract createLink(): string;

    bind(){
        const link = this.createLink();
        this.eventHandler.addEventListenerToClass(this.clazz, "click", () => window.open(link));
        
        }
        

    }

