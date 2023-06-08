import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
    } from "@mui/material";
import { Link } from "react-router-dom"

const ItemCard = ({item}) => {
  return (
    <Card sx={{ margin: "1px" }} >
              <CardMedia
                component="img"
                height="300"
                image={item.img}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
                <Typography variant="body2">
                  {item.price}
                </Typography>
              </CardContent>
              <CardActions style={{ display: "flex", justifyContent: "center" }}>
                <Link to={`/itemDetail/${item.id}`}>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{ textTransform: "none" }}
              >
                  Ver detalle
                  </Button>
                </Link>
              </CardActions>
  </Card>
  );
};

export default ItemCard