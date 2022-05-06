import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RecipeBookComponent } from './component/recipe-book/recipe-book.component';
import { ShoppingListComponent } from './component/shopping-list/shopping-list.component';
import { HeaderComponent } from './component/header/header.component';
import { RecipeListComponent } from './component/recipe-book/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './component/recipe-book/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './component/recipe-book/recipe-list/recipe-item/recipe-item.component';
import { ShoppingEditComponent } from './component/shopping-list/shopping-edit/shopping-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeBookComponent,
    ShoppingListComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingEditComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
