import { Component, inject, ViewChild, ViewChildren } from '@angular/core';
import { SongComponentComponent } from '../song-component/song-component.component';
import { NgFor } from '@angular/common';
import { DataService } from '../data.service';

@Component({
  selector: 'app-song-list',
  standalone: true,
  imports: [SongComponentComponent, NgFor],
  templateUrl: './song-list.component.html',
  styleUrl: './song-list.component.css'
})
export class SongListComponent {

  @ViewChildren(SongComponentComponent)
  songComponents! : SongComponentComponent[];

  /*
  dataService : DataService;
  constructor(){
    this.dataService = inject(DataService);
  }
*/
  constructor(public dataService: DataService) {

  }

  

  receiveVote(songId: number) {
    this.dataService.songs[songId].votes++
   this.highlightTopSong();
  }

  highlightTopSong() {
    
    const topScore = this.dataService.songs.map(song => song.votes).sort((a,b) => b-a)[0];
    this.songComponents.forEach(songComponents => songComponents.isTopSong = songComponents.song.votes === topScore);
  }


}
