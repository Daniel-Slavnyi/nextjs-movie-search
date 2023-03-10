import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CardOfMovie({movie:{Title,Year,Poster}}) {
  return (
    <Card sx={{ maxWidth: 345, height: "100%", mt: 6 }}>
      <CardMedia
        sx={{ height: '500px' }}
        image={Poster}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Title: {Title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Year: {Year}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{}}>Details</Button>
      </CardActions>
    </Card>
  );
}