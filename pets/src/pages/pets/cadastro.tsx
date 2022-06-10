import { Paper, Grid, TextField, Button, Snackbar } from '@mui/material'
import { NextPage } from 'next'
import Title from '../../ui/components/Title/Title'
import { useState } from 'react'
import { ApiService } from '../../data/services/ApiService'
import { AxiosError } from 'axios'
import Footer from '../../ui/components/Footer/Footer'

const Cadastro: NextPage = () => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [url, setUrl] = useState('')
  const [snackMessage, setSnackMessage] = useState('')

  function insertPet() {
    if (validateForm()) {
      ApiService.post('/pets', {
        name: name,
        description: description,
        image: url
      })
        .then(() => {
          clearForm()
          setSnackMessage('Seu pet foi cadastrado com sucesso!')
        })
        .catch((error: AxiosError) => {
          setSnackMessage(error.response?.data.message)
        })
    } else {
      setSnackMessage('Preencha todos os campos, por favor!')
    }
  }
  function validateForm() {
    return name.length > 2 && description.length > 10 && url.length > 0
  }
  function clearForm() {
    setName('')
    setDescription('')
    setUrl('')
  }

  return (
    <>
      <Title
        TitleText={'Cadastro de pets para adoção'}
        SubtitleText={'Preencha os dados do pet'}
      />
      <Paper
        sx={{
          maxWidth: 830,
          p: 5,
          mx: { xs: 2, md: 'auto' },
          border: '1pt solid #AE0FEA',
          borderRadius: '40px',
          boxShadow:
            '0 8px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              value={name}
              onChange={e => setName(e.target.value)}
              label={'Nome'}
              placeholder={'Digite o nome do pet'}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              value={description}
              onChange={e => setDescription(e.target.value)}
              label={'História do pet'}
              fullWidth
              multiline
              rows={5}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              value={url}
              onChange={e => setUrl(e.target.value)}
              label={'Foto'}
              placeholder={'Digite a URL da imagem'}
              fullWidth
            />
            <Button
              variant={'contained'}
              color={'secondary'}
              sx={{ mt: 2 }}
              component={'a'}
              href={'https://imgur.com/upload'}
              target={'_blank'}
            >
              Obter um Link
            </Button>
          </Grid>
          <Grid item xs={12} sx={{ textAlign: 'center' }}>
            <Button
              onClick={insertPet}
              variant={'contained'}
              fullWidth
              sx={{ maxWidth: { md: 200 }, mt: 4 }}
            >
              Cadastrar meu pet!
            </Button>
          </Grid>
        </Grid>
      </Paper>

      <Footer />

      <Snackbar
        open={snackMessage.length > 0}
        autoHideDuration={1500}
        onClose={() => setSnackMessage('')}
        message={snackMessage}
      />
    </>
  )
}

export default Cadastro
