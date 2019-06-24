import { Component, OnInit } from '@angular/core';

import { Candidate } from './candidate.model';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {
  candidate: Candidate;

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
