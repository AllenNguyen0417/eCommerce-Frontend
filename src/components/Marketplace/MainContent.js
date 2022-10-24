import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Grid } from "@mui/material";

export function MainContent({ products }) {
  return (
    <Grid container spacing={3} p={10}>
      {products.map((item) => (
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="150"
                image={item.imageUrl}
                alt={item.productName}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  ${item.pricePerUnit}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.productDescription}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Add to cart
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
