import React, {Fragment, useContext} from 'react'
import {Search} from '../components/Search'
import {Card} from '../components/Card'
import {GithubContext} from '../context/github/githubContext'
import startImage from '../assets/img/startImage.jpg'

export const Home = () => {
    const {loading, users} = useContext(GithubContext)


    return (
        <Fragment>
            <Search/>
            {users.length ? (
                <div className="row">
                    {loading
                        ? <p className="text-center">Загрузка...</p>
                        : users.map(user => (
                            <div className="col-sm-4 mb-4" key={user.id}>
                                <Card user={user}/>
                            </div>
                        ))
                    }
                </div>
            ) : (
                <div className="text-center col-sm-12 container-fluid">
                    <img src={startImage} alt="" className="rounded img-fluid" style={{width: "50%"}}/>

                </div>
            )

            }

        </Fragment>
    )
}
