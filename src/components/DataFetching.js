import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {  Badge, Button, Collapse } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'


function DataFetching() {
    const [repos, setRepos] = useState([]);

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

    }, []);
    console.log(repos);

    const [open, setOpen] = useState(false);
    return (
        <div className="repos-container">
            <div>{repos.map((repo) =>
                <Card key={repo.id}>
                    <div><Card.Title><p className="repo-name">{repo.full_name}</p>
                    </Card.Title>
                        <p className="repo-url">{repo.url}</p>
                        <Button
                            onClick={() => setOpen(!open)}
                            aria-controls="example-collapse-text"
                            aria-expanded={open}>Click for more description
                        </Button>
                            <Collapse in={open}>
                        <p className="repo-desc">{repo.description}</p></Collapse></div></Card>)} )}
         </div>
            </div>
    )
}

export default DataFetching