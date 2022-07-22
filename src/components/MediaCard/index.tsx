import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

type MediaCardProps = {
  image: string;
  alt: string;
  title: string;
  description?: string;
  randomNumber?: number;
};

export const MediaCard = (props: MediaCardProps) => {
  const { image, alt, title, description, randomNumber } = props;

  return (
    <Card sx={{ maxWidth: 300, maxHeight: 300 }}>
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        textTransform="capitalize"
        textAlign="end"
        textOverflow="ellipsis"
      >
        {randomNumber} pontos
      </Typography>
      <CardMedia component="img" height="200" image={image} alt={alt} />
      <CardContent>
        <Box display="flex">
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            textTransform="capitalize"
            textAlign="center"
            textOverflow="ellipsis"
          >
            {title}
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};
