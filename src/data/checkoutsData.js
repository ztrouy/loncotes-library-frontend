const _apiUrl = "/api/checkouts";

export const getCheckouts = () => {
    return fetch(_apiUrl).then(res => res.json());
};

export const getOverdueCheckouts = () => {
    return fetch(`${_apiUrl}/overdue`).then(res => res.json());
};

export const returnCheckout = (id) => {
    const putOptions = {method: "PUT"}

    return fetch(`${_apiUrl}/${id}/return`, putOptions)
}

export const createCheckout = (checkout) => {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(checkout)
    }

    return fetch(_apiUrl, postOptions).then(res => res.json());
};