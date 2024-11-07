'use client'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const UserPostsContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 60px;
  margin-bottom: 100px;
  align-items: flex-start;
  border-top: 2px solid #e0e0e0;
`

export const PostTitle = styled.h2`
  font-size: 2.5rem;
  color: #ef4723;
  position: relative;
  padding: 5px 26px;

  &::after {
    content: '';
    display: block;
    width: 120px;
    height: 4px;
    background-color: #ef4723;
    position: absolute;
    bottom: -8px;
    left: 0;
  }
`

export const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
  margin-bottom: 100px;
  align-items: flex-start;
  max-width: 720px;
`

export const UserListContainer = styled.div`
  display: flex;
  flex: 1;
`
