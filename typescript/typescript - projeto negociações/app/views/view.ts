export abstract class View<T>{
    
    protected elemento: HTMLElement;
    private escapar = false.valueOf;
    
    constructor(seletor: string, escapar: boolean){
    this.elemento = document.querySelector(seletor);
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