import { ListItem, MenuList } from '@material-ui/core';
import styled from 'styled-components';
import { APPColors } from '../../utils/colors';
import { toRem } from '../../utils/utils';

export const StyledMenuContainer = styled(MenuList)`
  box-sizing: border-box;
  flex-basis: calc(1 / 12 * 100%);
  height: 100%;
  padding-right: ${toRem(2)};
  background-color: ${APPColors.stTopaz};
`;

export const StyledMenuItem = styled(ListItem)`
  display: flex;
  flex: 1;
  height: ${toRem(40)};
  width: 100%;
  padding: ${toRem(8)} ${toRem(10)};
  border: 1px solid black;
  justify-content: center;
  background-color: ${APPColors.lightBlue};
  &:hover {
    background-color: ${APPColors.darkBlue};
  }
`;
