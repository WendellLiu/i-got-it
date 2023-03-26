import {
  compose,
  split,
  match,
  map,
  path,
  filter,
  isNil,
  complement,
} from "ramda";

const parseToQuestionList = compose(
  filter(complement(isNil)),
  map(compose(path([1]), match(/^\d+\.\s(.+)$/))),
  split("\n")
);

export default parseToQuestionList;
