import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export function useAuth() {
  const navigate = useNavigate()

  useEffect(() => {
    const verificar = async () => {
      const token = localStorage.getItem("token")

      if (!token) {
        navigate("/login")
        return
      }

      try {
        const response = await fetch("http://localhost:3000/Auth", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })

        if (!response.ok) {
          localStorage.removeItem("token")
          navigate("/login")
        }

      } catch (err) {
        console.log(err)
        navigate("/login")
      }
    }

    verificar()
  }, [navigate])
}