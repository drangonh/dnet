import "isomorphic-fetch"

Number.prototype.toFixed = function (s) {
    return (parseInt(this * Math.pow(10, s) + 0.5) / Math.pow(10, s)).toString();
}
const baseUrl = "http://localhost:3000";

/*fetch请求*/
export function get(url, params) {
    return new Promise((resolve, reject) => {
        console.log(baseUrl + url + params)
        fetch(baseUrl + url + params, {
            method: 'GET',
            credentials: "include",
            headers: {
                "Content-Type": "application/json;charset=UTF-8"
            },
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    reject({status: response.status})
                }
            })
            .then((response) => {
                resolve(response);
            })
            .catch((err) => {
                reject({status: -1});
            })
    })
}

export function post(url, formData) {
    return new Promise(function (resolve, reject) {
        console.log(baseUrl + url)
        fetch(baseUrl + url, {
            method: 'post',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
            },
            body: formData,
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    reject({status: response.status})
                }
            })
            .then((response) => {
                console.log(response);
                resolve(response);
            })
            .catch((err) => {
                reject({status: -1});
            })
    })
}