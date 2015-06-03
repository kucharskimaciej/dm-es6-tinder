import View from './view.js';
import {PhotoTpl} from '../templates.js';

export default class PhotoView extends View {
    template (model) {
        return PhotoTpl(model);
    }
    delegateEvents () {
        this.element.querySelector("[action=upvote]").addEventListener("click", () => this.upvote())
    }
    upvote () {
         this.model.upvote = true;
         this.render();
    }
}
