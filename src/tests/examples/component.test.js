const renderGreeting = require("../../assets/js/testExamples/component")

describe("testing component render", () => {
    test("match the snapshot", () => {
      const output = renderGreeting('FED26');
      expect(output).toMatchSnapshot();
    });
  });