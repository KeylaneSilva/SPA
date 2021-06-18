import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor(){
        super()
        this.setitle("Dashboard")
    }

    async getHtml(){
        return `
            <h1>E aí gente<h1>
            <p>Tudo o que voce quiser o cara lá de cima vai te dar</p>
        
        `

    }
}