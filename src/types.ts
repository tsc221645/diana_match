export type Dimension='spicy'|'intensity'|'social'|'chill'|'classic';
export type Answers=Record<string,string>;
export interface Profile { spicy:number; intensity:number; social:number; chill:number; classic:number }
export interface Product { id:string; name:string; emoji:string; image:string; archetype:string; description:string; quote:string; color:string; profile:Profile }
export interface Match { product:Product; percentage:number; profile:Profile }
