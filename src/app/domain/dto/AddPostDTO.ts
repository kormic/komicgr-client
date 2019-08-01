export interface AddPostDTO {
    user_id: number;
    title: string;
    short_body: string;
    body: string;
    createdAt: string;
    imageUrl: string;
    categoryId: number;
}