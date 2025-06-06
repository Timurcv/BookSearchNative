import { DivComponent } from "../../common/div-component";
import './search.css';
export class Search extends DivComponent{
    constructor(state){
        super();
        this.state = state;
    }

    search(){
        const value = this.element.querySelector("input").value
        this.state.searchQuery = value
    }
    render(){
        this.element.classList.add('search');
        this.element.innerHTML = `
        <div class="search__wrapper">
            <input type="text" 
            placeholder="Найти книгу или автора..."
            class="search__input"
            value="${this.state.searchQuery ? this.state.searchQuery : ''}"
            />
        <img src="/static/search.svg" alt="Icon search"/>
        </div>
        <button aria-label="Искать"><img src="/static/search2.svg" alt="Icon search/>"</button>
        `
        this.element.querySelector('button').addEventListener('click', this.search.bind(this));
        this.element.querySelector('input').addEventListener('keydown', (event) => {
            if (event.key === 'Enter'){
                this.search()
            }
        });
        return this.element
    }
}