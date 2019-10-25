import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { HomeComponent } from './home/home.component';
import { TodosComponent } from './2-todos/todos.component';
import { VoterComponent } from './1-voter/voter.component';
import { UserDetailsComponent } from './3-user-details/user-details.component';
import { UsersComponent } from './users/users.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TodosComponent,
    UserDetailsComponent,
    VoterComponent,
    UsersComponent,
    //NavComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //RouterModule.forRoot(routes),
    BrowserModule,
    // FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
