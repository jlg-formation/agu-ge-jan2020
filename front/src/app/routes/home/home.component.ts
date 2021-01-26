import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  // tslint:disable-next-line: quotemark
  welcome = 'tournevis cruciforme';
  constructor(public articleService: ArticleService) {}

  ngOnInit(): void {}
}
