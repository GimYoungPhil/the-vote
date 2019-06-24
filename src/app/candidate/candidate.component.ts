import { Component, OnInit, Input, HostBinding } from '@angular/core';

import { Candidate } from './candidate.model';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'col-12 col-lg-6'
  @Input() candidate: Candidate;

  constructor() {
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
