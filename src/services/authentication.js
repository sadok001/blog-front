import axios from "axios";

const login = async (credentials) => {
    const {data} = await axios.post('http://localhost:8000/api/login', credentials);
    localStorage.setItem('token', data.token);
    localStorage.setItem('user_id', data.user.id);
    localStorage.setItem('user_name', data.user.name);
    window.location = "/";
}

const register = async(user) => {
    const {data} = await axios.post('http://localhost:8000/api/register', user);
    localStorage.setItem('token', data.token);
    localStorage.setItem('user_id', data.user.id);
    localStorage.setItem('user_name', data.user.name);
    window.location = "/"
}

const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user_id');
    localStorage.removeItem('user_name');

    window.location = '/login'
}

export {
    login,
    register,
    logout,
}