import { QueryClient, QueryClientProvider } from 'react-query'
import { ArticleList } from './components/ArticleList'
import { ThemeProvider } from '@mui/material'
import customTheme from './theme'
// Create a client
const queryClient = new QueryClient()

const App = () => {
  return (
    <ThemeProvider theme={customTheme}>
      {/* Provide the client to your App */}
      <QueryClientProvider client={queryClient}>
        <ArticleList />
      </QueryClientProvider>
    </ThemeProvider>
  )
}

export default App
