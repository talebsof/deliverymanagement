import { Injectable } from '@angular/core';
import { BehaviorSubject, concatMap, delay, from, Observable, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhraseService {
  private phrases: string[] = [
    'Bienvenue sur notre site de livraison',
    'Une plateforme qui vous facilite la vie'
  ];
  private phraseSubject = new BehaviorSubject<string>('');

  constructor() {
    this.startTypingAnimation();
  }

  getPhrase(): Observable<string> {
    return this.phraseSubject.asObservable();
  }

  private startTypingAnimation() {
    from(this.phrases)
      .pipe(
        concatMap((phrase, index) =>
          this.typeText(phrase).pipe(
            delay(index === 0 ? 500: 0) // Attendre 2 secondes après la première phrase
          )
        )
      )
      .subscribe();
  }

  private typeText(phrase: string): Observable<void> {
    return new Observable<void>((observer) => {
      let index = 0;
      const typingInterval = setInterval(() => {
        if (index < phrase.length) {
          this.phraseSubject.next(phrase.slice(0, index + 1));
          index++;
        } else {
          clearInterval(typingInterval);
          observer.next();
          observer.complete();
        }
      }, 100);
    });
  }
}
