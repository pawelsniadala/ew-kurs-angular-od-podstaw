import { Component } from '@angular/core';

@Component({
    selector: 'app-welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent {
    user = {
        firstName: 'Handsome Jack',
        isSubscrined: true
    }

    askIfSubscribed() {
        return this.user.isSubscrined
            ? 'You are subscribed'
            : 'Want to get updates ' + this.user.firstName + '?';
    }
}