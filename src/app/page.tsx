import Image from 'next/image'
import MyProfilePic from './components/MyProfilePic'

export default function Home() {
  return (
    <main className='p-6 mx-auto'>
      <p className="mt12 mb12 text-3xl text-center dark:text-white">
        Olá seja bem-vindo👋{' '}
        <span className="whitespace-nowrap">
          I am <span className='font-bold'>Lucas</span>
          <MyProfilePic></MyProfilePic>
        </span>
      </p>
    </main>
  )
}
