import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

function updateData(apiUrl, data) {
    const response = fetch(apiUrl, {
        method: 'PUT',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    return response;
}

const data = {
    "description": "Or claudioasv on web"
}

updateData(`${API}/products/235`, data)
    .then(response => response.json())
    .then(data => console.log(data))