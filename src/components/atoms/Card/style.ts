'use client'
import styled, { css } from 'styled-components'

export const cardStyles = css`
  width: 100%;
  height: 100%;
  padding: 1.25rem;
  border-radius: 1.25rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 4px 0px #00000040;
`

export const Wrapper = styled.div`
  ${cardStyles}
`
