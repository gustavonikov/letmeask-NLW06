import { FormEvent, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { Button } from '../components/Button'

import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'
import { database } from '../services/firebase'

import '../styles/auth.scss'

export function Home() {
    const history = useHistory()
    const { user, signInWithGoogle } = useAuth()

    const [roomCode, setRoomCode] = useState('')

    function handleCreateRoom() {
        if (!user) {
            signInWithGoogle()
        }

        history.push('/rooms/new')
    }

    async function handleJoinRoom(ev: FormEvent) {
        ev.preventDefault()

        if (roomCode.trim() === '') {
            return
        }

        const roomRef = await database.ref(`rooms/${roomCode}`).get()

        if (!roomRef.exists()) {
            alert('Room does not exists.')

            return
        }

        if (roomRef.val().closedAt) {
            alert('Room already closed.')
            setRoomCode('')
            return
        }

        if (roomRef.child('authorId').val() === user?.id) {
            history.push(`admin/rooms/${roomCode}`)
        } else {
            history.push(`/rooms/${roomCode}`)
        }
    }

    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Ilustração de perguntas e respostas" />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo-real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Letmeask" />
                    <button className="create-room" onClick={handleCreateRoom}>
                        <img src={googleIconImg} alt="Logo do Google" />
                        Crie sua sala com o Google
                    </button>
                    <div className="separator">ou entre em uma sala</div>
                    <form onSubmit={handleJoinRoom}>
                        <input
                            type="text"
                            placeholder="Digite o código da sala"
                            value={roomCode}
                            onChange={({ target }) => setRoomCode(target.value)}
                        />
                        <Button type="submit">
                            Entrar na sala
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    )
}