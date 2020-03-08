/* state consiste no state anterior da action ser executada, action sao os dados que
o reducer acaba de receber atraves do evento disparado */
export default function cart(state = [], action) {
  console.log(state);
  switch (action.type) {
    case 'ADD_TO_CART':
      return [
        ...state,
        {
          ...action.product,
          amount: 1,
        },
      ];

    default:
      return state;
  }
}
