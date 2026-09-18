import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-tuition',
  templateUrl: './tuition.component.html',
  styleUrl: './tuition.component.scss'
})
export class TuitionComponent {
  readonly pdfPath = 'assets/Files/Pricing/School Price List.pdf';
  safePdfUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    // Encode spaces for iframe src while keeping the on-disk name with spaces
    this.safePdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      encodeURI(this.pdfPath)
    );
  }
}
