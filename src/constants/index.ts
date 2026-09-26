export const MENU_OPTION_TYPES = {
    SQUARE_OF_TWO_DIGITS: 'SQUARE_OF_TWO_DIGITS',
    SQUARE_OF_THREE_DIGITS: 'SQUARE_OF_THREE_DIGITS'
}

export const MENU_OPTIONS: {
  id: string,
  name: string;
  description?: string;
}[] = [
  {
    id: MENU_OPTION_TYPES.SQUARE_OF_TWO_DIGITS,
    name: "Finding Square of two digit numbers",
  },
  {
    id: MENU_OPTION_TYPES.SQUARE_OF_THREE_DIGITS,
    name: "Finding Square of three digit numbers"
  }
];
