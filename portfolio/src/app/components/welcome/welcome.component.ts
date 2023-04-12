import { Component } from '@angular/core';

@Component({
    selector: 'app-welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent {
    user = {
        firstName: 'Handsome Jack',
        isSubscrined: true,
        birthday: new Date(1970,1,1)
    }

    askAboutName = true

    dateFormat = 'mediumDate'

    askIfSubscribed() {
        return this.user.isSubscrined
            ? 'You are subscribed'
            : 'Want to get updates ' + this.user.firstName + '?';
    }

    changeFirstName(firstNameRef: HTMLInputElement) {
        this.user.firstName = firstNameRef.value;
    }
}
