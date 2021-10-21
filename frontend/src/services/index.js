const baseUrl = 'http://localhost:3333';

export const POST = (url, payload) => fetch(`${baseUrl}/${url}`, {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': JSON.parse(sessionStorage.getItem('token'))
  },
  body: JSON.stringify(payload)
})
.then(response => response);

export const GET = (url) => fetch(`${baseUrl}/${url}`, {
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': JSON.parse(sessionStorage.getItem('token'))
  }
})
.then(response => response);

export const DELETE = (url) => fetch(`${baseUrl}/${url}`, {
  method: 'DELETE',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': JSON.parse(sessionStorage.getItem('token'))
  }
})
.then(response => response);;

export const PUT = (url, payload) => fetch(`${baseUrl}/${url}`, {
  method: 'PUT',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': JSON.parse(sessionStorage.getItem('token'))
  },
  body: JSON.stringify(payload)
});