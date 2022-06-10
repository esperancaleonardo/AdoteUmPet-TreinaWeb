import { styled } from '@mui/material'

export const FooterContainerr = styled('footer')`
  display: flex;
  position: fixed;
  bottom: 0;
  margin-top: ${({ theme }) => theme.spacing(2.5)};
  width: 100%;
  background-color: ${({ theme }) => theme.palette.primary.main};
  justify-content: center;
  border-top: 1px solid #f0f0f0;
  padding: ${({ theme }) => theme.spacing(2.5)};
  font-weight: bold;
`

export const FooterLink = styled('a')`
  padding-inline-start: ${({ theme }) => theme.spacing(2)};
  text-decoration: underline;
  text-underline-offset: 3px;
  width: fit-content;
`
