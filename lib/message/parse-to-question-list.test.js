import parseToQuestionList from "./parse-to-question-list";

describe("parseToQuestionList", () => {
  describe("happy path", () => {
    it("should return the question list", () => {
      const messageContent =
        "1. question 1?\n2. question 2?\n3. question 3?\n4. question 4?\n5. question 5?";

      expect(parseToQuestionList(messageContent)).toEqual([
        "question 1?",
        "question 2?",
        "question 3?",
        "question 4?",
        "question 5?",
      ]);
    });
  });

  describe("partially invalid", () => {
    it("should include the valid one", () => {
      const messageContent =
        "1. question 1?\nquestion 2?\n3. question 3?\n4. question 4?\n5. question 5?";

      expect(parseToQuestionList(messageContent)).toEqual([
        "question 1?",
        "question 3?",
        "question 4?",
        "question 5?",
      ]);
    });
  });

  describe("one line", () => {
    it("should return the question list", () => {
      const messageContent = "1. question 1?";

      expect(parseToQuestionList(messageContent)).toEqual(["question 1?"]);
    });
  });

  describe("one invalid line", () => {
    it("should return the empty list", () => {
      const messageContent = "question 1?";

      expect(parseToQuestionList(messageContent)).toEqual([]);
    });
  });

  describe("empty content", () => {
    it("should return the empty list", () => {
      const messageContent = "";

      expect(parseToQuestionList(messageContent)).toEqual([]);
    });
  });
});
