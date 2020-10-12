import React from "react";
import { connect } from "react-redux";
import BookMarksList from "../components/BookMarksList";
import { fetchRepos } from "../actions/respoDetails_actions";
import { Link } from "react-router-dom";
import SearchBar from "material-ui-search-bar";
import SearchBySelection from "../components/SearchBySelection";
//import SearchBar from '../components/SearchBar';

class Search extends React.Component {
  state = {
    query: "",
  };

  handleReposSearch = () => {
    var repos = this.state.query;
    console.log(this.props);
    this.props.fetchRepos(repos);
  };

  handleInputChange = (event) => {
    const query = event.target.value;
    this.setState({
      query: query,
    });
  };
  renderPosts = () => {
    console.log(this.props);
    if (this.props.loading) return <p>Loading posts...</p>;
    if (this.props.error) return <p>Unable to display posts.</p>;
    return (
      <div>
        <BookMarksList />
      </div>
    );
  };

  render() {
    return (
      <div className="search">
        <SearchBySelection />
        <SearchBar
          style={{
            width: "60%",
            top: 80,
            position: "sticky",
            alignItems: "center",
            marginbottom: 16,
            margintop: 16,
            margin: "auto",
          }}
          value={this.state.query}
          onChange={(newValue) => this.setState({ query: newValue })}
          onRequestSearch={this.handleReposSearch}
        />
        {this.renderPosts()}
      </div>
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
