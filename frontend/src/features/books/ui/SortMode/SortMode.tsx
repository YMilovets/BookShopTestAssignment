import {
  ArrowDownward,
  ArrowUpward,
  FormatAlignJustify,
} from "@mui/icons-material";
import { Button } from "@mui/material";

import { useGetBooksQuery } from "@/entities/books";
import { SortOrder } from "@/shared/config";

import { useBooksParams } from "../../hooks";

import { SortedIconItemType } from "./types";

function SortMode() {
  const { sortAt, sortBy, handleSortAtQuery } = useBooksParams();

  const { isError, data = [] } = useGetBooksQuery({});

  const isDisplayOrder = !sortBy || isError || data.length === 0;

  const handleOrderChange = (order: number) => {
    return () => {
      if (isDisplayOrder) return;
      handleSortAtQuery(order);
    };
  };

  const SortedIcon: Record<number, SortedIconItemType> = {
    [SortOrder.Desc]: { icon: <ArrowUpward />, title: "По убыванию" },
    [SortOrder.Default]: {
      icon: <FormatAlignJustify />,
      title: "По умолчанию",
    },
    [SortOrder.Asc]: { icon: <ArrowDownward />, title: "По возрастанию" },
  };

  const order = sortAt >= SortOrder.Asc ? SortOrder.Desc : SortOrder.Asc;

  return (
    <Button
      disabled={isDisplayOrder}
      onClick={handleOrderChange(order)}
      variant="outlined"
      title={SortedIcon[sortAt].title}
      sx={{ minWidth: "auto" }}
    >
      {SortedIcon[sortAt].icon}
    </Button>
  );
}

export default SortMode;
