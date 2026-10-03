import type { ConfigInterface } from "../types";

export const SQUARE_OF_NUMBER_CONFIG: ConfigInterface[] = [
  {
    id: "number_of_ques",
    name: "numberOfQues",
    type: "number",
    label: "Number of questions",
    defaultValue: "10",
  },
  {
    id: "from_limit",
    name: "fromLimit",
    type: "number",
    label: "Numbers starting from",
    hint: "Used to configure the starting range of numers, like starting from 10, 100, etc..",
    defaultValue: 10,
  },
  {
    id: "to_limit",
    name: "toLimit",
    type: "number",
    label: "Numbers ending to",
    hint: "Used to configure the ending range of numers",
    defaultValue: 100,
  },
];

export const MULTIPLICATION_OF_NUMBERS_CONFIG: ConfigInterface[] = [
  {
    id: "number_of_ques",
    name: "numberOfQues",
    type: "number",
    label: "Number of questions",
    defaultValue: "10",
  },
  {
    id: "from_limit_of_first_num",
    name: "fromLimitOfFirstNum",
    type: "number",
    label: "Staring limit of first number",
    hint: "Used to configure the starting range of numers, like starting from 10, 100, etc..",
    defaultValue: 10,
  },
  {
    id: "to_limit_of_first_num",
    name: "toLimitOfFirstNum",
    type: "number",
    label: "Ending limit of first number",
    hint: "Used to configure the ending range of numers",
    defaultValue: 100,
  },
  {
    id: "from_limit_of_second_num",
    name: "fromLimitOfSecondNum",
    type: "number",
    label: "Staring limit of second number",
    hint: "Used to configure the starting range of numers, like starting from 10, 100, etc..",
    defaultValue: 10,
  },
  {
    id: "to_limit_of_second_num",
    name: "toLimitOfSecondNum",
    type: "number",
    label: "Ending limit of second number",
    hint: "Used to configure the ending range of numers",
    defaultValue: 100,
  },
];

export const ADDITION_OF_NUMBERS_CONFIG: ConfigInterface[] = [
  {
    id: "number_of_ques",
    name: "numberOfQues",
    type: "number",
    label: "Number of questions",
    defaultValue: "10",
  },
  {
    id: "from_limit_of_first_num",
    name: "fromLimitOfFirstNum",
    type: "number",
    label: "Staring limit of first number",
    hint: "Used to configure the starting range of numbers, like starting from 10, 100, etc..",
    defaultValue: 10,
  },
  {
    id: "to_limit_of_first_num",
    name: "toLimitOfFirstNum",
    type: "number",
    label: "Ending limit of first number",
    hint: "Used to configure the ending range of numbers",
    defaultValue: 100,
  },
  {
    id: "from_limit_of_second_num",
    name: "fromLimitOfSecondNum",
    type: "number",
    label: "Staring limit of second number",
    hint: "Used to configure the starting range of numbers, like starting from 10, 100, etc..",
    defaultValue: 10,
  },
  {
    id: "to_limit_of_second_num",
    name: "toLimitOfSecondNum",
    type: "number",
    label: "Ending limit of second number",
    hint: "Used to configure the ending range of numbers",
    defaultValue: 100,
  },
];
