// import { Component } from '@angular/core';

// @Component({
//     selector: 'app-welcome',
//     templateUrl: './welcome.component.html',
//     styleUrls: ['./welcome.component.css']
// })

// export class WelcomeComponent {
//     user = {
//         firstName: 'Handsome Jack',
//         isSubscrined: true,
//         birthday: new Date(1970,1,1)
//     }

//     askAboutName = true

//     dateFormat = 'mediumDate'

//     askIfSubscribed() {
//         return this.user.isSubscrined
//             ? 'You are subscribed'
//             : 'Want to get updates ' + this.user.firstName + '?';
//     }

//     changeFirstName(firstNameRef: HTMLInputElement) {
//         this.user.firstName = firstNameRef.value;
//     }
// }

import {
    Component,
    OnInit
} from '@angular/core';

@Component({
    selector: 'app-welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent implements OnInit {
    user = {
        firstName: 'Handsome',
        isSubscribed: false,
        email: ''
    }

    steps = {
        showWelcome: false,
        askForFirstName: true,
        askForEmail: true,
        askToSubscribe: false,
        subscribedSuccess: false
    }

    constructor() {}

    updateName(firstName: string) {
        this.user.firstName = firstName;

        if('Handsome'.startsWith(firstName) === false) {
            this.steps.showWelcome = true;
        }

        if(this.steps.showWelcome && firstName.length >= 3) {
            setTimeout(() => {
                this.steps.askToSubscribe = true;
            }, 1500);
        }
    }

    updateEmail(email: string) {
        this.user.email = email;
    }

    agreedToSubscribe() {
        this.steps.askForEmail = true;
        this.steps.askToSubscribe = false;
    }

    subscribeUser(email: string) {
        this.user.email = email;
        this.user.isSubscribed = true;
        this.steps.askForEmail = false;
        this.steps.subscribedSuccess = true;
    }

    skipSubscription() {}

    ngOnInit(): void {}
}
