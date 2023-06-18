import logo from './logo.svg'
import './App.css'
import { HeroServiceClient } from './proto/HeroServiceClientPb'
import { useEffect } from 'react'
import { HeroById } from './proto/hero_pb'

const client = new HeroServiceClient('localhost:3000')

function App() {
  const request = new HeroById()
  request.setId(1)

  useEffect(() => {
    ;(async () => {
      const response = await client.findOne(request, {})
      console.log('@res', response)
    })()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
