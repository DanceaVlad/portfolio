import {NgModule} from '@angular/core';
import {BrowserModule, provideClientHydration} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {TodoComponent} from './todo/todo.component';
import {TodoHeaderComponent} from './todo/todo-header/todo-header.component';
import {BrowserAnimationsModule, provideAnimations} from "@angular/platform-browser/animations";
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {environment} from "../environments/environment";
import {ReactiveFormsModule} from "@angular/forms";
import {ToastrModule} from 'ngx-toastr';
import {CommonModule} from "@angular/common";
import {SignupComponent} from './signup/signup.component';
import {SignInComponent} from './sign-in/sign-in.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        TodoComponent,
        TodoHeaderComponent,
        SignupComponent,
        SignInComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule,
        ReactiveFormsModule,
        CommonModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot(),
    ],
    providers: [
        provideClientHydration(),
        provideAnimations(),
    ], bootstrap: [AppComponent]
})
export class AppModule {
}
