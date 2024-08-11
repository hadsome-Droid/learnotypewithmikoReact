import { RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom'

import { Game } from '@/game/Game'

import { StartGame } from '../components/startGame/StartGame'

const publicRouters: RouteObject[] = [
  {
    element: <StartGame />,
    path: '/',
  },
]
const privateRoutes: RouteObject[] = [
  {
    element: <Game />,
    path: '/game',
  },
]

const router = createBrowserRouter([...publicRouters, ...privateRoutes])

export function Router() {
  return <RouterProvider router={router} />
}
