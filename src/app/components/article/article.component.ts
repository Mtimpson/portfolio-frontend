import { Component, Input, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import ARTICLE_QUERY from '../../apollo/queries/article/article';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  articleId: number;

  data: any = {};
  loading = true;
  errors: any;
  appUrl = environment.appUrl;

  private queryArticle: Subscription;
  private queryArticleId: Subscription;

  constructor(private apollo: Apollo, private route: ActivatedRoute) { }

  getArticleId() {
    this.queryArticleId = this.route.queryParams.subscribe(params => {
      // TODO: Implement better fix.. this was a quick hack.
      if (params[1] === undefined) {
        this.articleId = params[0];
      } else {
        this.articleId = params[0] + params[1];
      }
      console.log(this.articleId);
    });
  }
  getArticle() {
    this.queryArticle = this.apollo
      .watchQuery({
        query: ARTICLE_QUERY,
        variables: {
          id: this.articleId
        }
      })
      .valueChanges.subscribe(result => {
        this.data = result.data;
        this.loading = result.loading;
        this.errors = result.errors;
      });
  }

  getArticleData() {
    if (this.data !== null && this.data !== undefined) {
      return this.data;
    }
  }

  ngOnInit(): void {
    this.getArticleId();
    this.getArticle();
  }

  ngOnDestroy() {
    this.queryArticle.unsubscribe();
    this.queryArticleId.unsubscribe();
  }
}
