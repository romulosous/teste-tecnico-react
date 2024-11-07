'use client'
import { cardStyles } from '@/components/atoms/Card/style'
import styled from 'styled-components'

export const Container = styled.div`
  ${cardStyles}
  margin-top: 60px;
  max-width: 200px;
`

export const Title = styled.h3`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 1rem;
`

export const UserListContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

export const UserItem = styled.li`
  margin-bottom: 0.5rem;

  &:hover {
    text-decoration: underline;
  }

  a {
    font-size: 1rem;
    color: #ef4723;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;
  }
`

export const ShowMoreButton = styled.button`
  background: none;
  border: none;
  color: #000;
  font-size: 0.9rem;
  cursor: pointer;
  padding: 0;
  margin-top: 0.5rem;
  text-align: left;

  &:hover {
    text-decoration: underline;
  }
`
