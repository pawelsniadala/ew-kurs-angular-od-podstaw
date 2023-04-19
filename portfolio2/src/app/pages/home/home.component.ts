import { Component } from '@angular/core';

interface Project {
  id: number,
  name: string,
  image: string
}

interface Testimonials {
  id: number,
  author: string,
  title: string,
  content: string,
  avatar: string,
  rating: number
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

  testimonials: Testimonials[] = [
    {
      id: 1,
      author: 'Johanna Arc',
      title: 'Awesome work',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ut sapiente perferendis, tenetur non fugiat fugit, facilis tempora fuga eos quae saepe asperiores hic quibusdam laudantium et nisi corrupti soluta.',
      avatar: 'https://i.imgur.com/h2E4WGw.jpg',
      rating: 3
    },
    {
      id: 1,
      author: 'Sly Conor',
      title: 'Awesome work',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ut sapiente perferendis, tenetur non fugiat fugit, facilis tempora fuga eos quae saepe asperiores hic quibusdam laudantium et nisi corrupti soluta.',
      avatar: 'https://i.imgur.com/h2E4WGw.jpg',
      rating: 5
    },
    {
      id: 1,
      author: 'Johny Rass',
      title: 'Awesome work',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ut sapiente perferendis, tenetur non fugiat fugit, facilis tempora fuga eos quae saepe asperiores hic quibusdam laudantium et nisi corrupti soluta.',
      avatar: 'https://i.imgur.com/h2E4WGw.jpg',
      rating: 4
    }
  ]
}
