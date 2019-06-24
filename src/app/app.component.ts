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
      new Candidate('아이린', 'https://pbs.twimg.com/media/C7bVT0YV0AAtJM8.jpg', 1),
      new Candidate('슬기', 'http://img.gqkorea.co.kr/gq/2018/09/style_5ba4b70f802e0.jpg', 1),
      new Candidate('웬디', 'https://dbkpop.com/wp-content/uploads/2017/11/red_velvet_perfect_velvet_wendy_profile.jpg', 1),
      new Candidate('조이', 'http://images6.fanpop.com/image/photos/40900000/Red-Velvet-Bad-Boy-Joy-Teaser-park-joy-40979187-500-334.jpg', 1),
      new Candidate('예리', 'https://spnimage.edaily.co.kr/images/Photo/files/NP/S/2018/03/PS18032000087.jpg', 1),
    ];
  }

  addLink(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log({ title: title.value, link: link.value });
    const newCandidate = new Candidate(title.value, link.value);
    this.candidates.push(newCandidate);
    title.value = '';
    link.value = '';
    return false;
  }

  sortedCandidates(): Candidate[] {
    return this.candidates.sort((a: Candidate, b: Candidate) => b.votes - a.votes);
  }
}
