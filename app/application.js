import Region from './region.js';

export default {
    start: function(callback) {
        this.main = new Region("#main");
        callback(this);
    }
}
