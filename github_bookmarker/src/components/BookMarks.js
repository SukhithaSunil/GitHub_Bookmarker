import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Tooltip from "@material-ui/core/Tooltip";
import CardContent from "@material-ui/core/CardContent";

import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import Link from "@material-ui/core/Link";
import FavoriteIcon from "@material-ui/icons/Favorite";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    // minHeight: 300,
    // maxHeight:400
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
    height: 200,
  },
  root: {
    maxWidth: 400,
  },
  small: {
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  bookmarked: {
    color: 'red',
  },
  notBookmarked: {
    color: 'silver',
  },
}));

export default function BookMarks(props) {
  const bookMark = props.bookmark;
  const classes = useStyles();
  //console.log(bookMark);

  const handleToggle = (bookMark) =>{
    console.log("clicked");
    bookMark.saved ? props.handleUnSelect(bookMark): props.handleSelect(bookMark)   ;
  
  }

  return (
    <Grid item xs={12} sm ={6} md={4} lg={4} xl={3}>
      {/* //className={classes.root} */}
      <Card >
        <CardHeader
          avatar={
            <Avatar
              aria-label={bookMark.owner}
              className={classes.small}
              src={bookMark.avatar}
            ></Avatar>
          }
          action={
            <Tooltip title="add Bookmark">
            <IconButton aria-label="add to bookMarks" onClick={()=>handleToggle(bookMark)}>
                {bookMark.saved ? <FavoriteIcon className={classes.bookmarked}/> :<FavoriteIcon className={classes.notBookmarked}/>}
            </IconButton>
            </Tooltip>
          }
          title={
            <Typography component="h2" variant="h5">
              {(bookMark.customizedName) ? bookMark.customizedName : bookMark.name}
            </Typography>
          }
          subheader={
            <Typography variant="subtitle1" color="textSecondary">
              {bookMark.owner}
            </Typography>
          }
        />

        <CardContent>
          <Typography variant="subtitle1" paragraph noWrap gutterBottom >
            {bookMark.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Link
            rel="nooliener noreferrer"
            href={bookMark.url}
            target="_blank"
            component="a"
            variant="subtitle1"
            color="primary"
          >
            Learn More
          </Link>
        </CardActions>
      </Card>
    </Grid>
  )
}

BookMarks.propTypes = {
  post: PropTypes.object,
};
