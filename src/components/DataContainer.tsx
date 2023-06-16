import { Box } from "@mui/material";
import type { FC, ReactNode } from "react";

export interface IDataContainerProps {
  children?: ReactNode;
  offset?: number;
}

const HEADER_SIZE = 72;
const FOOTER_SIZE = 88;

export const DataContainer: FC<IDataContainerProps> = ({ children, offset }) => {
  return <Box style={{ height: `calc(100vh - ${HEADER_SIZE + FOOTER_SIZE + (offset ?? 0)}px)`, width: "100%" }}>{children}</Box>;
};
