import {
  Box,
  Grid,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material"
import {LoadingButton} from "@mui/lab"
import React, {useState} from "react"
import LockOpenIcon from "@mui/icons-material/LockOpen"
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined"
import Link from "next/link"
import {motion} from "framer-motion"
import {useMutation} from "@tanstack/react-query"
import {toast} from "react-toastify"
import {login} from "@/src/store/credentials"
import {ILoginData} from "@/src/constants/credentials"

const SignInPage = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down("tablet"))
  const {mutate, isLoading} = useMutation({
    mutationFn: (formData: ILoginData) => {
      return login(formData)
    },
  })

  const [lock, setLock] = useState(true)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    mutate(formData, {
      onSuccess: () =>
        toast.success("Login Successfully", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }),
    })
  }

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  return (
    <motion.div
      animate={{x: 0, opacity: 1}}
      transition={{duration: 1, linear: [0.5, 0.71, 1, 1.5]}}
      initial={{x: -300, opacity: 0}}
    >
      <Box sx={{flexGrow: 1}}>
        <form onSubmit={onSubmit}>
          <Grid container columns={12}>
            {!matches && (
              <Grid
                item
                tablet={6}
                p={4}
                sx={{
                  background:
                    "linear-gradient(to right bottom, #36EAEF, #6B0AC9)",
                }}
              />
            )}
            <Grid item mobile={12} tablet={6} p={4} minHeight="100vh">
              <Stack direction="row" justifyContent="flex-end">
                <Link href="/sign-up">
                  <Typography variant="link">
                    Don&apos;t have an account ?
                  </Typography>
                </Link>
              </Stack>
              <Typography variant="h5" gutterBottom mt={5}>
                Sign in to JobPortal
              </Typography>
              <Stack direction="column" my={4}>
                <Typography variant="label" mb={2}>
                  Email
                </Typography>
                <TextField
                  sx={{
                    fieldset: {borderColor: "colors.darkBlue"},
                  }}
                  placeholder="Your email..."
                  name="email"
                  type="email"
                  onChange={onChangeInput}
                  value={formData.email}
                />
              </Stack>
              <Stack direction="column">
                <Typography variant="label" mb={2}>
                  Password
                </Typography>
                <TextField
                  sx={{
                    fieldset: {borderColor: "colors.darkBlue"},
                  }}
                  placeholder="Your password..."
                  name="password"
                  type={lock ? "password" : "text"}
                  onChange={onChangeInput}
                  value={formData.password}
                  InputProps={{
                    endAdornment: lock ? (
                      <HttpsOutlinedIcon
                        sx={{cursor: "pointer"}}
                        fontSize="small"
                        onClick={() => setLock(false)}
                      />
                    ) : (
                      <LockOpenIcon
                        sx={{cursor: "pointer"}}
                        fontSize="small"
                        onClick={() => setLock(true)}
                      />
                    ),
                  }}
                />
              </Stack>
              <Stack alignItems="center" mt={10}>
                <LoadingButton
                  variant="contained"
                  type="submit"
                  color="primary"
                  loading={isLoading}
                >
                  <Typography variant="white">Sign In</Typography>
                </LoadingButton>
              </Stack>
            </Grid>
          </Grid>
        </form>
      </Box>
    </motion.div>
  )
}

export default SignInPage
