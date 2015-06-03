export default class View {
    constructor (options = {}) {
        this._options = options;
        if(options.model) this.model = options.model;
        if(options.collection) this.collection = options.collection;
        if(options.element) this.setElement(options.element);
    }
    render () {
        if(!this.element)
            return console.warn("missing element");

        this.element.innerHTML = this.template(this.model);
        this.delegateEvents()
        return this;
    }
    setElement (el) {
        if(typeof el === "string")  {
            this.element = document.querySelector(el);
        } else {
            this.element = el;
        }
        return this;
    }
    delegateEvents () {
        // noop
    }
    remove () {
        // cleanup
    }

}
