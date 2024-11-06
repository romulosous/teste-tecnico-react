'use client'
import styled from 'styled-components'

export const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  cursor: pointer;
`

export const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 600;
`

export const PostBody = styled.p`
  font-size: 1.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  font-weight: 400;
`

export const PostDate = styled.span`
  font-size: 1.5rem;
`
