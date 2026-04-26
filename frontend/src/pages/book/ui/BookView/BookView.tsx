import { CalendarMonth } from "@mui/icons-material";
import { Box, Chip, CircularProgress, Paper, Typography } from "@mui/material";

import { useBooks } from "@/entities/books";
import { Control } from "@/features/book";
import { AlertError, Author } from "@/shared/ui";
import { formatDate } from "@/shared/utils";

function BookView() {
  const { isLoading, selectedBook } = useBooks();

  const isRedirect = !selectedBook && !isLoading;
  const { name, description, publisher, created_at } = { ...selectedBook };

  if (isRedirect)
    return <AlertError>Страница с выбранной книгой не найдена!</AlertError>;
  if (isLoading) return <CircularProgress />;

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h5" component="h2">
        {name}
      </Typography>
      <Typography>{description}</Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 1,
          mt: 2,
        }}
      >
        {created_at && (
          <Paper>
            <Chip
              sx={{ borderRadius: 1, height: 36 }}
              icon={<CalendarMonth sx={{ width: 16 }} />}
              label={formatDate(created_at)}
            />
          </Paper>
        )}
        <Control>{publisher && <Author>{publisher}</Author>}</Control>
      </Box>
    </Paper>
  );
}

export default BookView;
