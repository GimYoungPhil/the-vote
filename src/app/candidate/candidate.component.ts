import { Component, OnInit, Input } from '@angular/core';

import { Candidate } from './candidate.model';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {
  @Input() candidate: Candidate;

  constructor() {
    this.candidate = new Candidate(
      '슬기',
      'https://pbs.twimg.com/media/DtTp3mQUcAACTIv.jpg',
      10
    );
  }

  voteUp(): boolean {
    this.candidate.voteUp();
    return false;
  }

  voteDown(): boolean {
    this.candidate.voteDown();
    return false;
  }

  ngOnInit() {
  }
}
