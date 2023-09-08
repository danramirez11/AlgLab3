import * as components from "./components/export";
import { objectWithImages } from "./data/data";
import DivColor, { Attribute } from "./components/Div/Div";

class AppContainer extends HTMLElement {

    divs: any = [];

    constructor(){
        super();
        this.attachShadow({mode: "open"});

        objectWithImages.forEach((array) => {
            const arrayDiv = this.ownerDocument.createElement("div");
            arrayDiv.classList.add("arrayDiv")
            array.forEach((line) => {
                const lineDiv = this.ownerDocument.createElement("div");
                lineDiv.classList.add("lineDiv")
                line.forEach((number) => {
                    const divColor = this.ownerDocument.createElement("my-div");
                    if(number === 0){
                        divColor.setAttribute(Attribute.color, "white")
                    }else{
                        divColor.setAttribute(Attribute.color, "black")
                    };
                    lineDiv.appendChild(divColor);
                })
                arrayDiv.appendChild(lineDiv)
            })
            this.divs.push(arrayDiv)
        })
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML=`<link rel="stylesheet" href="index.css">`
            this.divs.forEach((div: HTMLDivElement) => {
                this.shadowRoot?.appendChild(div)
            })
    }
}
}

customElements.define("app-container", AppContainer);