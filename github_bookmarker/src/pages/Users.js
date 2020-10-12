import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import User from '../components/User';
import { connect } from "react-redux";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

 function Users({loading,error,users}) {
  const classes = useStyles();
  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Unable to display .</p>;
  if (users.length === 0) 
  return <div >No results</div>;
  return (

    <Container maxWidth="xl">
    
      <Grid container spacing={3} style={{padding: '15px'}}>
        {/* addBookMark = {props.addBookMark} */}
        {users.map((user) => (
          <User
            user={user}
           

          />
        ))}
      </Grid>
    </Container>
  );
  
}
const mapStateToProps = (state) => ({
  loading: state.usersDetails.loading,
  error: state.usersDetails.error,
  users: state.usersDetails.users
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);