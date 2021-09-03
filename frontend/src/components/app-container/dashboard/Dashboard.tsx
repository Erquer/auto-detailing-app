import React from "react";
import Calendar from "./Calendar/Calendar";
import {
  StyledDashboardElement,
  StyledDashboardWrapper,
} from "./Dashboard.styled";
import Income from "./Income/Income";
import Workers from "./Workers/Workers";
import Orders from "./Orders/Orders";

const Dashboard = () => {
  return (
    <StyledDashboardWrapper>
      <StyledDashboardElement>
        <Calendar />
      </StyledDashboardElement>
      <StyledDashboardElement>
        <Income />
      </StyledDashboardElement>
      <StyledDashboardElement>
        <Workers />
      </StyledDashboardElement>
      <StyledDashboardElement>
        <Orders />
      </StyledDashboardElement>
    </StyledDashboardWrapper>
  );
};

export default Dashboard;