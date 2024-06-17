import { jwtDecode } from 'jwt-decode'

export const tokenExpired = (token) => {
    if (!token) return true;
    try {
        const decodedToken = jwtDecode(token);
        const currenTime = Date.now() /1000;
        return decodedToken.exp < currenTime;
    } catch (err) {
        console.log(err)
        return true;
    }
}