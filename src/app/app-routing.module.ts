import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {TodoComponent} from "./todo/todo.component";
import {SignInComponent} from "./sign-in/sign-in.component";
import {Sign} from "node:crypto";

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'todo', component: TodoComponent},
    {path: 'sign-in', component: SignInComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: false})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
