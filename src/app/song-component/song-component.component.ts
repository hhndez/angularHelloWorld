import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Song } from '../model/songtype';
import { CurrencyPipe, DatePipe, NgIf, NgStyle, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-song-component',
  standalone: true,
  imports: [NgIf, UpperCasePipe, CurrencyPipe, DatePipe],
  templateUrl: './song-component.component.html',
  styleUrl: './song-component.component.css'
})
export class SongComponentComponent {
  @Input()
  song!: Song

  @Input()
  isTopSong: boolean = false;

  @Output()
  voteUp = new EventEmitter<number>();

  handleVoteClick() {
    this.voteUp.emit(this.song.id);
  }

}
