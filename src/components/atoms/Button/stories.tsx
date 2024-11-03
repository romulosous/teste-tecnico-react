import { Meta, StoryObj } from '@storybook/react'

import Button from '.'

export default {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    // layout: 'fullscreen'
  }
} as Meta

export const Default: StoryObj = {
  args: {
    children: 'Este é o conteúdo padrão do Button.'
  }
}

export const Basic: StoryObj = {
  args: {
    children: 'Este é o conteúdo básico do Button.'
  }
}
