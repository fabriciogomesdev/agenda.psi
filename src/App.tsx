import {Helmet, HelmetProvider} from 'react-helmet-async'
import { Toaster } from 'sonner'
import { RouterProvider } from 'react-router-dom'
import './App.css'

import { router } from './routes'
import { ThemeProvider } from './components/theme/theme-provider'


export function App() {
  

  return (
    <HelmetProvider>
      <ThemeProvider storageKey='agenda.psi-theme' defaultTheme='light'>
      <Helmet titleTemplate='%s | agenda.psi'/>
      <Toaster richColors/>
      <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  )
}


