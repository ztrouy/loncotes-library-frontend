const _apiUrl = "/api/patrons";

export const getPatrons = () => {
    return fetch(_apiUrl).then(res => res.json());
};