/*
    Made by Monnapse
    4/15/2024
*/

const RequestMethods = Object.freeze({
    POST: "POST",
    GET: "GET"
})

function NewRequest(url, method, headers) {
    const request = new Request(url, {
      method: method,
      body: headers || null,
    });

    fetch(request)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error("Something went wrong on API server!");
      }
    })
    .then((response) => {
      console.debug(response);
      // …
    })
    .catch((error) => {
      console.error(error);
    });
}