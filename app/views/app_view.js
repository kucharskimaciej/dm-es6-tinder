import View from './view.js';
import PhotoView from './photo_view.js';
import Region from '../region.js';
import {AppTpl} from '../templates.js';

export default class AppView extends View {
    constructor (options) {
        super.constructor(options);

        this.photoContainer = "[photo]";
        let photoGenerator = function *() {
            for(let photo of this.collection) {
                yield photo;
            }
        }
        this.generator = photoGenerator.call(this);
    }
    template () {
        return AppTpl();
    }
    render () {
        super.render();
        this.$photoContainer = new Region("[photo]");
        this.renderPhoto();
        return this;
    }
    renderPhoto () {
        let model = this.generator.next().value;
        let view = new PhotoView({ model });
        this.$photoContainer.show(view)
    }
    delegateEvents () {
        this.element.querySelector("[action=next]").addEventListener("click", this.renderPhoto.bind(this))
    }
}
