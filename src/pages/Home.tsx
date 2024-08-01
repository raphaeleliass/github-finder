import { useEffect, useState } from 'react'
import { api } from '../services/api'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  Cardtitle,
} from '../components/ui/card'
import Input from '../components/ui/input'
import Button from '../components/ui/button'
import { FaSearch } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { CgSpinner } from 'react-icons/cg'

interface UserData {
  id: string
  login: string
  avatar_url: string
  public_repos: string
  name: string
  location: string
  bio: string
  followers: string
  following: string
  created_at: string
}

function Home() {
  const [user, setUser] = useState('')
  const [userData, setUserData] = useState<UserData | null>(null)
  const [foundUser, setFoundUser] = useState(false)

  async function getUser() {
    try {
      const response = await api.get(`${user}`)
      setUserData(response.data)
      console.log()
      setFoundUser(true)
      console.log(response.data)
    } catch (err) {
      setFoundUser(false)
      console.log(err)
    }
  }

  useEffect(() => {}, [])

  return (
    <main className="min-h-[100dvh] flex bg-gray-900 items-center justify-center">
      <Card className="bg-gray-800 text-white">
        <CardHeader className="items-center justify-center text-center">
          <Cardtitle className="text-2xl">Github Finder</Cardtitle>
          <CardDescription className="text-opacity-70 text-white">
            Encontre usuários do github de forma fácil.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="flex flex-row w-full gap-2">
            <Input
              placeholder="Digite um usuário"
              value={user}
              onChange={(e) => {
                setUser(e.target.value)
              }}
              maxLength={39}
            />
            <Button onClick={getUser}>
              <FaSearch />
            </Button>
          </div>
        </CardContent>

        {foundUser && (
          <CardFooter>
            <Card className="text-black bg-white">
              <CardHeader className="items-center ">
                <CardDescription className="text-xs">
                  @{userData?.login}
                </CardDescription>
                <div className="flex flex-row justify-around items-start gap-2">
                  <div className="flex flex-col gap-1 text-center items-center">
                    <img
                      src={userData?.avatar_url}
                      alt={`imagem do usuário ${userData?.name}`}
                      className="rounded-full size-12"
                    />
                    <Cardtitle className="text-xs">{userData?.name}</Cardtitle>
                    <CardDescription className="text-xs">
                      {userData?.location}
                    </CardDescription>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <Cardtitle className="text-xs">Repos</Cardtitle>
                    <CardDescription className="text-xs font-semibold">
                      {userData?.public_repos}
                    </CardDescription>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <Cardtitle className="text-xs">Seguidores</Cardtitle>
                    <CardDescription className="text-xs font-semibold">
                      {userData?.followers}
                    </CardDescription>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <Cardtitle className="text-xs">Seguindo</Cardtitle>
                    <CardDescription className="text-xs font-semibold">
                      {userData?.following}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-row justify-center items-center">
                  <Button>
                    <a
                      target="_blank"
                      href={`https://github.com/${userData?.login}?tab=repositories`}
                    >
                      ver
                    </a>
                  </Button>
                  <Button>
                    <a
                      target="_blank"
                      href={`https://github.com/${userData?.login}`}
                    >
                      ver
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </CardFooter>
        )}
      </Card>
    </main>
  )
}

export default Home
