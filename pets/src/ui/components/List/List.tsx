import {
  ListStyled,
  ListItemStyled,
  ItemPicStyled,
  ItemInfoStyled,
  InfoNameStyled,
  InfoDescStyled
} from './List.style'

import { Button } from '@mui/material'
import { Pet } from '../../../data/@types/pet'
import { TextService } from '../../../data/services/TextService'

interface ListProps {
  pets: Pet[]
}

export default function List({ pets }: ListProps) {
  const maxLen = process.env.NEXT_PUBLIC_MAX_LEN_DESCRIPTION

  return (
    <ListStyled>
      {pets.map(pet => (
        <ListItemStyled key={pet.id}>
          <ItemPicStyled src={pet.image} />
          <ItemInfoStyled>
            <InfoNameStyled>{pet.name}</InfoNameStyled>
            <InfoDescStyled>
              {TextService.cropAndLimitText(pet.description, maxLen)}
            </InfoDescStyled>
            <Button fullWidth variant={'contained'}>
              Adotar o {pet.name}
            </Button>
          </ItemInfoStyled>
        </ListItemStyled>
      ))}
    </ListStyled>
  )
}
