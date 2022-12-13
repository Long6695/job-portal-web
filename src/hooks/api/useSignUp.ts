import { useMutation } from "@tanstack/react-query"
import { http } from "../../utils/http"
import { SignUpFormData } from "./types/credentials"

export const useSignUp = (
  setData: React.Dispatch<React.SetStateAction<SignUpFormData>>
) => {
  const { mutate, isLoading } = useMutation({
    mutationFn: (data) => http.post("/auth/signup", data),
    mutationKey: ["signup"],
    onMutate: async (data: SignUpFormData) => {
      setData({
        email: "",
        password: "",
        confirmPassword: "",
      })
    },
  })
  return {
    mutate,
    isLoading,
  }
}
