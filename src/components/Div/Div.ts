export enum Attribute {
    "color" = "color"
}

class DivColor extends HTMLElement {

    color?: string;

    static get observedAttributes (){
        const attrs: Record <Attribute, null> = {
            color: null,
        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(propName:Attribute,oldValue: string | undefined,newValue: string | undefined){
        switch(propName){
            default: 
            this[propName] = newValue;
            break;
        }
        
        this.render();
    }

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    this.render();
    }
   
    connectedCallback(){
        this.render();
    }

    render(){
        if (this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./Div.css">
            <div class="${this.color}"> 
            </div>
            `
            
        }
    }
}

customElements.define("my-div", DivColor);
export default DivColor;