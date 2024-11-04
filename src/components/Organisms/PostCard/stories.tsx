import { Meta, StoryObj } from '@storybook/react'

import PostCard from '.'

export default {
  title: 'Organisms/PostCard',
  component: PostCard,
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: StoryObj = {}

export const Basic: StoryObj = {
  args: {
    content:
      'Dragons dogma 2 para mim é um jogo com uma gameplay e sistema de party perfeitos, porém com 0 história e missões chatas!',
    likes: 10,
    comments: 2
  }
}
