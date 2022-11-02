import React, { useState } from 'react'
import Lottie from './Lottie'
import './App.css'
import CelebrateLottie from './Celebrate'
import Countdown from './Countdown'
import Background from './Background'

const DUE_DATE = 'April 25, 2023'

function App() {
  const [celebrate, setCelebrate] = useState<boolean>(false)

  return (
    <Background>
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: 30,
        }}
      >
        <h1>Baby Burgard</h1>
        <h2>Due {DUE_DATE}</h2>
        <Countdown />
      </div>
      <div style={{ width: 200 }}>
        {celebrate ? <CelebrateLottie /> : <Lottie />}
      </div>
      <div>
        <button onClick={() => setCelebrate((prev) => !prev)}>
          {celebrate ? 'Ok, enough celebrating!' : 'Celebrate!'}
        </button>
      </div>
      <div
        style={{
          marginTop: 10,
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: 5,
        }}
      >
        <h4 style={{ textDecoration: 'underline' }}>Registries</h4>
        <a
          style={{ color: 'white', marginTop: 10 }}
          target='blank'
          rel='noopener noreferer'
          href='https://www.amazon.com/baby-reg/morgan-burgard-austin-burgard-april-2023-ofallon/1VT2IKZC045OG'
        >
          <i className='fa-brands fa-amazon fa-2xl'></i>
        </a>
      </div>
    </Background>
  )
}

export default App
