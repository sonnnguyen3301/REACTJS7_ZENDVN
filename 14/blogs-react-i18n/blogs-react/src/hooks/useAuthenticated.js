import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useHistory } from "react-router"


export function useAuthenticated() {
  const history = useHistory()
  const isAuthenticated = useSelector(state => Boolean(state.Auth.token))

  useEffect(() => {
    if (!isAuthenticated) {
      history.push('/login')
    }
  }, [isAuthenticated, history])

}