import { Box, Container, Grid, MenuItem, Select, Typography } from '@mui/material'
import { useQuery } from 'react-query'
import { ArticleProps } from '../interfacesTypes'
import { Article } from './Article'
import { useState } from 'react'
import { Loader } from './Loader'

export const ArticleList = () => {
  const [page, setPage] = useState(1);

  const fetchArticles = (page: number) => fetch(`https://api.nytimes.com/svc/mostpopular/v2/viewed/${page}.json?api-key=4N7B9DRbABcEWOukCSgTvBuN859a4qin`).then((res) => res.json())

  const {
    isLoading,
    error,
    data,
    isFetching
  } = useQuery({
    queryKey: ['articles', page],
    queryFn: () => fetchArticles(page),
    keepPreviousData: true
  })

  if (isLoading || isFetching) return <Loader />

  if (error) return 'An error has occurred: ' + error

  const { results } = data

  const handleChange = (event: any) => {
    const { target: { value } } = event;

    setPage(value)
  }

  return (
    <Container maxWidth="xl" sx={{ pb: 5 }}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography sx={{ textAlign: 'center', pt: 2, pb: 4 }} variant='h1'>NY Articles</Typography>

        <Select value={page} onChange={handleChange}>
          <MenuItem value={1}>One</MenuItem>
          <MenuItem value={7}>Seven</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </Box>

      <Grid container spacing={2}>
        {results.map((result: ArticleProps) => (
          <Grid item lg={4} md={4} key={result.asset_id}>
            <Article data={result} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}