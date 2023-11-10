import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

type CardProps = {
  isClickable?: boolean;
  image?: string;
  fullWidth?: boolean;
  buttons?: Array<{
    label: string;
    onClick: () => void;
  }>;
  title: string;
  text: string;
};
export const MediaCard = ({
  isClickable,
  image,
  fullWidth,
  buttons,
  title,
  text,
}: CardProps) => {
  debugger;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          sx={{ height: 140 }}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {buttons?.map((button) => (
          <Button key={button.label} size="small">
            {button.label}
          </Button>
        ))}
      </CardActions>
    </Card>
  );
};
