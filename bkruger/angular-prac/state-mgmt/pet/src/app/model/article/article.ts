export interface Article {
    id: number,
    title: string,
    date: Date,
    author: string,
    tldr: string[],
    content: string[],
    level: string,
    likes: number,
    dislikes: number,
    visits: number,
  }

// export class Article {
//   constructor(
//     public id: number,
//     public title: string,
//     public date: Date,
//     public author: string,
//     public tldr: string[],
//     public content: string[],
//     public level: string,
//     public likes: number,
//     public dislikes: number,
//     public visits: number,
//   ){}
// }