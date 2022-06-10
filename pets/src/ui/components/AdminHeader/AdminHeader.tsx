import { Box, Link, Button } from '@mui/material'
import NextLink from 'next/link'
import { HeaderContainer, Logo, LinksContainer } from './AdminHeader.style'

export default function AdminHeader() {
  return (
    <HeaderContainer>
      <div>
        <Logo src="/img/logo.svg" alt="Adote um Pet" />
        <LinksContainer>
          <Link component={NextLink} href={'/pets/cadastro'}>
            <a>
              Cadastrar{' '}
              <Box
                component={'span'}
                sx={{ display: { sm: 'initial', xs: 'none' } }}
              >
                um pet
              </Box>
            </a>
          </Link>
          <Link component={NextLink} href={'/pets/relatorio'}>
            <a>
              Relatório{' '}
              <Box
                component={'span'}
                sx={{ display: { sm: 'initial', xs: 'none' } }}
              >
                de adoções
              </Box>
            </a>
          </Link>
        </LinksContainer>
      </div>
    </HeaderContainer>
  )
}
