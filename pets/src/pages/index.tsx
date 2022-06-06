import type { NextPage } from 'next'
import {
  Dialog,
  Grid,
  TextField,
  DialogActions,
  Button,
  Snackbar
} from '@mui/material'
import { useState } from 'react'

import Title from '../ui/components/Title/Title'
import List from '../ui/components/List/List'
import { Pet } from '../data/@types/pet'

const Home: NextPage = () => {
  const [modalOpen, setModalOpen] = useState<Pet | null>(null)
  const [modalSent, setModalSent] = useState(false)
  const [email, setEmail] = useState('')
  const [value, setValue] = useState('')
  const [petsList, setPetsList] = useState([
    {
      id: 1,
      name: 'Bidu',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas impedit sed magnam mollitia dolor excepturi perspiciatis dolores doloremque provident qui. Ut unde, dolores facere culpa dolorum obcaecati labore delectus deleniti.',
      image:
        'https://www.mundoecologia.com.br/wp-content/uploads/2019/11/Bidu-da-Turma-da-M%C3%B4nica.jpg'
    },
    {
      id: 2,
      name: 'Coragem',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas impedit sed magnam mollitia dolor excepturi perspiciatis dolores doloremque provident qui. Ut unde, dolores facere culpa dolorum obcaecati labore delectus deleniti.',
      image:
        'https://rollingstone.uol.com.br/media/stories/episodios-assustadores-de-coragem-o-cao-covarde/assets/5.jpeg'
    },
    {
      id: 3,
      name: 'Mutley',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas impedit sed magnam mollitia dolor excepturi perspiciatis dolores doloremque provident qui. Ut unde, dolores facere culpa dolorum obcaecati labore delectus deleniti.',
      image:
        'https://images.tcdn.com.br/img/img_prod/697730/adesivo_lateral_vidro_caminhao_carro_decorativo_mutley_1147486506_1_10004d4a25c5e024890ecfacd8c09c3b.jpg'
    }
  ])

  function adopt() {
    setModalOpen(null)
    setModalSent(true)
    console.log('ADOTADO')
  }

  return (
    <div>
      <Title
        TitleText=""
        SubtitleText={
          <span>
            Com um pequeno valor mensal, você pode{' '}
            <strong>adotar um pet virtualmente.</strong>
          </span>
        }
      />
      <List pets={petsList} onSelect={pet => setModalOpen(pet)} />

      <Dialog
        open={modalOpen !== null}
        onClose={() => setModalOpen(null)}
        fullWidth={true}
        PaperProps={{ sx: { p: 3 } }}
      >
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <h3>Vamos adotar o(a) {modalOpen?.name}?</h3>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label={'Email'}
              type={'email'}
              fullWidth
              value={email}
              onChange={e => setEmail(e.target.value)}
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label={'Quantia Por Mês para adoção'}
              type={'number'}
              fullWidth
              value={value}
              onChange={e => setValue(e.target.value)}
            ></TextField>
          </Grid>
        </Grid>
        <DialogActions sx={{ mt: 4 }}>
          <Button color={'secondary'} onClick={() => setModalOpen(null)}>
            Cancelar
          </Button>
          <Button
            variant={'contained'}
            onClick={() => {
              adopt()
            }}
          >
            Adotar o Pet
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={modalSent}
        message={'Adoção efetuada com sucesso!'}
        autoHideDuration={1500}
        onClose={() => setModalSent(false)}
      />
    </div>
  )
}

export default Home
