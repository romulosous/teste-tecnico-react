import * as S from './style'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

const Card = ({ children, ...props }: CardProps) => (
  <S.Wrapper {...props}>{children}</S.Wrapper>
)

export default Card
