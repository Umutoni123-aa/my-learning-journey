export interface Story {
    id: string;
    authorName: string;
    content: string;
}

export interface CreateStoryDTO {
    authorName: string;
    content: string;
}