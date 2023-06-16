import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, styled, tableCellClasses } from "@mui/material";
import React, { type FC, useCallback, useRef, useState } from "react";
import { type TableComponents, TableVirtuoso, type TableVirtuosoHandle } from "react-virtuoso";

import { ScrollToTopWrapper } from "../ScrollToTop";

export interface IComponentDisablerProps {
  isScrolling?: boolean;
}
export type IComponentDisabler = (props: IComponentDisablerProps) => JSX.Element;
type IDataValue = { colSpan: number; label: string } | IComponentDisabler | boolean | number | string | undefined;

export type IData = Partial<Record<string, IDataValue>>;

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  },
  [`&.${tableCellClasses.head}`]: {
    //backgroundColor: theme.palette.common.black,
    //color: theme.palette.common.white,
    fontWeight: "bold"
  }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0
  },
  "&:nth-of-type(even)": {
    backgroundColor: theme.palette.action.hover
  }
}));

const VirtuosoTableComponents: TableComponents<IData> = {
  // eslint-disable-next-line react/display-name
  Scroller: React.forwardRef<HTMLDivElement>((props, ref) => <TableContainer {...props} ref={ref} />),
  Table: (props) => <Table {...props} size="small" sx={{ borderCollapse: "separate", tableLayout: "fixed" }} />,
  // eslint-disable-next-line react/display-name
  TableBody: React.forwardRef<HTMLTableSectionElement>((props, ref) => <TableBody {...props} ref={ref} />),
  TableHead,
  // eslint-disable-next-line react/prop-types, @typescript-eslint/no-unused-vars
  TableRow: ({ item: _item, ...props }) => <StyledTableRow {...props} />
};

interface ColumnData {
  dataKey: string;
  label: string;
  numeric?: boolean;
  width?: number;
}

export interface ITableScrollerProps {
  columns: ColumnData[];
  items: IData[];
}

export const TableScroller: FC<ITableScrollerProps> = ({ columns, items }) => {
  const virtuoso = useRef<TableVirtuosoHandle>(null);
  //const scrollerRef = useRef<HTMLElement>(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollerRef, setScrollerRef] = useState<HTMLDivElement>();

  const scrollToTop = useCallback(() => {
    virtuoso.current?.scrollToIndex({ behavior: "smooth", index: 0 });
  }, []);

  const rowContent = useCallback(
    (_index: number, row: IData) => {
      return (
        <React.Fragment>
          {columns.map((column) => {
            let childen: JSX.Element | string = "";
            let colSpan: number | undefined = undefined;
            const data = row[column.dataKey];
            if (typeof data === "boolean" || typeof data === "number" || typeof data === "string") {
              childen = data.toString();
            } else if (typeof data === "object" && data.colSpan !== undefined) {
              childen = <Typography variant="h5">{data.label}</Typography>;
              colSpan = data.colSpan;
            } else if (data !== undefined) {
              const Data = data as FC<{ isScrolling?: boolean }>;
              childen = <Data isScrolling={isScrolling} />;
            }

            return (
              <StyledTableCell align={column.numeric || false ? "right" : "left"} colSpan={colSpan} key={column.dataKey}>
                {childen}
              </StyledTableCell>
            );
          })}
        </React.Fragment>
      );
    },
    [columns, isScrolling]
  );

  const fixedHeaderContent = useCallback(() => {
    return (
      <StyledTableRow>
        {columns.map((column) => (
          <StyledTableCell
            sx={{
              backgroundColor: "background.paper"
            }}
            align={column.numeric || false ? "right" : "left"}
            key={column.dataKey}
            style={{ width: column.width ?? "100%" }}
            variant="head"
          >
            {column.label}
          </StyledTableCell>
        ))}
      </StyledTableRow>
    );
  }, [columns]);

  return (
    <>
      <TableVirtuoso
        components={VirtuosoTableComponents}
        data={items}
        fixedHeaderContent={fixedHeaderContent}
        isScrolling={setIsScrolling}
        itemContent={rowContent}
        ref={virtuoso}
        // eslint-disable-next-line react/jsx-no-bind
        scrollerRef={(ref) => setScrollerRef(ref as HTMLDivElement)}
      />
      <ScrollToTopWrapper scrollCallback={scrollToTop} target={scrollerRef} />
    </>
  );
};
