import { FooterContainerr, FooterLink } from './Footer.style'

export default function Header() {
  return (
    <FooterContainerr>
      {'Feito na base do ☕ por'}
      <FooterLink href="https://www.linkedin.com/in/leonardo-esperanca/">
        {'Leonardo Esperança'}
      </FooterLink>
    </FooterContainerr>
  )
}

;<footer className="text-xs text-white">
  Feito na base do ☕ por{' '}
  <a className="underline underline-offset-2">Leonardo Esperança</a>
</footer>
