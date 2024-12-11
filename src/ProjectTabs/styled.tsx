import styled from "@emotion/styled";
import { Box, Tab } from "@mui/material";

export const StyledContainer = styled(Box)(({}) => ({
  marginTop: 4,
  backgroundColor: "lightgrey",
  borderRadius: 5,
}));
export const StyledTab = styled(Tab)(({}) => ({
  fontSize: 17,
  ":focus": {
    color: "white",
  },
  "&.Mui-selected": {
    color: "white",
  },
}));
