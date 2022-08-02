export default function temp(state: any = [], action: any) {
  console.log(action);

  switch (action.type) {
    case "ADD_TEMP":
      return [...state, action.result];
    default:
      return state;
  }
}
