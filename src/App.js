import React, { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import List from "./components/List";
import { searchQuery } from "./api/hackerNews";
import { connect } from "react-redux";
import { addQuery } from "./redux/actionCreators";

function App({ queries, addQuery }) {
  const [queryResults, setQueryResults] = useState([]);

  const handleQuerySubmit = async query => {
    const response = await searchQuery(query);
    const results = response.hits
      .filter(hit => hit.title)
      .map(hit => (hit.title ? hit.title : null));

    setQueryResults(results);
    addQuery(query);
  };

  return (
    <div className="App">
      <h1>RTS Labs Coding Exercise</h1>
      <SearchBar
        onQuery={handleQuerySubmit}
        placeholder="Search Hacker News..."
      />
      <h1>Results</h1>
      <List items={queryResults} />
      <h1>Previous Queries</h1>
      <List items={queries} />
    </div>
  );
}

const mapStateToProps = state => {
  const queries = state.queries;

  return { queries };
};

const mapDispatchToProps = { addQuery };

export default connect(mapStateToProps, mapDispatchToProps)(App);
