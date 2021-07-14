import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Article } from 'src/app/model/article/article';

@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
  styleUrls: ['./article-create.component.css']
})
export class ArticleCreateComponent implements OnInit {
  article: Article = { 
    id: 0, title:'', 
    date: new Date, 
    author: '', 
    tldr: [''], 
    content: [''], 
    level:'', 
    likes:0, 
    dislikes:0, 
    visits:0 
  };
  level = new FormControl('');

  articleRForm = this.fb.group({
    title: ['', Validators.required],
    author: ['', Validators.required],
    tldr: this.fb.array([
      ''
    ]),
    content: this.fb.array([
      ''
    ]),
    level: ['']
  });

  get tldr(){
    return this.articleRForm.get('tldr') as FormArray
  }

  get content(){
    return this.articleRForm.get('content') as FormArray
  }

  addTldr(): void {
    this.tldr.push(this.fb.control(''));
  }

  addContent(): void {
    this.content.push(this.fb.control(''));
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  submit(): void{
    console.log(JSON.stringify(this.article));
  }

  submitReactive(): void{
    console.log(this.articleRForm.value);
    this.article.date = new Date();
  }

}
