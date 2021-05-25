import React from "react";
import {
  StyledDashboardElement,
  StyledDashboardWrapper,
} from "./Dashboard.styled";

export const Dashboard = () => {
  return (
    <StyledDashboardWrapper>
      <StyledDashboardElement>Kalendarz</StyledDashboardElement>
      <StyledDashboardElement>PRZYGÓD</StyledDashboardElement>
      <StyledDashboardElement>LISTA PRACOWNIKÓW</StyledDashboardElement>
      <StyledDashboardElement>HISTORIA</StyledDashboardElement>
    </StyledDashboardWrapper>
  );
};
