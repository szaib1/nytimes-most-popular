import { FC } from "react";
import { ArticleData } from "../interfacesTypes";
import { Box, Button, Card, CardActions, CardContent, Link, Tooltip, Typography } from "@mui/material";

export const Article: FC<ArticleData> = ({ data }) => {
  const { title, abstract, url } = data;

  return (
    <Card>
      <CardContent>
        <Tooltip title={title}>
          <Typography gutterBottom variant="h5" component="div" noWrap>
            {title}
          </Typography>
        </Tooltip>

        <Box sx={{ height: '80px', overflow: 'auto' }}>
          <Typography variant="body2" color="text.secondary">
            {abstract}
          </Typography>
        </Box>
      </CardContent>

      <CardActions>
        <Button component={Link} href={url} target="_blank" size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
}