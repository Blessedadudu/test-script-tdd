const fetch = require('node-fetch');

// Promise
const getPeoplePromise = (fetch) => {
  return fetch('http://swapi.py4e.com/api/people')
    .then(response => response.json())
    .then(data => {
      return {
        count: data.count,
        results: data.results
      }
    })
}

// Async
const getPeople = async (fetch) => {
  const getRequest = await fetch('http://swapi.py4e.com/api/people');
  const data =  await getRequest.json();
  // console.log(data);
  return {
    count: data.count,
    results: data.results
  };
}


module.exports = {
    getPeople,
    getPeoplePromise
  }
  