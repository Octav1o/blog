import { useEffect, useState } from 'react'


export const useGetUserPosts = () => {

    const [ posts, setPosts ] = useState([]);

    try {
        useEffect(() => {
            const token = localStorage.getItem('accessToken');
            fetch('http://localhost:5000/api/post/getUserPosts', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
                .then((response) => response.json())
                .then((data) => setPosts(data))
                .catch((err) => console.error('Error: ', err))
        }, []);

        return posts;
    } catch (err) {
        console.error(err);
    }

}