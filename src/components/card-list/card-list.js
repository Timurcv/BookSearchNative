import { DivComponent } from "../../common/div-component";
import { Card } from "../../components/card/card.js";
import './card-list.css';
export class CardList extends DivComponent{
    constructor(appState, perentState){
        super();
        this.appState = appState;
        this.perentState = perentState;
    }

    render(){
        if(this.perentState.loading){
           this.element.innerHTML = `<div class="card_list__loader">Загрузка...</div>`;
           return this.element;
        }

        const cardGrid = document.createElement('div');
        cardGrid.classList.add('card_grid');
        this.element.append(cardGrid)
        for(const card of this.perentState.list){
            cardGrid.append(new Card(this.appState, card).render());
        }
        return this.element
    }
}