import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TopNavBar from '@renderer/components/TopNavBar'
import icons from '../assets/icons.svg'
import Settings from './Settings'

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <div className="container">
        <TopNavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <svg className="hero-logo" viewBox="0 0 900 300">
                  <use xlinkHref={`${icons}#electron`} />
                </svg>
                <h2 className="hero-text">Media Library</h2>
              </>
            }
          />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
