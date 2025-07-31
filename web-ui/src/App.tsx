// import { useState } from 'react'
import styles from './App.module.css'
import Header from './components/layout/Header'
import Professional from './features/Professional'
import Social from './features/Social'
import Github from './features/Github'
import Personal from './features/Personal'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <div className={styles.app}>
        <Header />
        <Professional />
        <Social />
        <Github />
        <Personal />
    </div>
    </>

  )
}

export default App
