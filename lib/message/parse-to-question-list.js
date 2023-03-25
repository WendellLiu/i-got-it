import { compose, split, match, map, path } from "ramda";

const parseToQuestionList = compose(
  map(compose(path([1]), match(/^\d\.\s(.+)$/))),
  split("\n")
);

export default parseToQuestionList;
