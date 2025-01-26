import { Component } from '@angular/core';
import { Course } from '../model/course';
import { AppMaterialModule } from '../../shared/app-material/app-material.module';
import { CoursesService } from '../services/courses.service';


@Component({
  selector: 'app-courses',
  imports: [
    AppMaterialModule
  ],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {

  courses: Course[] = [];
  displayedColumns: string[] = ['name', 'category'];

  constructor(private courseService: CoursesService) {

    this.courses = this.courseService.list();

  }

}
