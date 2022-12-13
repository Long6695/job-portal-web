import { useMutation } from "@tanstack/react-query"
import { http } from "../../utils/http"
import { SignInFormData } from "./types/credentials"

export const useSignIn = (
  setData: React.Dispatch<React.SetStateAction<SignInFormData>>
) => {
  const { mutate, isLoading } = useMutation({
    mutationFn: (data) => http.post("/auth/login", data),
    mutationKey: ["login"],
    onMutate: async (data: SignInFormData) => {
      setData({
        email: "",
        password: "",
      })
    },
    onSuccess(data) {
      console.log("data", data)
      return Promise.resolve(data)
    },
  })
  return {
    mutate,
    isLoading,
  }
}
