'use client'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  cursor: pointer;
  width: 100%;
  max-width: 800px;
  margin-top: 40px;
`

export const Pagination = styled.div`
  display: flex;
  gap: 10px;
`

// todos os botoes de Pagination
export const PaginationButton = styled.button`
  padding: 10px;
  border: none;
  width: 40px;
  background-color: #f2f2f2;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: #e2e2e2;
  }
`
