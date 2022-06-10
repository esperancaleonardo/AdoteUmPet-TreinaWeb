import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from '@mui/material'
import { NextPage } from 'next'
import Title from '../../ui/components/Title/Title'
import { useState, useEffect } from 'react'
import { Relatorio } from '../../data/@types/relatorio'
import Footer from '../../ui/components/Footer/Footer'
import { ApiService } from '../../data/services/ApiService'

const Relatorio: NextPage = () => {
  const [adoptions, setAdoptions] = useState<Relatorio[]>([])

  useEffect(() => {
    ApiService.get('/adoption').then(response => setAdoptions(response.data))
    console.log(adoptions)
  }, [])

  return (
    <>
      <Title
        TitleText={'Relatório de pets já adotados'}
        SubtitleText={'Veja quem adotou quem e por qual valor'}
      />
      <TableContainer
        component={Paper}
        sx={{
          p: { xs: 2, md: 4 },
          maxWidth: 700,
          mx: 'auto',
          border: '1pt solid #AE0FEA',
          borderRadius: '40px',
          boxShadow:
            '0 8px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
        }}
      >
        <Table>
          <TableHead>
            <TableCell>Pet</TableCell>
            <TableCell>E-mail</TableCell>
            <TableCell align={'right'}>Valor Mensal</TableCell>
          </TableHead>
          <TableBody>
            {adoptions.map(adoption => (
              <TableRow key={adoption.id}>
                <TableCell>{adoption.pet.name}</TableCell>
                <TableCell>{adoption.email}</TableCell>
                <TableCell align={'right'}>{adoption.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Footer />
    </>
  )
}

export default Relatorio
