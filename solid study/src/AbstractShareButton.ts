import EventHandler from "./EventHandler";

export default abstract class ShareButton{
    eventHandler: EventHandler;
    clazz: string;

    constructor(clazz: string){
        this.eventHandler = new EventHandler();
        this.clazz = clazz;
        
    }

    abstract createAction();
    
    bind(){
        const action = this.createAction();
        this.eventHandler.addEventListenerToClass(this.clazz, "click", action);
        
        }
        

    }

