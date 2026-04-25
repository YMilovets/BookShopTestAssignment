import { CalendarMonth } from "@mui/icons-material";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Chip,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";

import { Author } from "@/shared/ui";

import { LibraryGridPos } from "./constants";
import { BooksCardProps } from "./types";

function BooksCard({
  title,
  description,
  date,
  moreBtnComponent,
  author,
}: BooksCardProps) {
  return (
    <Grid size={LibraryGridPos}>
      <Card sx={{ display: "grid", height: "100%" }}>
        <CardContent
          sx={{
            display: "grid",
            gap: 1,
          }}
        >
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body1">{description}</Typography>
        </CardContent>
        <Box sx={{ marginTop: "auto" }}>
          <CardContent
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 1,
            }}
          >
            <Paper>
              <Chip
                sx={{ borderRadius: 1 }}
                icon={<CalendarMonth sx={{ width: 16 }} />}
                label={date}
              />
            </Paper>
            {author && <Author>{author}</Author>}
          </CardContent>
          {moreBtnComponent && (
            <>
              <Divider />
              <CardActions>{moreBtnComponent}</CardActions>
            </>
          )}
        </Box>
      </Card>
    </Grid>
  );
}

export default BooksCard;
