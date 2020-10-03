
 <CardActionArea component="a" rel="nooliener noreferrer" href={bookMark.url} target="_blank">
 <Card className={classes.card}>
   <div className={classes.cardDetails}>
     <CardContent>
       <Typography component="h2" variant="h5">
       {bookMark.name}
       </Typography>
       <Typography variant="subtitle1" color="textSecondary">
       {bookMark.owner}
       </Typography>
       {/* <Typography variant="subtitle1" paragraph>
       {bookMark.description}
       </Typography> */}
       <Typography variant="subtitle1" color="primary">
         Continue reading...
       </Typography>
     </CardContent>
   </div>
   <Hidden xsDown>
     <CardMedia className={classes.cardMedia} image={bookMark.avatar}title={bookMark.name} />
   </Hidden>
 </Card>
</CardActionArea>
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '50%',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

export default function BookMarks({bookMark}) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={bookMark.avatar} />
        </ListItemAvatar>
        <ListItemText
          primary={bookMark.name}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
               {bookMark.owner}
              </Typography>
              {` — ${bookMark.description}`}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      </React.Fragment>

  );
}
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import BookMarks from './BookMarks';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '50%',
    backgroundColor: theme.palette.background.paper,
  }
}));

export default function BookMarksList({bookMarks}) {
  const classes = useStyles();
console.log(bookMarks);
  return (
    <List className={classes.root}>
        {bookMarks.map((i) => (
             <BookMarks bookMark ={i}/>
                // <img className="photo" src={i.avatar}></img>
              ))}
     
    </List>
  );
}
