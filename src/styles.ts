import Chip, { ChipProps } from '@material-ui/core/Chip';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';
import styled from 'styled-components';

//  ? '#171717' : '#F4F4F4'
//  ? '#1BB55C' : '#2667ff'
// .dark ? '#FFF' : '#000'

export const PortifolioPage = styled.div`
  background-color: ${props => props.theme.background};
  min-height: 100vh;
  width: 100vw;
`;

export const TopButtons = styled.div`
  padding-top: 5px;
  padding-right: 5px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const DivFlexCenter = styled.div`
  display: flex;
  justify-content: center;
`;

export const Photo = styled(DivFlexCenter)`
  min-height: 221px;
`;

export const FullName = styled(DivFlexCenter)`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 34px;
  line-height: 58px;
  color: ${props => props.theme.text};
`;

export const Job = styled(DivFlexCenter)`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 28px;
  /* identical to box height, or 140% */

  letter-spacing: 0.15px;
  color: ${props => props.theme.highlight};
`;

export const SocialNetworks = styled(DivFlexCenter)`
  padding-top: 15px;
`;

interface IconContactProps extends SvgIconProps {
  component: any;
}

export const IconContact = styled(SvgIcon)<IconContactProps>`
  color: transparent;
  cursor: pointer;
  /* margin: 0px 8px; */
`;

const Text = styled.p`
  font-family: Inter;
  font-style: normal;
  color: ${props => props.theme.text};
  margin: 0px;
  text-align: center;
`;

export const Title = styled(Text)`
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0.15px;
`;

export const Body = styled(Text)`
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.01em;
`;

export const Content = styled(DivFlexCenter)`
  padding-top: 38px;
  flex-wrap: wrap;
`;

export const Square = styled.div`
  width: 460px;
  padding: 0px 12px 24px 12px;
`;

export const ContentSkills = styled(DivFlexCenter)`
  flex-wrap: wrap;
  padding-top: 3px;
`;

export const Skill = styled(Chip)<ChipProps>`
  margin: 2px;
  &.MuiChip-root {
    border: 1px solid ${props => props.theme.skill};
    color: ${props => props.theme.text};
  }
`;
