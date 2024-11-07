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
  margin-top: 60px;
  margin-bottom: 20px;
  align-items: flex-start;
`

export const PostHeader = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
`

export const Title = styled.h2`
  font-size: 3.5rem;
  font-weight: 600;
`

export const PostBody = styled.p`
  font-size: 1.625rem;
  max-width: 720px;
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

export const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  gap: 10px;
  font-size: 1.75rem;
  font-weight: 600;
`

export const CommentsTitle = styled.h3`
  font-size: 2.5rem;
  font-weight: 600;
  margin-top: 60px;
  margin-bottom: 20px;
`

export const Comments = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`
