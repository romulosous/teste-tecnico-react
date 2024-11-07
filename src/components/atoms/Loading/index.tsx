'use client'
import React, { useEffect } from 'react'
import * as S from './style'

const Loading = () => {
  useEffect(() => {
    // verificar se o window está disponível
    if (typeof window === 'undefined') return
    const document = window.document.querySelector(
      'body'
    ) as unknown as HTMLElement
    document.style.overflow = 'hidden'
    return () => {
      document.style.overflow = 'auto'
    }
  }, [])

  return (
    <S.LoadingContainer>
      <S.Spinner />
    </S.LoadingContainer>
  )
}

export default Loading
