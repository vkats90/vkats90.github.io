//update text for shinobi project
//add more minor projects
// populate highlights
// add bonus skills

import { createContext, useState } from 'react'
import { Outlet } from 'react-router-dom'
import TopBar from './components/topbar'
import Footer from './components/footer'

import 'yet-another-react-lightbox/styles.css'

const ViewContext = createContext({ inView: false, setInView: (_value: boolean) => {} })

function App() {
  const [inView, setInView] = useState(false)
  return (
    <ViewContext.Provider value={{ inView, setInView: (value: boolean) => setInView(value) }}>
      <div className="relative bg-backg">
        <TopBar />
        <Outlet />
        <Footer />
      </div>
    </ViewContext.Provider>
  )
}
export { ViewContext }
export default App
