import { Component, Input } from '@angular/core';
import { DownloadService } from '../download.service';

@Component({
  selector: 'card',
  template: `
    <button
      class="inline-block mb-4 rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
      (click)="download()"
    >
      Download
    </button>
    <ng-content></ng-content>
  `,
})
export class CardComponent {
  @Input() type = 'simple';
  constructor(private downloadService: DownloadService) {}
  download() {
    this.downloadService.download();
  }
}
