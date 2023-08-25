import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Project } from 'src/app/data/schema/project';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html'
})
export class ProjectDetailsComponent implements OnInit {
  project$!: Observable<Project>; // Using definite assignment assertion

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.project$ = this.route.data.pipe(map(data => data['project']));
  }
}
