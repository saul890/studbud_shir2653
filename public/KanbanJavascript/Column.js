import Kanban from "./Kanban";
import KanbanAPI from "./kanbanAPI";

export default class Column{
    constructor(id, title) {
        this.elements = {};
        this.elements.root = Column.createRoot();
        this.elements.title = this.elements.root.querySelector(".kanban_column_title");
        this.elements.items = this.elements.root.querySelector(".kanban_column_items");

        this.elements.root.dataset.id = id;
        this.elements.title.textContent = title;

        KanbanAPI.getItems(id).ForEach(item => {
            console.log(item);
        });
    }

    static createRoot(){
        const range = document.createRange();

        range.selectNode(document.body);

        return range.createContextualFragment(`
            <div class="kanban_column">
                <div class="kanban_column_title"></div>
                <div class="kanban_column_items"></div>
            </div>
        `).children[0];
    }

    renderItem(data){
        
    }
}