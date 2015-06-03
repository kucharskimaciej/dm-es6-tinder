let dimensions = {
    width: 350,
    height: 600
};

let randomSuffix = () => Math.round(Math.random() * 1000)

class Photo {
    static generateUrl () {
        return `http://lorempixel.com/${Photo.dimensions().width}/${Photo.dimensions().height}/people?${randomSuffix()}`;
    }
    static dimensions (dim = dimensions) {
        dimensions = dim;
        return dimensions;
    }
    constructor () {
        this.url = Photo.generateUrl();
        this.upvote = false;
    }
}
class PhotoList {
    [Symbol.iterator]() {
        return {
            next: () => {
                return { value: new Photo(), done: false }
            }
        }
    }
}

export default {Photo, PhotoList};
