import { Component, Input } from '@angular/core';
import { CardComponent } from './card/card.component';
import { Card } from './type/card';
import { RonaldoComponent } from './ronaldo/ronaldo.component';
import { KvaraComponent } from './kvara/kvara.component';
import { ThemeSwitchComponent } from './theme-switch/theme-switch.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CardComponent,
    RonaldoComponent,
    KvaraComponent,
    ThemeSwitchComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  cards: Card[] = [
    {
      imgData: {
        src: 'https://www.pngall.com/wp-content/uploads/5/Lionel-Messi-PNG-Photo.png',
        alt: 'messi',
      },
      title: 'Lionel Messi',
      description: 'The Best Player in Football History',
      background:
        'url("https://m.media-amazon.com/images/I/81lZe4-gJ2L._AC_UF894,1000_QL80_.jpg")',
    },
    {
      imgData: {
        src: 'https://www.freeiconspng.com/thumbs/cristiano-ronaldo-png/cristiano-ronaldo-clipart-png-33.png',
        alt: 'ronaldo',
      },
      title: 'Cristiano Ronaldo',
      description: 'Probably the best player after Messi',
      background:
        'url("https://i.pinimg.com/736x/90/84/20/90842031213f38646d655be3751660b5.jpg")',
    },
    {
      imgData: {
        src: 'https://pbs.twimg.com/media/FdmotkjXwB4QOJf.png',
        alt: 'kvara',
      },
      title: 'Khvicha Kvaratskhelia',
      description: 'Georgian Star',
      background:
        'url("https://cdn.countryflags.com/thumbs/georgia/flag-400.png")',
    },
  ];

  messiBackground(messi: Card) {
    // თუ შეცვლილი არ არის შეცვალოს , თუ არის დააბრუნოს საწყისი )
    messi.background ==
    'url("https://m.media-amazon.com/images/I/81lZe4-gJ2L._AC_UF894,1000_QL80_.jpg")'
      ? (messi.background =
          'url("https://c4.wallpaperflare.com/wallpaper/16/671/726/lionel-messi-football-barcelona-hd-wallpaper-preview.jpg")')
      : (messi.background =
          'url("https://m.media-amazon.com/images/I/81lZe4-gJ2L._AC_UF894,1000_QL80_.jpg")');
  }

  ronaldoBackground(ronaldo: Card) {
    ronaldo.background ==
    'url("https://i.pinimg.com/736x/90/84/20/90842031213f38646d655be3751660b5.jpg")'
      ? (ronaldo.background =
          'url("https://pixewall.com/wp-content/uploads/2023/04/HD-wallpaper-cristiano-ronaldo-football.jpg")')
      : (ronaldo.background =
          'url("https://i.pinimg.com/736x/90/84/20/90842031213f38646d655be3751660b5.jpg")');
  }

  kvaraBackground(kvara: Card) {
    kvara.background ==
    'url("https://cdn.countryflags.com/thumbs/georgia/flag-400.png")'
      ? (kvara.background =
          'url("https://pbs.twimg.com/media/FphU0kZWIAE0VHu.jpg:large")')
      : (kvara.background =
          'url("https://cdn.countryflags.com/thumbs/georgia/flag-400.png")');
  }

  appTheme =
    'url("https://static.vecteezy.com/system/resources/previews/010/984/239/original/web-button-gradient-button-png.png")';

  onThemeChanger(theme: string) {
    theme = this.appTheme;
    this.cards[0].background = theme;
    this.cards[1].background = theme;
    this.cards[2].background = theme;
  }

  onThemeReturner(themeReturn: string) {
    themeReturn =
      'url("https://m.media-amazon.com/images/I/81lZe4-gJ2L._AC_UF894,1000_QL80_.jpg")';
    this.cards[0].background = themeReturn;
    themeReturn =
      'url("https://i.pinimg.com/736x/90/84/20/90842031213f38646d655be3751660b5.jpg")';
    this.cards[1].background = themeReturn;
    themeReturn =
      'url("https://cdn.countryflags.com/thumbs/georgia/flag-400.png")';
    this.cards[2].background = themeReturn;
  }
}
