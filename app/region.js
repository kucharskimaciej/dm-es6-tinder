import View from './views/view.js';
export default class Region {
    constructor (element) {
        View.prototype.setElement.call(this, element);
    }
    clear () {
        if(!this.currentView) return;
        this.currentView.remove();
        this.empty();
    }
    empty () {
        while(this.element.lastChild) {
            this.element.removeChild(this.element.lastChild);
        }
    }
    show (view) {
        if(! view instanceof View) {
            return false;
        }
        view.setElement(this.element);
        view.render();
    }
}




