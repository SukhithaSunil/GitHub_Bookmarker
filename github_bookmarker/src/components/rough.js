import React from "react";
import { connect } from "react-redux";
import BookMarksList from "../components/BookMarksList";
import { fetchRepos,fetchReposByName } from "../actions/respoDetails_actions";
import SearchBySelection from "../components/SearchBySelection";
import SearchRepo from "../components/SearchRepo";
import Grid from "@material-ui/core/Grid";
import { fetchUsers } from "../actions/gitUsers_actions";
import Users from './Users';

class Search extends React.Component {
 
 

  state = {
    searchType: "repos",
  };
  

  handleReposSearch = (query) => {
    console.log(query);
    this.props.fetchRepos(query);
  };

  handleSearchBy = (searchBy) => {
    console.log("seraach by");

    this.setState({ searchType: searchBy });
  };

  handleSearch = (query) => {
    console.log("handleSearch" + this.state.searchType);

    this.state.searchType === "repos"
      ? this.props.fetchRepos(query)
      : this.props.fetchUsers(query);
  };

  renderPosts = () => {

    

    return (
      <div>
        {(this.state.searchType === "repos" )
      ? <BookMarksList />
      : <Users />}
      </div>
    );
  };

  render() {
    return (
      <Grid container justify="center" alignItems="center" style={{ padding: "15px" }}>
         <Grid item xs={8} align = "center" > <SearchRepo handleReposSearch={this.handleSearch} /></Grid>
         <Grid item xs={4}> <SearchBySelection handleSearchBy={this.handleSearchBy} /></Grid>

       
        {this.renderPosts()}
      </Grid>
    );
  }
}
const mapStateToProps = () => ({
 

});

const mapDispatchToProps = {
  fetchRepos,
  fetchUsers,
  fetchReposByName
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
