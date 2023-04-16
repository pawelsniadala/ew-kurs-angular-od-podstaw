import {
    Component,
    OnInit,
    Input,
    EventEmitter,
    Output,
    OnChanges
} from '@angular/core';

@Component({
    selector: 'app-welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.css'],
    // inputs: ['user: data']
})

export class WelcomeComponent implements OnInit, OnChanges {
    constructor() {}

    @Input()
    user = {
        firstName: 'Handsome',
        isSubscribed: false,
        email: ''
    }

    ngOnChanges(changes: any): void {
        if (changes.user.currentValue.isSubscribed) {
            this.steps.askForFirstName = false;
            this.steps.subscribedSuccess = true;
        }
    }

    @Output()
    userSubscribed = new EventEmitter()

    steps = {
        showWelcome: false,
        askForFirstName: true,
        askForEmail: false,
        askToSubscribe: false,
        subscribedSuccess: false
    }

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
        this.steps.askForFirstName = false;
        this.steps.askForEmail = true;
        this.steps.askToSubscribe = false;
    }

    subscribeUser(email: string) {
        this.user.email = email;
        this.user.isSubscribed = true;
        this.steps.showWelcome = false;
        this.steps.askForEmail = false;
        this.steps.subscribedSuccess = true;

        this.userSubscribed.emit(this.user)
        // this.userSubscribed.subscribe(console.log)
    }

    skipSubscription() {}

    ngOnInit(): void {}
}
