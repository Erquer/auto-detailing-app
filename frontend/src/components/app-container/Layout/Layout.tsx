import React from 'react';
import { StyledLayout, StyledLayoutWrapper } from './Layout.styled';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <StyledLayoutWrapper>
    <StyledLayout>{children}</StyledLayout>
  </StyledLayoutWrapper>
);

export default Layout;
