import { Component } from '@angular/core';

import { Candidate } from './candidate/candidate.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  candidates: Candidate[];

  constructor() {
    this.candidates = [
      new Candidate('아이린', 'https://bit.ly/2x9gCfF', 1),
      new Candidate('슬기', 'https://bit.ly/2XrSuUt', 1),
      new Candidate('웬디', 'https://bit.ly/2ZLDePU', 1),
      new Candidate('조이', 'https://bit.ly/2FtYeTc', 1),
      new Candidate('예리', 'https://bit.ly/2Yb4sPg', 1),
    ];
  }

  addLink(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log({ title: title.value, link: link.value });
    return false;
  }
}
