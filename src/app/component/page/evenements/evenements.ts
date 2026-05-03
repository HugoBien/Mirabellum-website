import { Component, signal, OnInit, OnDestroy } from '@angular/core';
import { NgClass } from '@angular/common';

interface Evenement {
  titre: string;
  description: string;
  imageUrl: string;
  date: string;
  lien?: string;
}

@Component({
  selector: 'app-evenements',
  imports: [NgClass],
  templateUrl: './evenements.html',
  styleUrl: './evenements.scss',
})
export class Evenements implements OnInit, OnDestroy {
  private autoPlayInterval?: ReturnType<typeof setInterval>;
  readonly evenements: Evenement[] = [
    {
      titre: 'Reach The Crown #14',
      description:
        "Notre grand tournoi printanier réunissant les meilleurs joueurs de la région Grand Est. Venez affronter l'élite du Smash Bros dans une ambiance conviviale et compétitive.",
      imageUrl: 'https://placehold.co/800x450/27272a/a78bfa?text=Reach+The+Crown',
      date: '',
      lien: 'https://www.start.gg/tournament/reach-the-crown-14/details',
    },
    {
      titre: 'Unit Smash',
      description:
        "Le rendez-vous hebdomadaire des passionnés de Smash. Que vous soyez débutant ou confirmé, nos weeklies sont l'endroit idéal pour progresser et rencontrer la communauté.",
      imageUrl: 'https://placehold.co/800x450/27272a/a78bfa?text=Unit+Smash',
      date: 'Tous les lundis',
      lien: 'https://www.start.gg/tournament/unit-smash/details',
    },
    {
      titre: 'Back to Base',
      description:
        'Le championnat annuel de la région, une journée entière de compétition intense avec des prizes pools attractifs et une ambiance électrique tout au long de la journée.',
      imageUrl: 'https://placehold.co/800x450/27272a/a78bfa?text=Back+to+Base',
      date: 'Tous les mardis',
      lien: 'https://www.start.gg/back2base/details',
    },
    {
      titre: 'Metzroïd #2',
      description:
        'Une journée portes ouvertes dédiée aux nouveaux joueurs. Apprenez les bases du jeu, rencontrez la communauté et disputez vos premiers matchs dans un cadre bienveillant.',
      imageUrl: 'https://placehold.co/800x450/27272a/a78bfa?text=Metzroïd',
      date: 'Septembre 2024',
      lien: 'https://www.start.gg/tournament/metzroid-2/details',
    },
    {
      titre: 'Reach The Crown #13',
      description:
        'Une journée portes ouvertes dédiée aux nouveaux joueurs. Apprenez les bases du jeu, rencontrez la communauté et disputez vos premiers matchs dans un cadre bienveillant.',
      imageUrl: 'https://placehold.co/800x450/27272a/a78bfa?text=Reach+The+Crown',
      date: 'Septembre 2024',
      lien: 'https://www.start.gg/tournament/reach-the-crown-13/details',
    },
  ];

  currentIndex = signal(0);

  ngOnInit(): void {
    this.autoPlayInterval = setInterval(() => this.next(), 10000);
  }

  ngOnDestroy(): void {
    clearInterval(this.autoPlayInterval);
  }

  prev(): void {
    this.currentIndex.update((i) => (i - 1 + this.evenements.length) % this.evenements.length);
  }

  next(): void {
    this.currentIndex.update((i) => (i + 1) % this.evenements.length);
  }

  goTo(index: number): void {
    this.currentIndex.set(index);
  }
}
