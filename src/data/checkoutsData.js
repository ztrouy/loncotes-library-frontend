const _apiUrl = "/api/checkouts";

export const getCheckouts = () => {
    return fetch(`${_apiUrl}/overdue`).then(res => res.json());
};

export const returnCheckout = (id) => {
    const putOptions = {method: "PUT"}

    return fetch(`${_apiUrl}/${id}/return`, putOptions).then(res => res.json())
}