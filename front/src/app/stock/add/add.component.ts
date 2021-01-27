import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Article } from 'src/app/interfaces/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  f = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    price: new FormControl('1.23', [Validators.required]),
    qty: new FormControl('200', [Validators.required]),
  });

  constructor(private articleService: ArticleService, private router: Router) {}

  ngOnInit(): void {}

  submit(): void {
    console.log('submit');
    this.articleService.add(this.f.value as Article);
    this.router.navigateByUrl('/stock');
  }
}
