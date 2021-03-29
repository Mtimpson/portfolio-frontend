import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import CATEGORY_ARTICLES_QUERY from '../../apollo/queries/category/articles';
import { ActivatedRoute, ParamMap } from "@angular/router";
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  data: any = {};
  category: any = {};
  loading = true;
  errors: any;
  leftArticlesCount: any;
  leftArticles: any[];
  rightArticles: any[];
  id: any;
  apiUrl = environment.apiUrl;


  private queryCategoriesArticles: Subscription;

  constructor(private apollo: Apollo, private route: ActivatedRoute) { }

  getCategories() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get("id");
      this.queryCategoriesArticles = this.apollo
        .watchQuery({
          query: CATEGORY_ARTICLES_QUERY,
          variables: {
            id: this.id
          }
        })
        .valueChanges.subscribe(result => {
          this.data = result.data
          this.category = this.data.category.name
          console.log(this.data)
          this.leftArticlesCount = Math.ceil(this.data.category.articles.length / 5);
          this.leftArticles = this.data.category.articles.slice(0, this.leftArticlesCount);
          this.rightArticles = this.data.category.articles.slice(
            this.leftArticlesCount,
            this.data.category.articles.length
          );
          this.loading = result.loading;
          this.errors = result.errors;
        });
    });
  }

  ngOnInit(): void {
    this.getCategories();
  }

  ngOnDestroy() {
    this.queryCategoriesArticles.unsubscribe();
  }

}


