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
    element: <Game level={{ stage1: true, stage2: false, stage3: false }} />,
    path: '/game/level/stage1',
  },
  {
    element: <Game level={{ stage1: false, stage2: true, stage3: false }} />,
    path: '/game/level/stage2',
  },
  {
    element: <Game level={{ stage1: false, stage2: false, stage3: true }} />,
    path: '/game/level/stage3',
  },
]

const router = createBrowserRouter([...publicRouters, ...privateRoutes])

export function Router() {
  return <RouterProvider router={router} />
}
