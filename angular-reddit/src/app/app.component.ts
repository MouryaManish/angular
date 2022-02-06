import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  articles:Article[]

  constructor(){
    this.articles = [
      new Article("New York Times","https://www.nytimes.com",0),
      new Article("Washinton Post","https://www.washingtonpost.com",0),
      new Article("The Hindu","https://www.thehindu.com",0)
    ]
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`title:${title.value} link:${link.value}`);
    this.articles.push(new Article(title.value, link.value, 0));
    title.value = "";
    link.value = "";
    return false;
  }

  sortArticles(): Article[] {
    this.articles.sort((a:Article,b:Article) => b.votes - a.votes);
    return this.articles;
  }
}
