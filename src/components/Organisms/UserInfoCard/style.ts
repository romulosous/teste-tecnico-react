import styled from 'styled-components'

export const ProfileContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: white;
  max-width: 600px;
`

export const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
`

export const Details = styled.div`
  flex: 1;
`

export const Name = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
`

export const Username = styled.p`
  color: #666;
`

export const Info = styled.p`
  margin: 0.25rem 0;
`

export const Bio = styled.p`
  margin: 0.5rem 0;
`

export const EditButton = styled.button`
  background-color: #ff5722;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  align-self: flex-start;

  &:hover {
    background-color: #e64a19;
  }
`
