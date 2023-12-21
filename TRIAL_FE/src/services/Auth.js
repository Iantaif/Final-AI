export default class Auth {

    static async isLoggedIn() {
        const url = process.env.REACT_APP_SERVER_HOST + '/auth/check/';
        const response = await fetch(url,
            {
                method: "GET",
                credentials: 'include'
            });
        return response.status === 200
    }

    static async logOut() {
        const url = process.env.REACT_APP_SERVER_HOST + '/auth/logout/';
        const response = await fetch(url,
            {
                method: "POST",
                credentials: 'include'
            });
        return response.status === 200
    }
}