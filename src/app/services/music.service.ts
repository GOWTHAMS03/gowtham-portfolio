// music.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class MusicService {
    private isMusicPlaying = new BehaviorSubject<boolean>(false);

    getMusicState() {
        return this.isMusicPlaying.asObservable();
    }

    toggleMusic() {
        console.log('hii')
        this.isMusicPlaying.next(!this.isMusicPlaying.value);
    }
}
