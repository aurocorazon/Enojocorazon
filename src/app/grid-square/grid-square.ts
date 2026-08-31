import { Component, computed, effect, ElementRef, input, signal, viewChild } from '@angular/core';

@Component({
  selector: 'app-grid-square',
  imports: [],
  templateUrl: './grid-square.html',
  styleUrl: './grid-square.scss',
})
export class GridSquare {
  itemWidth = input<number>(50);
  gap = input<number>(34);
  icon = input<string>('♥');

  containerRef = viewChild<ElementRef<HTMLDivElement>>('container');
  containerWidth = signal<number>(0);

  totalItems = computed(() => {
    const width = this.containerWidth();
    const itemW = this.itemWidth();
    const gapW = this.gap();

    if (width <= 0) return 0;

    let count = Math.floor((width + gapW) / (itemW + gapW));
    if (count <= 0) return 0;

    return count % 2 === 0 ? count - 1 : count;
  });

  items = computed(() => Array.from({ length: this.totalItems() + 2 }, (_, i) => i));
  centerIndex = computed(() => Math.floor(this.totalItems() / 2) + 1);

  constructor() {
    effect((onCleanup) => {
      const el = this.containerRef()?.nativeElement;
      if (!el) return;

      const observer = new ResizeObserver((entries) => {
        for (const entry of entries) {
          this.containerWidth.set(entry.contentRect.width);
        }
      });

      observer.observe(el);
      onCleanup(() => observer.disconnect());
    });
  }
}
