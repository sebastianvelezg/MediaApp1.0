import { Link } from 'react-router-dom'
import './TopNavBar.css'

function TopNavBar(): JSX.Element {
  return (
    <div className="TopNavBar">
      <Link to="/settings">Settings</Link>
      <Link to="/">Home</Link>
    </div>
  )
}

export default TopNavBar
