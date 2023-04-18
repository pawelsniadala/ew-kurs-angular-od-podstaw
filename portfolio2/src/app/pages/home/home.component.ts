import { Component } from '@angular/core';

interface Project {
  id: number,
  name: string,
  image: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  readmore: boolean = false;
  currentTab: string = '';
  recentProject: Project[] = [
    {
      id: 1,
      name: 'Project One',
      image: 'https://picsum.photos/seed/256/400/400'
    },
    {
      id: 2,
      name: 'Project Two',
      image: 'https://picsum.photos/seed/953/400/400'
    },
    {
      id: 2,
      name: 'Project Three',
      image: 'https://picsum.photos/seed/971/400/400'
    }
  ];
}
