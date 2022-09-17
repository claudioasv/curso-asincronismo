import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

function updateData(apiUrl) {
    const response = fetch(apiUrl, {
        method: 'DELETE',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-type': 'application/json',
        },
    });
    return response;
}

updateData(`${API}/products/236`)
    .then(response => response.json())
    .then(data => console.log(data))