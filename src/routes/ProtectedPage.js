import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/auth-context"

function ProtectedPage() {
  let auth = useAuth()
  let navigate = useNavigate()

  if (!auth.user) {
    return <></>
  }

  return (
    <p>
      Bem vindo(a) {auth.user?.name}!{" "}
      <button
        onClick={() => {
          auth.signout(() => navigate("/"))
        }}
      >
        Sair
      </button>
    </p>
  )
}

export default ProtectedPage
