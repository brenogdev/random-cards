import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

type MediaCardProps = {
  image: string;
  alt: string;
  title: string;
  description: string;
};

export const MediaCard = (props: MediaCardProps) => {
  const { image, alt, title, description } = props;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="140" image={image} alt={alt} />
      <CardContent>
        <Box display="flex">
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
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
