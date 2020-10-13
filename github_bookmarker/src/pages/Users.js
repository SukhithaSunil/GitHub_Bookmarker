import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Skeltons from "../UI/Skeltons"
import User from "../components/User";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { useSnackbar } from 'notistack';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function Users({ loading, error, users }) {
  const classes = useStyles();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  if (error) return  enqueueSnackbar('Something went wrong',{ variant:'error'});
  return (
    <Container maxWidth="xl">
      <Grid container spacing={3} style={{ padding: "15px" }}>
        {(loading ? Array.from(new Array(15)) : users).map((item) => {
          if (item) return <User user={item} />
          else
            return (
            <Skeltons/>
            )
        })}
      </Grid>
    </Container>
  )
}
const mapStateToProps = (state) => ({
  loading: state.usersDetails.loading,
  error: state.usersDetails.error,
  users: state.usersDetails.users,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
