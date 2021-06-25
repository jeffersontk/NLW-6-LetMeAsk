
import { useHistory } from 'react-router-dom';

import IlustrationImg from './../assets/images/illustration.svg'
import LogoImg from './../assets/images/logo.svg'
import GoogleIconImg from './../assets/images/google-icon.svg'

import { Button } from '../components/Button'
import { useAuth } from '../hooks/useAuth';


import '../styles/auth.scss'

export function Home() {
  const history = useHistory()
  const {user, signInWithGoogle} = useAuth()

  async function navigateToNewRoom() {
    if (!user) {
     await signInWithGoogle()
    }

    history.push('/rooms/new')
  }


  return (
    <div id="page-auth">
      <aside>
        <img src={IlustrationImg} alt="Ilutração simbolizando pergunta e resposta" />
        <strong>Crie em salas e faça Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas de sua audiência em tempo-real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={LogoImg} alt="Let meask" />
          <button onClick={navigateToNewRoom} className="create-room">
            <img src={GoogleIconImg} alt="Google icone" />
            Cria a sua sala com o Google
          </button>
          <div className="separator">ou entre em uma sala</div>
          <form>
            <input
              type="text"
              placeholder="Digite o codigo da sala"
            />
            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  )
}
