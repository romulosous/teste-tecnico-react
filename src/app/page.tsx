import HomePage from '@/components/Page/HomePage'

export default async function Home() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    cache: 'force-cache'
  })
  const data = await response.json()
  console.log('response', data)
  return <HomePage posts={data} />
}
