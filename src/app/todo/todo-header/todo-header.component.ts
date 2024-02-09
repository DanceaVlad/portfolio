import {Component, OnInit} from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';
import {Router} from "@angular/router";
import {AuthService} from "../service/auth.service";

@Component({
    selector: 'app-todo-header',
    templateUrl: './todo-header.component.html',
    styleUrl: './todo-header.component.scss',
    animations: [
        trigger('expandAbout', [
            state('closed', style({height: '0', opacity: '0'})),
            state('open', style({height: '*', opacity: '1'})),
            transition('closed <=> open', animate('300ms ease-in-out')),
        ]),
    ],
})

export class TodoHeaderComponent implements OnInit {

    constructor(private router: Router,
                protected authService: AuthService,
    ) {
    }

    ngOnInit(): void {
        this.aboutClicked = false;
        this.aboutSectionState = 'closed';
    }

    aboutClicked: boolean = false;
    aboutSectionState: string = 'closed';

    onClickAbout() {
        this.aboutClicked = !this.aboutClicked;
        this.aboutSectionState = this.aboutClicked ? 'open' : 'closed';
    }

    onClickSignIn() {
        this.authService.signInWithGoogle();
    }

    onClickSignOut() {
        this.authService.signOut();
    }


}
