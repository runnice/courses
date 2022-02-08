export abstract class View<T>{
    
    protected elemento: HTMLElement;
    private escapar = false;
    
    constructor(seletor: string, escapar?: boolean){
    this.elemento = document.querySelector(seletor) as HTMLElement;
    if (escapar){
        this.escapar = escapar;
    }
    }

    protected abstract template(model: T): string;

    public update(model: T): void{
        let template = this.template(model);
        // script para remover tag script e proteger o template.
        if (this.escapar){
            template = template.replace(/<script>[\s\S]*?<\/script>/, '')
        }
        this.elemento.innerHTML = template;

    }

    
}