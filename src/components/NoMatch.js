import { useLocation } from "react-router-dom"

const NoMatch = () => {
  let location = useLocation()
  return (
    <h2 className="no-match-text">No match for {location.pathname}</h2>
  )
}

export default NoMatch