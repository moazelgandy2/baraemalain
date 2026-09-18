import { Component } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.scss'
})
export class ScheduleComponent {

  OpenSchedule(sec: string,name: string){
    window.open('assets/Files/Schedule/'+sec+'/'+name+'.pdf', "_blank");
  }
}
