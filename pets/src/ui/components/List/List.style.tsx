import { styled } from '@mui/material'

export const ListStyled = styled('ul')`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing(3)};
`

export const ListItemStyled = styled('li')`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing(5)};
  margin-bottom: ${({ theme }) => theme.spacing(5)};

  ${({ theme }) => theme.breakpoints.down('md')} {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing(2)};
    margin-bottom: ${({ theme }) => theme.spacing(10)};
  }
`

export const ItemPicStyled = styled('img')`
  width: 350px;
  height: 350px;

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
