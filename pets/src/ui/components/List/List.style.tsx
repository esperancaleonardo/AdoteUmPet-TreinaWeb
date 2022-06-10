import { styled } from '@mui/material'

export const ListStyled = styled('ul')`
  width: 85%;
  max-width: 680px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing(3)};
`

export const ListItemStyled = styled('li')`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-radius: 14px;
  background-color: #ffccbb;
  box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: ${({ theme }) => theme.spacing(3)};
  gap: ${({ theme }) => theme.spacing(5)};
  margin-bottom: ${({ theme }) => theme.spacing(5)};

  ${({ theme }) => theme.breakpoints.down('md')} {
    max-width: 490px;
    min-width: 370px;
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing(2)};
    margin-bottom: ${({ theme }) => theme.spacing(10)};
  }
`

export const ItemPicStyled = styled('img')`
  width: 350px;
  height: 350px;
  border-radius: 50px;
  box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.04);
  }

  //border: 1pt solid black;

  ${({ theme }) => theme.breakpoints.down('md')} {
    width: 100%;
  }
`

export const ItemInfoStyled = styled('div')`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
`

export const InfoNameStyled = styled('h2')`
  margin: 0;
`

export const InfoDescStyled = styled('p')`
  margin: 0;
  word-break: break-world;
`
