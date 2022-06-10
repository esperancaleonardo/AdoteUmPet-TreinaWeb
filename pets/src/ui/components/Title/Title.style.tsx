import { styled } from '@mui/material'

export const TitleStyled = styled('h1')`
  font-size: 24px;
  text-align: center;
  max-width: 80%;
  margin-inline: auto;
  word-break: break-world;
  margin-top: ${({ theme }) => theme.spacing(5)};
`

export const SubitleStyled = styled('h2')`
  font-size: 18px;
  text-align: center;
  margin-inline: ${({ theme }) => theme.spacing(9)};
  margin-bottom: ${({ theme }) => theme.spacing(5)};
  font-weight: normal;
  color: ${({ theme }) => theme.palette.text.secondary};
`
