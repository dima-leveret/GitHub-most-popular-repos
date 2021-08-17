import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRepos } from "../actions/repos";
import Repo from "./repo/Repo";

import "./main.scss";
import { setCurrentPage } from "../../reducers/reposReducer";
import { createtPages } from "../../utils/pagesCreator";
import { Redirect } from "react-router";

const Main = () => {
  const dispatch = useDispatch();

  const repos = useSelector((state) => state.repos.items);
  const isFetching = useSelector((state) => state.repos.isFetching);
  const currentPage = useSelector((state) => state.repos.currentPage);
  const totalCount = useSelector((state) => state.repos.totalCount);
  const perPage = useSelector((state) => state.repos.perPage);
  const isFetchError = useSelector((state) => state.repos.isFetchError);

  const [searchValue, setSearchValue] = useState("");

  const pagesCount = Math.ceil(totalCount, perPage)

  const pages = [];

  createtPages(pages, pagesCount, currentPage)

  useEffect(() => {
    dispatch(getRepos(searchValue, currentPage, perPage));
  }, [currentPage]);

  function searchHandler() {
      dispatch(setCurrentPage(1))
    dispatch(getRepos(searchValue, currentPage, perPage));
  }

  if(isFetchError) {
    return <Redirect to="/error" />
  }

  return (
    <div>
      <div className="search">
        <input
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
          type="text"
          placeholder="Input repo name"
          className="search-input"
        />
        <button onClick={() => searchHandler()} className="search-btn">
          Search
        </button>
      </div>

      {isFetching === false ? (
        repos.map((repo) => <Repo repo={repo} key={repo.id} />)
      ) : (
        <div className="fetching"></div>
      )}

      <div className="pages">
        {pages.map((page, index) => (
          <span
            key={index}
            className={currentPage == page ? "current-page" : "page"}
            onClick={() => dispatch(setCurrentPage(page))}
          >
            {page}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Main;
