import { useEffect, useState } from 'react'


export const usePosts = () => {

    const [ posts, setPosts ] = useState([]);

    try {
        useEffect(() => {
            fetch('http://localhost:5000/api/post/getPosts')
                .then((response) => response.json())
                .then((data) => setPosts(data))
                .catch((err) => console.error('Error: ', err))
        }, []);

        return posts;
    } catch (err) {
        console.error(err);
    }

}