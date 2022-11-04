import { FormEvent, useState } from "react"
import Image from "next/image"
import { api } from "../lib/axios"

import appPreviewImg from "../assets/aplication-trail-ignite.png"
import avatarsImg from "../assets/avatares.png"
import logoImg from "../assets/logo-nlw-cup2022.svg"
import checkImg from "../assets/icon-check.svg"

interface HomeProps {
  poolCount: number;
  guessCount: number;
  userCount: number;
}

export default function Home(props: HomeProps) {
const [poolTitle, setPoolTitle] = useState('')

async function createPool(event: FormEvent) {
  event.preventDefault()

  try {
    const response = await api.post('pools', {
      title: poolTitle,
    })

    const { code } = response.data

    await navigator.clipboard.writeText(code)

    alert('Bolão created successfully, the code has been copied to the clipboard!')

    setPoolTitle('')
  } catch (error) {
    console.log(error)
    alert('Failure to create pool, please try more later!')
  }
}

  return (
    <div className="max-w-[1124px] h-screen mx-auto grid grid-cols-2 gap-28 items-center">
      <main>
        <Image src={logoImg} alt="logo NLW Copa" />

        <h1 className="mt-14 text-white text-4xl font-bold leading-tight">
          Create your own cup pool and share it among friends, come have fun in this cup, come?
        </h1>

        <div className="mt-10 flex items-center gap-2">
          <Image src={avatarsImg} alt="" />
          <strong className="text-gray-100 text-xl">
            <span className="text-ignite-500">+{props.userCount}</span> 
              &nbsp;people are already using
          </strong>
        </div>

        <form onSubmit={createPool} className="mt-10 flex gap-2">
          <input
            className="flex-1 px-6 py-4 rounded bg-gray-800 border border-gray-600 text-sm text-gray-100"
            type="text"
            required
            placeholder="What is your bubble name?"
            onChange={event => setPoolTitle(event.target.value)}
            value={poolTitle}
          />
          <button
            className="bg-yellow-500 px-6 py-4 rounded text-gray-900 font-bold text-sm uppercase hover:bg-yellow-700 hover:text-white transition-all"
            type="submit"
          >
            Create my pool
          </button>
        </form>

        <p className="mt-4 text-sm text-gray-300 leading-relaxed">
          After creating your pool, you will receive a unique code that you can use to invite others 🚀
        </p>

        <div className="mt-10 pt-10 border-t border-gray-600 grid grid-cols-2 text-gray-100">
          <div className="flex items-center gap-6 border-r border-gray-600">
            <Image src={checkImg} alt="" />
            <div className="flex flex-col">
              <span className="font-bold text-2xl">+{props.poolCount}</span>
              <span>Pools created</span>
            </div>
          </div>
          <div className="flex justify-center gap-6">
            <Image src={checkImg} alt="" />
            <div className="flex flex-col">
              <span className="font-bold text-2xl">+{props.guessCount}</span>
              <span>Guesses sent</span>
            </div>
          </div>
        </div>
      </main>

      <Image
        src={appPreviewImg}
        alt="Dois celulares exibindo uma prévia da aplicação móvel do NLW Copa 2022."
        quality={100}
      />
    </div>
  )
}

export const getServerSideProps = async () =>{
  const [poolCountResponse, guessCountResponse, userCountResponse] = await Promise.all([
    api.get('pools/count'),
    api.get('guesses/count'),
    api.get('users/count'),
  ])


  return {
    props: {
      poolCount: poolCountResponse.data.count,
      guessCount: guessCountResponse.data.count,
      userCount: userCountResponse.data.count,
    }
  }
}
