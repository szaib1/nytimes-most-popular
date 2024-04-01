import { Box, CircularProgress } from "@mui/material";

export const Loader = () => (
  <Box height='100vh' width='100vw' display='flex' alignItems='center' justifyContent='center' color='GrayText'>
    <CircularProgress size={80} color="inherit" />
  </Box>
)
