import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-main-national-id',
  templateUrl: './main-national-id.component.html',
  styleUrl: './main-national-id.component.scss'
})
export class MainNationalIDComponent {
  @Output() PageEvent = new EventEmitter<string>();
  ChangePage(page: string) {
    this.PageEvent.emit(page);
  }
}
