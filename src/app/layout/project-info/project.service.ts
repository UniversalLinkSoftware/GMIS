import { Project } from '../project-info/project-info.model';
import { OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ProjectService  {
  public API = 'http://localhost:6654/api';
  public PROJECT_API = `${this.API}/ProjectInfoes`;

  // private projectInfo: Project;
  constructor(private http: HttpClient) {}

  getAll(): Observable <Array<Project>> {
    return this.http.get<Array<Project>>(this.PROJECT_API);
  }

  get(id: number) {
    return this.http.get<Project>(`${this.PROJECT_API}/${id}`);
  }

  save(project: Project): Observable<Project> {
    let result: Observable<Project>;
    if (project.id) {
      result = this.http.put<Project>(
        `${this.PROJECT_API}/${project.id}`,
        project
      );
    } else {
      result = this.http.post<Project>(this.PROJECT_API, project);
    }
    return result;
  }

  remove(id: number) {
    return this.http.delete(`${this.PROJECT_API}/${id.toString()}`);
  }







  // projectChanged = new Subject<Project>();

  // addProject(rproject: Project) {
  //   console.log(rproject);
  //   this.projectInfo = rproject;
  // }

  // getProjectInfo() {
  //   return this.projectInfo;
  // }

  // setProject(rproject: Project) {
  //   this.projectInfo = rproject;
  //   console.log(this.projectInfo);
  //   this.projectChanged.next( this.projectInfo);
  // }

}
