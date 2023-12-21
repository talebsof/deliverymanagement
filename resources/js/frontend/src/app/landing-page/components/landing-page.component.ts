import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil, tap } from 'rxjs';
import { PhraseService } from '../../core/services/phrase-service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit, OnDestroy {
  currentPhrase: string = '';
  private destroy$!: Subject<boolean>;

  constructor(private router: Router, private phraseService: PhraseService) {
  }

  ngOnInit() {
    this.destroy$ = new Subject<boolean>();
    this.phraseService.getPhrase().pipe(tap((phrase) => {
      this.currentPhrase = phrase}),takeUntil(this.destroy$)).subscribe()
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }

}
