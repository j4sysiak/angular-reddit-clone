import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from './auth/login/login.component';
import {SignupComponent} from './auth/signup/signup.component';
import {UserProfileComponent} from './auth/user-profile/user-profile.component';
import {HomeComponent} from './home/home.component';
import {CreatePostComponent} from './post/create-post/create-post.component';
import {ViewPostComponent} from './post/view-post/view-post.component';
import {CreateSubredditComponent} from './subreddit/create-subreddit/create-subreddit.component';
import {ListSubredditsComponent} from './subreddit/list-subreddits/list-subreddits.component';
import {ViewSubredditComponent} from './subreddit/view-subreddit/view-subreddit.component';
import {ViewProductComponent} from './product/view-product/view-product.component';
import {ViewPolicyComponent} from './policy/view-policy/view-policy.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'view-post/:id', component: ViewPostComponent },
    { path: 'user-profile/:name', component: UserProfileComponent },
    { path: 'list-subreddits', component: ListSubredditsComponent },
    { path: 'view-subreddit/:id', component: ViewSubredditComponent },
    { path: 'view-product/:id', component: ViewProductComponent },
    { path: 'view-policy/:id', component: ViewPolicyComponent },
    { path: 'create-post', component: CreatePostComponent },
    { path: 'create-subreddit', component: CreateSubredditComponent },
    { path: 'sign-up', component: SignupComponent },
    { path: 'login', component: LoginComponent }
  ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
