
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { AiFillStar } from 'react-icons/ai'
import { AiOutlineStar } from 'react-icons/ai'


function RepoTable() {
    
    const [repos, setRepos] = useState([]);
    const [like, setLike] = useState(<AiOutlineStar />);

    useEffect(() => {
        axios
            .get("https://api.github.com/search/repositories?q=created:%3E2019-01-10&sort=stars")
            .then((res) => {
                console.log(res);
                setRepos(res.data.items)
            })
            .catch(err => {
                console.log(err)
            });

    }, [])


    return (
        <div>
            <Table striped bordered hover variant="light">
                <thead>
                    <tr>
                        <th>Rating</th>
                        <th>Full name and name of repository</th>
                        <th>Git Link</th>
                        <th>Description</th>
                        <th>Favorites</th>
                    </tr>
                </thead>
                <tbody>
                    {repos.map((repo) =>
                        <tr key={repo.id}>
                            <td>{repo.stargazers_count}</td>
                            <td>{repo.full_name}</td>
                            <td>{repo.url}</td>
                            <td>{repo.description}</td>
                            <td>
                                {like && <AiFillStar></AiFillStar>}
                                <button onClick={() => setLike(like => !like)} />
                            </td>
                        </tr>
                    )};
                </tbody>
            </Table>
        </div>);
}





export default RepoTable






