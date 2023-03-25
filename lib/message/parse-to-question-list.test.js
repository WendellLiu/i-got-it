import parseToQuestionList from "./parse-to-question-list";

describe("parseToQuestionList", () => {
  describe("happy path", () => {
    it("should return question list", () => {
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
});
