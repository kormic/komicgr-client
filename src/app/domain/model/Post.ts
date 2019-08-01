// tslint:disable: variable-name
export class Post {
    id: number;
    title: string;
    short_body: string;
    user_id: number;
    body: string;
    likes: number;
    createdAt: Date;
    imageUrl: string;
    categoryId?: number;
    profileImageUrl: string;
}
