// interface HomeProps {
//   count: number;
// }

import Image from "next/image"
import appPreviewImg from "../assets/aplication-trail-ignite.png"
import avatarsImg from "../assets/avatares.png"
import logoImg from "../assets/logo.svg"
import checkImg from "../assets/icon-check.svg"

export default function Home() {
  return (
    <div>
      <main>
        <Image src={logoImg} alt="logo NLW Copa" />

        <h1>Crie seu próprio bolão da copa e compartilhe entre amigos!</h1>

        <div>
          <Image src={avatarsImg} alt="" />
          <strong>
            <span>+12.592</span> pessoas já estão usando
          </strong>
        </div>

        <form>
          <input type="text" required placeholder="Qual nome do seu bolão" />
          <button type="submit">Criar meu bolão</button>
        </form>

        <p>
          Após criar seu bolão, você receberá um código único que poderá usar
          para convidar outras pessoas 🚀
        </p>

        <div>
          <div>
            <Image src={checkImg} alt="" />
            <div>
              <span>+2.034</span>
              <span>Bolões criados</span>
            </div>
          </div>
          <div>
            <Image src={checkImg} alt="" />
            <div>
              <span>Palpites enviados</span>
              <span>+192.847</span>
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

// export const getServerSideProps = async () =>{
//   const response = await fetch('http://localhost:3333/pools/count')
//   const data = await response.json()

//   return {
//     props: {
//       count: data.count,
//     }
//   }
// }
