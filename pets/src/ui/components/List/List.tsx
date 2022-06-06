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
  onSelect: (pet: Pet) => void
}

export default function List(props: ListProps) {
  const maxLen = process.env.NEXT_PUBLIC_MAX_LEN_DESCRIPTION

  return (
    <ListStyled>
      {props.pets.map(pet => (
        <ListItemStyled key={pet.id}>
          <ItemPicStyled src={pet.image} />
          <ItemInfoStyled>
            <InfoNameStyled>{pet.name}</InfoNameStyled>
            <InfoDescStyled>
              {TextService.cropAndLimitText(pet.description, maxLen)}
            </InfoDescStyled>
            <Button
              fullWidth
              variant={'contained'}
              onClick={() => props.onSelect(pet)}
            >
              Adotar o {pet.name}
            </Button>
          </ItemInfoStyled>
        </ListItemStyled>
      ))}
    </ListStyled>
  )
}
