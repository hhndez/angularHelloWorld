import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SongListComponent } from './song-list/song-list.component';
import { UserComponent } from './user/user.component';
import { SummaryComponent } from './summary/summary.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SongListComponent, UserComponent, SummaryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Favourite songs';
  clicks = 0;

  name = "Math";
  role = "user";

  someFunction() {
      this.clicks++;
  }

  changeName() {
    this.name = "another";
  }

}
