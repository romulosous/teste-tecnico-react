'use client'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const PostsContainer = styled.div`
  display: flex;
  gap: 40px;
  margin-top: 60px;
  margin-bottom: 100px;
  align-items: flex-start;
  border-top: 2px solid #e0e0e0;
`

export const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  cursor: pointer;
  flex: 2;
  width: 100%;
  margin-top: 40px;
`

// export const Pagination = styled.div`
//   display: flex;
//   gap: 10px;
// `

// export const PaginationButton = styled.button`
//   padding: 10px;
//   border: none;
//   width: 40px;
//   background-color: #f2f2f2;
//   border-radius: 5px;
//   cursor: pointer;
//   transition: 0.3s;
//   &:hover {
//     background-color: #e2e2e2;
//   }
// `

export const UserListContainer = styled.div`
  display: flex;
  flex: 1;
  max-width: 260px;
  margin-top: 40px;
`
