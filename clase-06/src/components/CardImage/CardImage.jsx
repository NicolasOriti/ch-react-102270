import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

const CardImage = ({ data }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" image={data.hdurl} alt={data.title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.title} - {data.date}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardImage;
