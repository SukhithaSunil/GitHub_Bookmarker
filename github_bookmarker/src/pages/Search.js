import React from "react";
import { connect } from "react-redux";
import BookMarksList from "../components/BookMarksList";
import { fetchRepos } from "../actions/respoDetails_actions";
import {Link} from 'react-router-dom'

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
        <BookMarksList/>
        {/* {this.state.filteredData.map((i) => (
                // <img className="photo" src={i.avatar}></img>
                <li key ={i.id}><a rel="nooliener noreferrer" href={i.url} target="_blank">{i.name}{" "}{i.owner}</a></li>
              ))} */}
      </div>
    );
  };

  render() {
    return (
      <div className="searchForm">
        <form>
          <input
            placeholder="Search for..."
            value={this.state.query}
            onChange={this.handleInputChange}
          />
        </form>
        <button onClick={this.handleReposSearch}>go</button>
      
  <Link to="/bookmark" className="button">
      View bookmark
    </Link>
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
  fetchRepos
};

export default connect(mapStateToProps,mapDispatchToProps)(Search);
