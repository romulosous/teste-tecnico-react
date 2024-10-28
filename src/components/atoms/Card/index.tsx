import { ReactNode } from 'react'
import * as S from './style'

interface CardProps {
  children?: ReactNode
}

const Card = ({ children }: CardProps) => <S.Wrapper>{children}</S.Wrapper>

export default Card
