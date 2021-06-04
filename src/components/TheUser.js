import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const TheUser = ({ user }) => {
    const classes = useStyles();
    const userUrl = "https://www.taringa.net/" + user.username;
    return (
      
    <Card className={classes.root}>
          <CardActionArea>
              <a href={userUrl}>
        <CardMedia
          className={classes.media}
          image={user.avatar}
          title={user.username}
              />
             </a>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {user.username}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {user.message}
          </Typography>
        </CardContent>
      </CardActionArea> 
      
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default TheUser;
