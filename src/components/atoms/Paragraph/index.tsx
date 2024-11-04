import { ReactNode } from 'react'
import * as S from './style'

interface ParagraphProps {
  children: ReactNode
}
const Paragraph = ({ children }: ParagraphProps) => (
  <S.Paragraph>{children}</S.Paragraph>
)

export default Paragraph
