import { styled } from '@mui/material'

export const HeaderContainer = styled('header')`
  height: 115px;
  padding: ${({ theme }) => theme.spacing(2)};

  div {
    height: 100%;
    max-width: 970px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    gap: ${({ theme }) => theme.spacing(2)};
    align-items: center;
  }

  a {
    font-size: 14px;
  }
`

export const Logo = styled('img')`
  width: 125px;
`

export const LinksContainer = styled('nav')`
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
  flex-wrap: wrap;
  justify-content: flex-end;
`
