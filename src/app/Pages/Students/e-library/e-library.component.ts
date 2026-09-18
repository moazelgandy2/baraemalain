import { Component } from '@angular/core';
import { BookInfo } from '../../../Objects';

@Component({
  selector: 'app-e-library',
  templateUrl: './e-library.component.html',
  styleUrl: './e-library.component.scss',
})
export class ELibraryComponent {
  Books: BookInfo[] = [];

  constructor() {
    this.Books = [
      {
        Name: 'The Last Tree Standing',
        Year: '2024',
        Author: 'Amna Ramadan',
        Pic: 'assets/img/Books/The Last Tree Standing.png',
        URL: 'https://www.bribooks.com/bookstore/the-last-tree-standing',
      },
      {
        Name: 'Adventure in America',
        Year: '2024',
        Author: 'Shahd Abdelalim Abobakr',
        Pic: 'assets/img/Books/Adventure in America.png',
        URL: 'https://www.bribooks.com/bookstore/adventure-in-america',
      },
      {
        Name: "Maya's hiking",
        Year: '2025',
        Author: 'Ahmed souwid',
        Pic: "assets/img/Books/Maya's hiking.png",
        URL: 'https://www.bribooks.com/bookstore/maya-s-hiking',
      },
      {
        Name: 'Guardians of the Ocean',
        Year: '2024',
        Author: 'Jana Mohamed',
        Pic: 'assets/img/Books/Guardians of the Ocean.png',
        URL: 'https://www.bribooks.com/bookstore/guardians-of-the-ocean',
      },
      {
        Name: 'The Art of Skateboarding',
        Year: '2024',
        Author: 'MOHAMMED ELSADIG',
        Pic: 'assets/img/Books/The Art of Skateboarding.png',
        URL: 'https://www.bribooks.com/bookstore/the-art-of-skateboarding',
      },
      {
        Name: "Sandy's Camping Adventure",
        Year: '2025',
        Author: 'Sandy Elmetwally',
        Pic: "assets/img/Books/Sandy's Camping Adventure.png",
        URL: 'https://www.bribooks.com/bookstore/sandy-s-camping-adventure',
      },
      {
        Name: "Logy's Mission",
        Year: '2024',
        Author: 'Logy Elmetwally',
        Pic: "assets/img/Books/Logy's Mission.png",
        URL: 'https://www.bribooks.com/bookstore/logy-s-mission',
      },
      {
        Name: 'The Infinity Box',
        Year: '2025',
        Author: 'Osama Mohamed Gaber',
        Pic: 'assets/img/Books/The Infinity Box.png',
        URL: 'https://www.bribooks.com/bookstore/the-infinity-box',
      },
      {
        Name: 'Enjoyable Trip',
        Year: '2024',
        Author: 'Moustafa Sameh',
        Pic: 'assets/img/Books/Enjoyable trip.png',
        URL: 'https://www.bribooks.com/bookstore/enjoyable-trip',
      },
      {
        Name: 'Sustainability in Life',
        Year: '2024',
        Author: 'Ahmed Mohamed Hosni',
        Pic: 'assets/img/Books/Sustainability in Life.png',
        URL: 'https://www.bribooks.com/bookstore/sustainability-in-life',
      },
      {
        Name: 'Mother of Life',
        Year: '2025',
        Author: 'Hamsa Ghrbawi',
        Pic: 'assets/img/Books/Mother of Life.png',
        URL: 'https://www.bribooks.com/bookstore/mother-of-life',
      },
      {
        Name: 'Street Dog',
        Year: '2024',
        Author: 'Nourseen Mostafa',
        Pic: 'assets/img/Books/Street Dog.png',
        URL: 'https://www.bribooks.com/bookstore/street-dog-678180d01e204',
      },
      {
        Name: 'Roots of Hope',
        Year: '2025',
        Author: 'Roaa mohamed',
        Pic: 'assets/img/Books/Roots of Hope.png',
        URL: 'https://www.bribooks.com/bookstore/roots-of-hope',
      },
      {
        Name: 'My Family',
        Year: '2024',
        Author: 'Rana Mahmoud',
        Pic: 'assets/img/Books/My Family.png',
        URL: 'https://www.bribooks.com/bookstore/my-family-67758139a472d',
      },
      {
        Name: 'The Tough Match',
        Year: '2024',
        Author: 'Moustafa Sameh',
        Pic: 'assets/img/Books/The Tough Match.png',
        URL: 'https://www.bribooks.com/bookstore/the-tough-match',
      },
      {
        Name: "Sandy's Mission",
        Year: '2024',
        Author: 'Sandy Elmetwally',
        Pic: "assets/img/Books/Sandy's Mission.png",
        URL: 'https://www.bribooks.com/bookstore/sandy-s-mission',
      },
      {
        Name: 'Unicorn Academy',
        Year: '2024',
        Author: 'Eman Ahmed Mukhtar',
        Pic: 'assets/img/Books/Unicorn Academy.png',
        URL: 'https://www.bribooks.com/bookstore/unicorn-academy-6782584908c36',
      },
      {
        Name: 'The Plastic Bottle Journey',
        Year: '2024',
        Author: 'Sara Elsayed',
        Pic: 'assets/img/Books/The Plastic Bottle Journey.png',
        URL: 'https://www.bribooks.com/bookstore/the-plastic-bottle-journey',
      },
      {
        Name: 'My Family',
        Year: '2024',
        Author: 'Sedra Mazen',
        Pic: 'assets/img/Books/My Family2.png',
        URL: 'https://www.bribooks.com/bookstore/my-family-677fef3685901',
      },
      {
        Name: 'Sam And Pam In The Park',
        Year: '2024',
        Author: 'Ahmed Mohamed Gaber',
        Pic: 'assets/img/Books/Sam And Pam In The Park.png',
        URL: 'https://www.bribooks.com/bookstore/sam-and-pam-in-the-park',
      },
      {
        Name: 'Tweety and Sylvester',
        Year: '2024',
        Author: 'Ferdaouse Al Fakier',
        Pic: 'assets/img/Books/Tweety and Sylvester.png',
        URL: 'https://www.bribooks.com/bookstore/tweety-and-sylvester',
      },
      {
        Name: 'The Egyptian Football Emperor',
        Year: '2024',
        Author: 'Fares Abdullah',
        Pic: 'assets/img/Books/The Egyptian Football Emperor.png',
        URL: 'https://www.bribooks.com/bookstore/the-egyptian-football-emperor',
      },
      {
        Name: 'Lian and Green Land',
        Year: '2024',
        Author: 'Lian Ahmed Hamdy',
        Pic: 'assets/img/Books/Lian and Green Land.png',
        URL: 'https://www.bribooks.com/bookstore/lian-and-green-land',
      },
      {
        Name: 'The Green Colors Island',
        Year: '2024',
        Author: 'Ahmed Elsayed Fouad',
        Pic: 'assets/img/Books/The Green Colors Island.png',
        URL: 'https://www.bribooks.com/bookstore/the-green-colors-island',
      },
      {
        Name: 'The Whispering Forest',
        Year: '2024',
        Author: 'Rahaf Amrou',
        Pic: 'assets/img/Books/The Whispering Forest.png',
        URL: 'https://www.bribooks.com/bookstore/the-whispering-forest-677fe84f17561',
      },
      {
        Name: 'The Lifechanging Project',
        Year: '2024',
        Author: 'Jana Mohammad',
        Pic: 'assets/img/Books/The Lifechanging Project.png',
        URL: 'https://www.bribooks.com/bookstore/the-lifechanging-project',
      },
      {
        Name: 'Our Play',
        Year: '2024',
        Author: 'Mira Bannouri',
        Pic: 'assets/img/Books/Our Play.png',
        URL: 'https://www.bribooks.com/bookstore/our-play',
      },
      {
        Name: 'My Figure Skating Journey',
        Year: '2024',
        Author: 'Raghad',
        Pic: 'assets/img/Books/My Figure Skating Journey.png',
        URL: 'https://www.bribooks.com/bookstore/my-figure-skating-journey',
      },
      {
        Name: 'Beneath The Sea',
        Year: '2024',
        Author: 'Logy Tamer',
        Pic: 'assets/img/Books/Beneath The Sea.png',
        URL: 'https://simplebooklet.com/beneaththesea',
      },
      {
        Name: 'Sustainable World',
        Year: '2024',
        Author: 'Retal Ahmed',
        Pic: 'assets/img/Books/Sustainable World.png',
        URL: 'https://www.bribooks.com/bookstore/sustainable-world-678253e42e506',
      },
      {
        Name: 'Superhero',
        Year: '2024',
        Author: 'Fares',
        Pic: 'assets/img/Books/Superhero.png',
        URL: 'https://www.bribooks.com/bookstore/superhero-677fcf1cbc5b9',
      },
      {
        Name: 'Enymation',
        Year: '2024',
        Author: 'Mohamed Ehab',
        Pic: 'assets/img/Books/Enymation.png',
        URL: 'https://www.bribooks.com/bookstore/enymation',
      },
      {
        Name: 'Steps to the Stars',
        Year: '2024',
        Author: 'Salma Mahdi',
        Pic: 'assets/img/Books/Steps to the Stars.png',
        URL: 'https://www.bribooks.com/bookstore/steps-to-the-stars',
      },
      {
        Name: 'Robots',
        Year: '2024',
        Author: 'Mohamed Ehab',
        Pic: 'assets/img/Books/Robots.png',
        URL: 'https://www.bribooks.com/bookstore/robots-677e90c1f379b',
      },
      {
        Name: 'The Plastic Garden',
        Year: '2024',
        Author: 'Noor Mohammed Fayed',
        Pic: 'assets/img/Books/The Plastic Garden.png',
        URL: 'https://www.bribooks.com/bookstore/the-plastic-garden',
      },
      {
        Name: 'The Brave Hours',
        Year: '2024',
        Author: 'Maram',
        Pic: 'assets/img/Books/The Brave Hours.png',
        URL: 'https://www.bribooks.com/bookstore/the-brave-hours',
      },
      {
        Name: 'The Guardians of Terra',
        Year: '2024',
        Author: 'Jana Osama',
        Pic: 'assets/img/Books/The Guardians of Terra.png',
        URL: 'https://www.bribooks.com/bookstore/the-guardians-of-terra-',
      },
      {
        Name: 'Aladdin Life',
        Year: '2024',
        Author: 'Omar Abdallah',
        Pic: 'assets/img/Books/Aladdin Life.png',
        URL: 'https://www.bribooks.com/bookstore/aladdin-life',
      },
      {
        Name: 'Monstrous',
        Year: '2024',
        Author: 'Fares',
        Pic: 'assets/img/Books/Monstrous.png',
        URL: 'https://www.bribooks.com/bookstore/monsters-677e3d862fa50',
      },
      {
        "Name": "Omar and The Star Voyager",
        "Year": "2024",
        "Author": "Mohamed Abdelalim",
        "Pic": "assets/img/Books/Omar and The Star Voyager.png",
        "URL":"https://www.bribooks.com/bookstore/omar-and-the-star-voyager"
      },
      {
        "Name": "Space World",
        "Year": "2024",
        "Author": "Omar Farouk",
        "Pic": "assets/img/Books/Space World.png",
        "URL":"https://www.bribooks.com/bookstore/space-world-677fcf0ba4d86"
      },
      {
        "Name": "Chasing Glory: Ali's Dream",
        "Year": "2024",
        "Author": "Saad Ahmed",
        "Pic": "assets/img/Books/Chasing Glory Ali's Dream.png",
        "URL":"https://www.bribooks.com/bookstore/chasing-glory-ali-s-dream"
      },
      {
        "Name": "The Iron Commander",
        "Year": "2024",
        "Author": "Omar Salah",
        "Pic": "assets/img/Books/The Iron Commander.png",
        "URL":"https://www.bribooks.com/bookstore/the-iron-commander"
      },
      {
        "Name": "Football Legends",
        "Year": "2024",
        "Author": "Mahmoud Elghrbawi",
        "Pic": "assets/img/Books/Football Legends.png",
        "URL":"https://www.bribooks.com/bookstore/football-legends-67823bdcdc962"
      },
      {
        "Name": "Nature is Important",
        "Year": "2024",
        "Author": "Mohamed Tarek",
        "Pic": "assets/img/Books/Nature is Important.png",
        "URL":"https://www.bribooks.com/bookstore/nature-is-important-677d125c6d9d4"
      },
      {
        "Name": "Green Potential",
        "Year": "2024",
        "Author": "Jana Osama",
        "Pic": "assets/img/Books/Green Potential.png",
        "URL":"https://www.bribooks.com/bookstore/green-potential"
      }
      // ,{
      //   "Name": "",
      //   "Year": "2024",
      //   "Author": "",
      //   "Pic": "assets/img/Books/.png",
      //   "URL":""
      // }
    ];
  }
}
