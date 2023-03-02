import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div class="w-[1024px] mx-auto py-16">
    <h1 class="text-2xl mb-4">Single Responsibility Principle</h1>
    <main class="flex flex-row gap-4">
      <card></card>
    </main>
  </div> `,
})
export class AppComponent {}
