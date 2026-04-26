import { CircularProgress, Grid } from "@mui/material";

import { BooksCard, useBooks } from "@/entities/books";
import { ButtonLink } from "@/shared/ui";
import { formatDate } from "@/shared/utils";

import BooksAlert from "../BooksAlert";

import { GRID_GAP } from "./constants";

function BooksCatalog() {
  const { isLoading, isError, data: books = [], isEmptyBooks } = useBooks();

  return (
    <>
      {isError && (
        <BooksAlert>
          Не удалось загрузить список книг на странице каталога
        </BooksAlert>
      )}
      {isLoading && <CircularProgress />}
      {isEmptyBooks && <BooksAlert>В каталоге отсутствуют книги</BooksAlert>}
      {!isError && (
        <Grid container spacing={GRID_GAP}>
          {books.map(({ id, name, description, publisher, created_at }) => (
            <BooksCard
              key={id}
              description={description}
              title={name}
              date={formatDate(created_at)}
              moreBtnComponent={<ButtonLink path={id}>Подробнее</ButtonLink>}
              author={publisher}
            />
          ))}
        </Grid>
      )}
    </>
  );
}

export default BooksCatalog;
