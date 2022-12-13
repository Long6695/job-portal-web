import {
  Box,
  Button,
  Grid,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material"
import React, { useState } from "react"
import LockOpenIcon from "@mui/icons-material/LockOpen"
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined"
import Link from "next/link"
import { motion } from "framer-motion"
import { SignUpFormData } from "../../hooks/api/types/credentials"
import { useSignUp } from "../../hooks/api/useSignUp"
import { LoadingButton } from "@mui/lab"

const SignUpPage = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down("tablet"))

  const [lock, setLock] = useState(true)
  const [formData, setFormData] = useState<SignUpFormData>({
    email: "",
    password: "",
    confirmPassword: "",
  })
  const { mutate, isLoading } = useSignUp(setFormData)

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    mutate(formData)
  }

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  return (
    <motion.div
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, linear: [0.5, 0.71, 1, 1.5] }}
      initial={{ x: 300, opacity: 0 }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <form onSubmit={onSubmit}>
          <Grid container columns={12}>
            <Grid item mobile={12} tablet={6} p={4} minHeight="100vh">
              <Stack direction="row" justifyContent="flex-end">
                <Link href="/sign-in">
                  <Typography variant="link">Have an account ?</Typography>
                </Link>
              </Stack>
              <Typography variant="h5" gutterBottom mt={5}>
                Sign up to JobPortal
              </Typography>
              <Stack direction="column" my={4}>
                <Typography variant="label" mb={2}>
                  Email
                </Typography>
                <TextField
                  sx={{
                    fieldset: { borderColor: "colors.darkBlue" },
                  }}
                  placeholder="Your email..."
                  name="email"
                  type="email"
                  onChange={onChangeInput}
                />
              </Stack>
              <Stack direction="column" my={4}>
                <Typography variant="label" mb={2}>
                  Password
                </Typography>
                <TextField
                  sx={{
                    fieldset: { borderColor: "colors.darkBlue" },
                  }}
                  placeholder="Your password..."
                  name="password"
                  type={lock ? "password" : "text"}
                  onChange={onChangeInput}
                  InputProps={{
                    endAdornment: lock ? (
                      <HttpsOutlinedIcon
                        sx={{ cursor: "pointer" }}
                        fontSize="small"
                        onClick={() => setLock(false)}
                      />
                    ) : (
                      <LockOpenIcon
                        sx={{ cursor: "pointer" }}
                        fontSize="small"
                        onClick={() => setLock(true)}
                      />
                    ),
                  }}
                />
              </Stack>
              <Stack direction="column" my={4}>
                <Typography variant="label" mb={2}>
                  Confirm Password
                </Typography>
                <TextField
                  sx={{
                    fieldset: { borderColor: "colors.darkBlue" },
                  }}
                  placeholder="Your confirm password..."
                  name="confirmPassword"
                  type={lock ? "password" : "text"}
                  onChange={onChangeInput}
                  InputProps={{
                    endAdornment: lock ? (
                      <HttpsOutlinedIcon
                        sx={{ cursor: "pointer" }}
                        fontSize="small"
                        onClick={() => setLock(false)}
                      />
                    ) : (
                      <LockOpenIcon
                        sx={{ cursor: "pointer" }}
                        fontSize="small"
                        onClick={() => setLock(true)}
                      />
                    ),
                  }}
                />
              </Stack>
              <Stack alignItems="center" mt={10}>
                <LoadingButton
                  loading={isLoading}
                  variant="contained"
                  type="submit"
                  color="primary"
                >
                  <Typography variant="white">Sign Up</Typography>
                </LoadingButton>
              </Stack>
            </Grid>
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
          </Grid>
        </form>
      </Box>
    </motion.div>
  )
}

export default SignUpPage
