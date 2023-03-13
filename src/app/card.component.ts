import { Component, Input } from '@angular/core';
import { DownloadService } from './download.service';

@Component({
  selector: 'card',
  template: `
    <button
      class="inline-block mb-4 rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
      (click)="download()"
    >
      Download
    </button>

    <ng-container *ngIf="type === 'simple'">
      <article
        class="overflow-hidden rounded-lg shadow transition hover:shadow-lg"
      >
        <img
          alt="Office"
          src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          class="h-56 w-full object-cover"
        />

        <div class="bg-white p-4 sm:p-6">
          <time datetime="2022-10-10" class="block text-xs text-gray-500">
            10th Oct 2022
          </time>

          <a href="#">
            <h3 class="mt-0.5 text-lg text-gray-900">
              How to position your furniture for positivity
            </h3>
          </a>

          <p class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
            dolores, possimus pariatur animi temporibus nesciunt praesentium
            dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque
            minus soluta, voluptates neque explicabo tempora nisi culpa eius
            atque dignissimos. Molestias explicabo corporis voluptatem?
          </p>
        </div>
      </article>
    </ng-container>

    <ng-container *ngIf="type === 'floating'">
      <article class="group">
        <img
          alt="Lava"
          src="https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          class="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
        />

        <div class="p-4">
          <a href="#">
            <h3 class="text-lg font-medium text-gray-900">
              Finding the Journey to Mordor
            </h3>
          </a>

          <p class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
            dolores, possimus pariatur animi temporibus nesciunt praesentium
            dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque
            minus soluta, voluptates neque explicabo tempora nisi culpa eius
            atque dignissimos. Molestias explicabo corporis voluptatem?
          </p>
        </div>
      </article>
    </ng-container>
  `,
})
export class CardComponent {
  @Input() type = 'simple';
  constructor(private downloadService: DownloadService) {}
  download() {
    this.downloadService.download();
  }
}
