import {Component, OnInit} from '@angular/core';
import {AuthService} from "../todo/service/auth.service";
import firebase from "firebase/compat/app";
import {config, map, Observable} from "rxjs";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ToastrService} from "ngx-toastr";

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrl: './sign-in.component.scss'
})
export class SignInComponent {
}
