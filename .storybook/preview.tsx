import React from 'react'
import GlobalStyes from '../src/styles/global'

export const decorators = [
  (Story) => (
    <>
      <GlobalStyes />
      <Story />
    </>
  )
]
