import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from 'src/app/data/schema/project';
import { ProjectService } from 'src/app/data/service/project.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  projects$: Observable<Project[]> = this.projectService.getAll();

  constructor(private projectService: ProjectService) {}
}
