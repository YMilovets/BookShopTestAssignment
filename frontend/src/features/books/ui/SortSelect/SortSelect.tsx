import { InputLabel, Select, SelectChangeEvent } from "@mui/material";

import { useGetBooksQuery } from "@/entities/books";
import { SortOrder } from "@/shared/config";
import { useElementId } from "@/shared/hooks";

import { useBooksParams } from "../../hooks";

import { SortSelectProps } from "./types";

function SortSelect({ children }: SortSelectProps) {
  const { sortBy, handleSortAtQuery, handleSortByQuery } = useBooksParams();

  const menuId = useElementId("menu");

  const { isError, data = [] } = useGetBooksQuery({});

  const handleChange = (event: SelectChangeEvent) => {
    if (isError) return;
    handleSortByQuery(event.target.value);
    handleSortAtQuery(SortOrder.Asc);
  };

  return (
    <>
      <InputLabel id={menuId}>Сортировка по</InputLabel>
      <Select
        value={sortBy}
        labelId={menuId}
        label="Сортировка по"
        onChange={handleChange}
        sx={{ flex: 1, minWidth: "100%" }}
        disabled={isError || data.length === 0}
      >
        {children}
      </Select>
    </>
  );
}

export default SortSelect;
