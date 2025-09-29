import {Injectable} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class Seo {

  constructor(private title: Title, private meta: Meta) {
  }

  updateMetadata(title: string, description: string, image: string, url: string) {
    this.title.setTitle(title);
    this.meta.updateTag({property: 'og:title', content: title});
    this.meta.updateTag({name: 'twitter:title', content: title});

    this.meta.updateTag({name: 'description', content: description});
    this.meta.updateTag({property: 'og:description', content: description});
    this.meta.updateTag({name: 'twitter:description', content: description});

    this.meta.updateTag({property: 'og:image', content: image});
    this.meta.updateTag({name: 'twitter:image', content: image});

    this.meta.updateTag({property: 'og:url', content: url});

    this.meta.updateTag({name: 'robots', content: 'index, follow'});
    this.meta.updateTag({property: 'og:type', content: 'website'});
    this.meta.updateTag({name: 'twitter:card', content: 'summary_large_image'});
  }
}
