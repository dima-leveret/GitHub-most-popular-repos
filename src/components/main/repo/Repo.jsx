import React from "react";
import { NavLink } from "react-router-dom";
import "./repo.scss";


const Repo = (props) => {

    const repo = props.repo

    return (
        <div className="repo" >
            <div className="repo-header">
                <div className="repo-header-name">
                    <NavLink to={`/card/${repo.owner.login}/${repo.name}`} >
                        <img className="repo-header-avatar" src={repo.owner.avatar_url} alt="repo-owner-avatar" /> {repo.name}
                    </NavLink> 
                </div>
                <div className="repo-header-stars"> Stars: {repo.stargazers_count} </div>
            </div>
            <div className="repo-last-commit"> Update date: {repo.updated_at} </div>
            <a target="_blank" href={repo.html_url} className="repo-link"> Repo link: {repo.html_url} </a>
        </div>
    );
};

export default Repo;