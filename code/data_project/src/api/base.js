
export const api = (url) => {

    const baseUrl = "http://192.168.94.112:5000";
    const fetchUrl = baseUrl + url

    return new Promise((resolve, reject) => {
        fetch(fetchUrl)
            .then((res) => {
                resolve(res.json());
            })
            .catch((err) => {
                reject(err);
            });
    });
};