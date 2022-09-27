const axios = require("axios");

const addTwoNumbers = (a, b) => {
  return !a && !b ? 0 : a + b;
};

const makeSomeAPICall = async () => {
  try {
    const response = await axios.get(
      "https://codaisseur-coders-network.herokuapp.com/posts"
    );
    console.log(response.data.rows);
    return response.data.rows;
  } catch (e) {
    console.log("we broke the request", e.message);
    throw new Error("This api call broke");
  }
};

module.exports = { makeSomeAPICall, addTwoNumbers };
