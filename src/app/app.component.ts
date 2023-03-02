import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div class="w-[1024px] mx-auto py-16">
    <h1 class="text-2xl mb-4">Single Responsibility Principle</h1>
    <main class="flex flex-row gap-4">
      <article class="flex bg-white transition hover:shadow-xl">
        <div class="rotate-180 p-2 [writing-mode:_vertical-lr]">
          <time
            datetime="2022-10-10"
            class="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
          >
            <span>2022</span>
            <span class="w-px flex-1 bg-gray-900/10"></span>
            <span>Oct 10</span>
          </time>
        </div>
        <div class="hidden sm:block sm:basis-56">
          <img
            alt="Guitar"
            src="https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            class="aspect-square h-full w-full object-cover"
          />
        </div>
        <div class="flex flex-1 flex-col justify-between">
          <div
            class="border-l border-gray-900/10 p-4 sm:border-l-transparent sm:p-6"
          >
            <a href="#">
              <h3 class="font-bold uppercase text-gray-900">
                Finding the right guitar for your style - 5 tips
              </h3>
            </a>

            <p class="mt-2 text-sm leading-relaxed text-gray-700 line-clamp-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae dolores, possimus pariatur animi temporibus nesciunt
              praesentium dolore sed nulla ipsum eveniet corporis quidem,
              mollitia itaque minus soluta, voluptates neque explicabo tempora
              nisi culpa eius atque dignissimos. Molestias explicabo corporis
              voluptatem?
            </p>
          </div>
          <div class="sm:flex sm:items-end sm:justify-end">
            <a
              (click)="download()"
              class="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400 cursor-pointer"
            >
              Download
            </a>
          </div>
        </div>
      </article>
    </main>
  </div> `
})
export class AppComponent {
  download() {
    alert('download...');
  }
}
