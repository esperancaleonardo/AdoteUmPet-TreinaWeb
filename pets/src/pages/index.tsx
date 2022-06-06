import type { NextPage } from 'next'
import {
  Dialog,
  Grid,
  TextField,
  DialogActions,
  Button,
  Snackbar
} from '@mui/material'
import { useEffect, useState } from 'react'

import Title from '../ui/components/Title/Title'
import List from '../ui/components/List/List'
import { Pet } from '../data/@types/pet'

import { ApiService } from '../data/services/ApiService'
import { AxiosError } from 'axios'

const Home: NextPage = () => {
  const [modalOpen, setModalOpen] = useState<Pet | null>(null)
  const [modalSent, setModalSent] = useState(false)
  const [feedbackMessage, setFeedbackMessage] = useState('')
  const [email, setEmail] = useState('')
  const [value, setValue] = useState('')
  const [petsList, setPetsList] = useState<Pet[]>([])

  useEffect(() => {
    console.log('useEffect() executou')
    ApiService.get('/pets').then(pets => {
      console.log(pets.data)
      setPetsList(pets.data)
    })
  }, [])

  function adopt() {
    if (modalOpen !== null) {
      if (validadeForm()) {
        ApiService.post('/adoption', {
          pet_id: modalOpen.id,
          email: email,
          value: value
        })
          .then(() => {
            setModalOpen(null)
            setModalSent(true)
            setEmail('')
            setValue('')
            setFeedbackMessage('Adoção efetuada com sucesso, obrigado!!')
          })
          .catch((error: AxiosError) => {
            setFeedbackMessage(
              error.response?.data.message +
                ' ' +
                (error.response?.data.errors.email ||
                  error.response?.data.errors.value)
            )
            setModalSent(true)
          })
      } else {
        setFeedbackMessage(
          'Ocorreu um erro. Preencha todos os campos os campos e tente novamente.'
        )
        setModalSent(true)
      }
    }
  }

  function validadeForm() {
    return email.length > 0 && value.length > 0
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
        message={feedbackMessage}
        autoHideDuration={1500}
        onClose={() => setModalSent(false)}
      />
    </div>
  )
}

export default Home
