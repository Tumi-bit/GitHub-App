
import axios from 'axios'
import React, { useEffect, useState } from 'react'

        function Like_action() {
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

            }, [])
        }

export default Like_action