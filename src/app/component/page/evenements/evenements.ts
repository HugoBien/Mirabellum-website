import { Component, signal } from '@angular/core';
import { NgClass } from '@angular/common';

interface Evenement {
  titre: string;
  description: string;
  imageUrl: string;
  date: string;
}

@Component({
  selector: 'app-evenements',
  imports: [NgClass],
  templateUrl: './evenements.html',
  styleUrl: './evenements.scss',
})
export class Evenements {
  readonly evenements: Evenement[] = [
    {
      titre: 'Tournoi Spring Smash 2025',
      description: 'Notre grand tournoi printanier réunissant les meilleurs joueurs de la région Grand Est. Venez affronter l\'élite du Smash Bros dans une ambiance conviviale et compétitive.',
      imageUrl: 'https://placehold.co/800x450/27272a/a78bfa?text=Spring+Smash+2025',
      date: 'Avril 2025',
    },
    {
      titre: 'Weekly #42 – Strasbourg',
      description: 'Le rendez-vous hebdomadaire des passionnés de Smash. Que vous soyez débutant ou confirmé, nos weeklies sont l\'endroit idéal pour progresser et rencontrer la communauté.',
      imageUrl: 'https://placehold.co/800x450/27272a/a78bfa?text=Weekly+%2342',
      date: 'Mars 2025',
    },
    {
      titre: 'Grand Est Championship 2024',
      description: 'Le championnat annuel de la région, une journée entière de compétition intense avec des prizes pools attractifs et une ambiance électrique tout au long de la journée.',
      imageUrl: 'https://placehold.co/800x450/27272a/a78bfa?text=GE+Championship+2024',
      date: 'Novembre 2024',
    },
    {
      titre: 'Smash Initiation – Open Day',
      description: 'Une journée portes ouvertes dédiée aux nouveaux joueurs. Apprenez les bases du jeu, rencontrez la communauté et disputez vos premiers matchs dans un cadre bienveillant.',
      imageUrl: 'https://placehold.co/800x450/27272a/a78bfa?text=Open+Day',
      date: 'Septembre 2024',
    },
  ];

  currentIndex = signal(0);

  prev(): void {
    this.currentIndex.update(i => (i - 1 + this.evenements.length) % this.evenements.length);
  }

  next(): void {
    this.currentIndex.update(i => (i + 1) % this.evenements.length);
  }

  goTo(index: number): void {
    this.currentIndex.set(index);
  }
}
