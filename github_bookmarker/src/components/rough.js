import React from "react";
import { connect } from "react-redux";
import BookMarksList from "../components/BookMarksList";
import ResultsModal from "../components/ResultsModal";

import { fetchRepos, fetchReposByName } from "../actions/respoDetails_actions";
import SearchBySelection from "../components/SearchBySelection";
import SearchRepo from "../components/SearchRepo";
import Grid from "@material-ui/core/Grid";
import { fetchUsers } from "../actions/gitUsers_actions";
import Users from "./Users";

class Search extends React.Component {
  state = {
    queryString: "",
    searchType: "repos",
    userId: "",
    open: false,
  };
  componentDidMount() {
    console.log("componentDidMount");
  }
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps");
    console.log(this.props.match.params.id);
    if (nextProps.match.params.id !== this.props.match.params.id) {
      //this.setState({ query: nextProps.match.params.id });
    this.props.fetchReposByName(nextProps.match.params.id);
    this.handleClickOpen();

    }
  }

  handleSearch = (query) => {
    this.setState({ queryString: query });
    console.log("handleSearch" + this.state.searchType);
    this.state.searchType === "repos"
      ? this.props.fetchRepos(query)
      : this.props.fetchUsers(query);
  };

  handleSearchBy = (searchBy) => {
    console.log("seraach by");

    this.setState({ searchType: searchBy });
  };

  renderPosts = () => {
    console.log("renderPosts");

    return (
      <React.Fragment>
        {this.state.searchType === "repos" ? <BookMarksList /> : <Users />}
        <ResultsModal
          handleClose={this.handleClose}
          open={this.state.open}
          name={this.state.query}
        />
        
      </React.Fragment>
    );
  };

  render() {
    return (
      <Grid
        container
        justify="center"
        alignItems="center"
        style={{ padding: "15px" }}
        direction={"row"}
      >
        <Grid
          item
          xs={8}
          align="center"
          style={{
            margin: "auto",
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <SearchRepo handleReposSearch={this.handleSearch} />
          <SearchBySelection handleSearchBy={this.handleSearchBy} />
        </Grid>
        <Grid item xs={12}>
          {this.renderPosts()}
        </Grid>
      </Grid>
    );
  }
}
const mapStateToProps = (state) => ({
  loading: state.reposDetails.loading,
  error: state.reposDetails.error,
  selectedRepository: state.reposDetails.selectedRepository,
});

const mapDispatchToProps = {
  fetchRepos,
  fetchUsers,
  fetchReposByName,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
