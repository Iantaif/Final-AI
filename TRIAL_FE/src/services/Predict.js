export default class Predict {
    static async getMajors(answer) {
        const url = process.env.REACT_APP_SERVER_HOST + '/predict/majors/';
        const response = await fetch(url,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    answer: answer
                }),
                credentials: 'include'
            });
        return await response.json();
    }
}