const request = require("request");

const breedName = "Siberian"; // Specify the breed you want to search for

const apiUrl = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error("Error:", error);
  } else if (response.statusCode !== 200) {
    console.error("Request failed with status code:", response.statusCode);
  } else {
    const breedData = JSON.parse(body);

    if (Array.isArray(breedData) && breedData.length > 0) {
      const firstBreed = breedData[0];
      console.log("Description:", firstBreed.description);
    } else {
      console.log("No breed data found for", breedName);
    }
  }
});
