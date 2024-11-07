import { Meta, StoryObj } from '@storybook/react'

import PostCard from '.'

export default {
  title: 'Organisms/PostCard',
  component: PostCard,
  parameters: {
    nextjs: {
      appDirectory: true
    }
  }
} as Meta

const postMock = {
  userId: 3,
  user: {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: {
        lat: '-37.3159',
        lng: '81.1496'
      }
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets'
    }
  },
  id: 21,
  title: 'asperiores ea ipsam voluptatibus modi minima quia sint',
  body: 'repellat aliquid praesentium dolorem quo\nsed totam minus non itaque\nnihil labore molestiae sunt dolor eveniet hic recusandae veniam\ntempora et tenetur expedita sunt'
}

export const Basic: StoryObj = {
  args: {
    post: postMock
  }
}
