
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import Rating from '@mui/material/Rating';

export default function CartCard({img,title, price, prevPrice, score}) {
  const {t} = useTranslation();

  return (
    <Card sx={{ display: 'flex' }}>
    <CardMedia
        component="img"
        sx={{ width: "40%" }}
        image={img}
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent>
          <Typography component="div" variant="h5">
            {title}
          </Typography>
          <Rating name="read-only" value={score} readOnly />
            <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">{score}</span>
          <Typography variant="subtitle1" component="div">
           {t('prixx')} : <del className='text-red-700 subpixel-antialiased'>{prevPrice}</del> {price}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}
