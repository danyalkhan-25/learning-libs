import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[uiTruncateText]',
})
export class TruncateTextDirective {
  @Input() maxLength: number = 100;
  @Input() showReadMore: boolean = false;
  private originalText: string = '';
  private isTruncated: boolean = true;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.originalText = this.el.nativeElement.textContent;
    this.updateText();
  }

  @HostListener('click') onClick() {
    if (this.showReadMore) {
      this.isTruncated = !this.isTruncated;
      this.updateText();
    }
  }

  private updateText() {
    if (this.isTruncated && this.originalText.length > this.maxLength) {
      this.el.nativeElement.textContent =
        this.originalText.slice(0, this.maxLength) + '...';
      if (this.showReadMore) {
        this.el.nativeElement.textContent += ' Read More';
      }
    } else {
      this.el.nativeElement.textContent = this.originalText;
      if (this.showReadMore && this.originalText.length > this.maxLength) {
        this.el.nativeElement.textContent += ' Read Less';
      }
    }
  }
}
