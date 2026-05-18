import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

}


@Injectable()
export class CardsService {
  private cards: Card[] = [
    {
      id: 1,
      title: 'Начало работы',
      categories: ['Для новичка', 'Основы работы'],
      desc: 'Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете',
      done: true,
      group: 'work',
    },
    {
      id: 2,
      title: 'Работа с библиотеками GPN',
      categories: ['Профессионалу', 'Библиотеки'],
      desc: 'Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете',
      done: false,
      group: 'libraries',
    },
    {
      id: 3,
      title: 'Работа с библиотеками KVN',
      categories: ['Профессионалу', 'Библиотеки'],
      desc: 'Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете',
      done: false,
      group: 'libraries',
    }
  ];

  getCards(): Card[] {
    return this.cards;
  }
}
export interface Card {
  id: number;
  title: string;
  categories: string[];
  desc: string;
  done: boolean;
  group: string;
}