export type BooksResponse = {
  id: string;
  name: string;
  description: string;
  publisher: string;
  created_at: string;
};

export type BooksRequests = Partial<{
  offset: number;
  count: number;
  sort: "created_at" | "name";
  order: "asc" | "desc";
}>;

export type PostBookRequests = {
  name: string;
  description: string;
};
