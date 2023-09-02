const request = require("request");

const fetchBreedDescription = function(breedName, callback) {
  const apiUrl = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(apiUrl, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else if (response.statusCode !== 200) {
      callback(`Request failed with status code: ${response.statusCode}`, null);
    } else {
      const breedData = JSON.parse(body);

      if (Array.isArray(breedData) && breedData.length > 0) {
        const firstBreed = breedData[0];
        callback(null, firstBreed.description);
      } else {
        callback(`No breed data found for ${breedName}`, null);
      }
    }
  });
};

module.exports = { fetchBreedDescription };
