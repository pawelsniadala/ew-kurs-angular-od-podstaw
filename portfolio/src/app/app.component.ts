import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <div style="text-align:center" class="main-content">
            <div>
                <h1>Welcome to {{ title }}!</h1>
                <h2>User {{ user.firstName }}</h2>
                <span style="display: block">{{ title }} app is running!</span>
                <img width="300" alt="Angular Logo" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==">
            </div>
            <input type="text"
                [value]="user.firstName"
                (keyup)="user.firstName = $any($event.target).value"
            >
            <app-welcome
                [user]="anonym"
                (userSubscribed)="user = $event"
            >
            </app-welcome>
            <app-welcome
                [user]="user"
            >
            </app-welcome>
        </div>
    `,
    styles: [`
        .main-content {
            padding: 20px;
            font-family: sans-serif;
        }
    `]
})

export class AppComponent {
    title = 'Portfolio';

    user = {
        firstName: 'User',
        isSubscribed: false,
        email: ''
    }

    anonym = {
        firstName: '',
        isSubscribed: false,
        email: ''
    }

    // subscribed(user: any) {
    //     console.log(user);
    //     this.user = user;
    // }
}
