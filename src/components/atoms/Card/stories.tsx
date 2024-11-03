import { Meta, StoryObj } from '@storybook/react'

import Card from '.'

export default {
  title: 'Atoms/Card',
  component: Card,
  parameters: {
    // layout: 'fullscreen'
  }
} as Meta

export const Default: StoryObj = {
  args: {
    children: 'Este é o conteúdo padrão do card.'
  }
}

export const Basic: StoryObj = {
  args: {
    children: 'Este é o conteúdo básico do card.'
  }
}
