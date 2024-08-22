export interface Category {
    id?:number;
    label:string;
}

export interface Post {
    id?:number;
    latitude:number;
    longitude:number;
    message:string;
    postedAt:string|Date;
    author?:string;
    category?:Category;
    picture?:string;
}