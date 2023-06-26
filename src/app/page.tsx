import Image from 'next/image'

export default function Home() {
  return (
    <main className='p-6 mx-auto'>
      <p className="mt12 mb12 text-3xl text-center dark:text-white">
        Hello and Welcome👋{' '}
        <span className="whitespace-nowrap">
          I am <span className='font-bold'>Lucas</span>
        </span>
      </p>
    </main>
  )
}
