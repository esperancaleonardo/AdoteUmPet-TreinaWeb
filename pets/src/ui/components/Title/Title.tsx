import { SubitleStyled, TitleStyled } from './Title.style'

interface TituloProps {
  TitleText: string
  SubtitleText?: string | JSX.Element
}

export default function Title({ TitleText, SubtitleText }: TituloProps) {
  return (
    <>
      <TitleStyled>{TitleText}</TitleStyled>
      <SubitleStyled>{SubtitleText}</SubitleStyled>
    </>
  )
}
