import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { Footer } from './components/Footer/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <ChakraProvider>*/}
      <Footer/>
   {/* </ChakraProvider>*/} 
  </React.StrictMode>,
)

