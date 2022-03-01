import clienteAxios from "../config/axios";




export const startLogin = async (email, password) => {

    try {

        const { data } = await clienteAxios.post('/auth/login', { email, password });
        localStorage.setItem('token', data.token);
        
        return data;

    } catch (error) {

        console.log({ error: error });
    }
}