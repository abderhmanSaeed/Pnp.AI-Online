import { Component, Input } from '@angular/core';
import { Project } from 'src/app/data/schema/project';


@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent {
  @Input() project: Project = {
    id: 0,
    link: '',
    title: '',
    thumbnail: '',
    description: ''
  }; // Initialize with an empty object or default value

  flipped = false;
}
