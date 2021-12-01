export interface ArticleResponse {
  id: string;
  title: string;
  body: string;
  summary: string;
  thumbnail: string;
  tags: string[];
  date: string;
}

export type ArticleType = Omit<ArticleResponse, "id" | "date">;
