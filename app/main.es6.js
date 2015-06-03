import  Application from './application.js';
import {PhotoList} from './models/photo.js';
import AppView from './views/app_view.js';

Application.start(function (app) {
    let photos, view;

    photos = new PhotoList();
    view = new AppView({
        collection: photos
    });

    app.main.show(view);
});




