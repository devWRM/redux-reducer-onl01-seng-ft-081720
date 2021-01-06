export function managePresents(state, action){

    switch (action.type) {
        case 'INCREASE':
            return {numberOfPresents: state.numberOfPresents + 1}
        default:
          return state;
      }

}

// Initial state
// state = {numberOfPresents: 0}

//  action = {
//     type: "INCREASE"
//  }
