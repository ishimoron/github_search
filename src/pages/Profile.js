import React, {useContext, useEffect, Fragment} from 'react'
import {GithubContext} from "../context/github/githubContext";
import {Link} from "react-router-dom";
import {Repos} from "../components/Repos";

export const Profile = ({match}) => {
    const {getUser, getRepos, loading, user, repos} = useContext(GithubContext)
    const urlName = match.params.name


    useEffect(() => {
        getUser(urlName)
        getRepos(urlName)
        // eslint-disable-next-line
    }, [])

    if (loading) {
        return <p className="text-center">Loading</p>
    }
    const {
        name,
        company,
        avatar_url,
        location,
        bio,
        blog,
        login,
        html_url,
        followers,
        public_repos,
        public_gists,
        following,
    } = user
    return (
        <Fragment>
            <Link to="/" className="btn btn-link">На главную</Link>
            <div className="card mb-4">
                <div className="card-body">
                    <div className="text-center">
                        <div className="text-center">
                            <img src={avatar_url} alt={name} className="img-fluid rounded float-center"/>
                            <h1>{name}</h1>
                            {location && <p>Местоположение: {location}</p>}
                        </div>
                        <div className="col container">
                            {
                                bio && <Fragment>
                                    <h3>BIO</h3>
                                    <p>{bio}</p>
                                </Fragment>
                            }
                            <a href={html_url}
                               className="btn btn-dark mb-3"
                               target="_blank"
                               rel="noopener noreferrer">
                                Открыть
                                профиль
                            </a>
                            <ul className="list-group mb-3">
                                {login && <li className="list-group-item">
                                    <strong className="mr-1">Username:</strong>{login}
                                </li>}
                                {company && <li className="list-group-item">
                                    <strong className="mr-1">Company:</strong>{company}
                                </li>}
                                {blog && <li className="list-group-item">
                                    <strong className="mr-1">Blog:</strong>{blog}
                                </li>}
                            </ul>
                            <div className="badge badge-primary mr-2">
                                Followers: {followers}
                            </div>
                            <div className="badge badge-primary mr-2">
                                Following: {following}
                            </div>
                            <div className="badge badge-success mr-2">
                                Repositories: {public_repos}
                            </div>
                            <div className="badge badge-info">
                                Gists: {public_gists}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Repos repos={repos} />
        </Fragment>
    )
}
