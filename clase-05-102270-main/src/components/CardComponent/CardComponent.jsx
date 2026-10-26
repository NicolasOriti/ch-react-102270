import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const CardComponent = ({ data }) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
          {data.name}
        </Typography>
        <Typography variant="h5" component="div">
          {data.username}
        </Typography>
        <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
          {data.email}
        </Typography>
        <Typography variant="body2">{data.address.city}</Typography>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
