import {
  Component,
  OnInit
} from '@angular/core';
import {
  ActivatedRoute,
  Router
} from '@angular/router';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent implements OnInit {
  filtered: any[] = [];
  recentProjects: any = [];
  categories = [
    {
      id: "web",
      label: "Web & Interactive"
    },
    {
      id: "animation",
      label: "Animation"
    },
    {
      id: "culture-and-education",
      label: "Culture & Education"
    }
  ];
  category: any = {};
  message: string = '';
  loading: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      const tag = params.get('tag');
      this.selectCategoty(tag);
    });
    this.loading = true;
    this.http
      .get('http://localhost:4200/assets/projects/projects.json')
      .subscribe({
        next: (project) => {
          this.recentProjects = project;
          const tag = this.route.snapshot.queryParamMap.get('tag');
          this.selectCategoty(tag);
        },
        error: (error) => {
          this.message = `Unexpected error: ${error.statusText}`;
        },
        complete: () => {
          this.loading = false;
        }
      });
  }

  navigateToCat(cat_id: any) {
    this.router.navigate(['/projects'], {
      queryParams: { tag: cat_id }
    })
  }

  selectCategoty(cat_id: any) {
    this.category = this.categories.find(c => c.id === cat_id);
    this.category
      ? this.filtered = this.recentProjects
        .filter((p: { tags: string[] }) => p.tags.includes(this.category.label))
      : this.filtered = this.recentProjects;
  }
}
