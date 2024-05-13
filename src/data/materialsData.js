const _apiUrl = "/api/materials";

export const getMaterials = (params = null) => {
  if (params != null) {
    let query = []
    
    if (params.materialTypeId > 0) {
      query.push(`materialTypeId=${params.materialTypeId}`)
    }
    if (params.genreId > 0) {
      query.push(`genreId=${params.genreId}`)
    }

    const queryParam = query.join("&")
    return fetch(`${_apiUrl}?${queryParam}`).then(res => res.json())
  }
  
  return fetch(_apiUrl).then((r) => r.json());
};

//export a function here that gets a ticket by id
export const getMaterial = (id) => {
  return fetch(`${_apiUrl}/${id}`).then((r) => r.json());
};

export const getAvailableMaterials = () => {
  return fetch(`${_apiUrl}/available`).then(res => res.json());
};

export const createMaterial = (material) => {
  return fetch(_apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(material),
  }).then((res) => res.json());
};

export const removeMaterial = (id) => {
  const deleteOptions = {method: "DELETE"}

  return fetch(`${_apiUrl}/${id}`, deleteOptions).then(res => res.json())
}