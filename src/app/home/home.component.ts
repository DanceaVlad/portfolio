import {ChangeDetectorRef, Component, HostListener, OnInit} from '@angular/core';
import {AuthService} from "../todo/service/auth.service";
import {firebaseApp$} from "@angular/fire/app";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {

    textSize: string = '7vw';

    stripWidths: { [key: string]: string } = {
        darkBlue: '6vw',
        lila: '6vw',
        pink: '6vw',
        salmon: '6vw',
        peach: '6vw'
    };

    stripFontSizes: { [key: string]: string } = {
        darkBlue: '3vw',
        lila: '3vw',
        pink: '3vw',
        salmon: '3vw',
        peach: '3vw'
    };

    stripTextTransform: { [key: string]: string } = {
        darkBlue: '',
        lila: '',
        pink: '',
        salmon: '',
        peach: ''
    };

    stripDescriptionVisibility: { [key: string]: string } = {
        darkBlue: 'hidden',
        lila: 'hidden',
        pink: 'hidden',
        salmon: 'hidden',
        peach: 'hidden'
    };

    onClickMainText(): void {
        this.resetSizes();
        this.textSize = '7vw';
    }

    onClick(color: string): void {
        if (this.stripWidths[color] != '30vw') {
            this.resetSizes();
            this.stripWidths[color] = '30vw';
            this.stripFontSizes[color] = '5vw';
            this.textSize = '5vw';
            this.stripTextTransform[color] = 'transform: rotate(-90deg) translate(20vw, -3vw)';
            setTimeout(() => {
                this.stripDescriptionVisibility[color] = 'visible';
            }, 200);
        }
    }

    private resetSizes(): void {
        for (let strip in this.stripWidths) {
            this.stripWidths[strip] = '6vw';
            this.stripFontSizes[strip] = '3vw';
            this.stripTextTransform[strip] = '';
            this.stripDescriptionVisibility[strip] = 'hidden';
            this.textSize = '7vw'
        }
    }

    ngOnInit(): void {
        this.resetSizes();
    }

    @HostListener('window:resize', ['$event'])
    onResize(event: any) {
        this.cdr.detectChanges();
    }

    constructor(private cdr: ChangeDetectorRef,
                protected authService: AuthService
    ) {
    }
}
