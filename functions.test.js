const { addTwoNumbers, makeSomeAPICall } = require("./functions");

// mock a library
const axios = require("axios");
jest.mock("axios");

// Faking axios
const fakeResponse = {
  data: {
    rows: [
      { id: 1, title: "testArticle" },
      { id: 3, title: "testArticle" },
      { id: 3, title: "testArticle" },
    ],
  },
};

describe("#addTwoNumbers", () => {
  test("1 + 1 should be 2", () => {
    const result = addTwoNumbers(1, 1);
    expect(result).toBe(2);
  });

  test("1 + 1 should not be 5", () => {
    const result = addTwoNumbers(1, 1);
    // expect (value)
    // .toBe => matchers from Jest
    expect(result).not.toBe(5);
  });

  test("undefined + undefined should return 0", () => {
    const result = addTwoNumbers(undefined, undefined);
    expect(result).toEqual(0);
  });
});

describe("#makeAnAPICall", () => {
  test("When called should make an API call and return an array of objects", async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve(fakeResponse));
    const rows = await makeSomeAPICall();
    expect(rows).toHaveLength(3);
    expect(rows[0].id).toBe(1);
  });

  test("Axios failed", async () => {
    axios.get.mockImplementationOnce(() => Promise.reject("400 bad request"));
    await expect(makeSomeAPICall()).rejects.toThrow(
      Error("This api call broke")
    );
  });
});
