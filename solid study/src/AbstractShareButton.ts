import EventHandler from "./EventHandler";

export default abstract class ShareButton{
    eventHandler: EventHandler;
    clazz: string;

    constructor(eventHandler: EventHandler, clazz: string){
        this.clazz = clazz;
        this.eventHandler = eventHandler;
        
    }

    abstract createAction();
    
    bind(){
        const action = this.createAction();
        this.eventHandler.addEventListenerToClass(this.clazz, "click", action);
        
        }
        

    }

