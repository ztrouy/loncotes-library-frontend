const _apiUrl = "/api/patrons";

export const getPatrons = () => {
    return fetch(_apiUrl).then(res => res.json());
};

export const getPatron = (id) => {
    return fetch(`${_apiUrl}/${id}`).then(res => res.json());
};

export const updatePatron = (patronUpdate) => {
    const putOptions = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(patronUpdate)
    };

    return fetch(`${_apiUrl}/${patronUpdate.id}`, putOptions);
};

export const deactivatePatron = (id) => {
    const putOptions = {
        method: "PUT"
    };

    return fetch(`${_apiUrl}/${id}/deactivate`, putOptions)
}

export const reactivatePatron = (id) => {
    const putOptions = {
        method: "PUT"
    };

    return fetch(`${_apiUrl}/${id}/reactivate`, putOptions)
}