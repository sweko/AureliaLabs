import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class Flickr{
    heading = 'Flickr';
    images = [];
    url = 'http://api.flickr.com/services/feeds/photos_public.gne?tags=mountain&tagmode=any&format=json';

    constructor(http){
        this.http = http;
    }

    activate(){
        return this.http.jsonp(this.url).then(response => {
            console.log(response.content.items);   
        this.images = response.content.items;
    });
}

canDeactivate(){
    return confirm('Are you sure you want to leave?');
}
}