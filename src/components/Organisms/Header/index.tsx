import Logo from '@/components/atoms/Logo'
import * as S from './style'
import Profile from '../Profile'
import Link from 'next/link'

const Header = () => (
  <S.Header>
    <Link href="/">
      <Logo />
    </Link>
    <Profile />
  </S.Header>
)

export default Header
