export function manageFriends(state, action){


    switch (action.type) {
        case 'ADD_FRIEND':
            // return Object.assign({...state.friend, name: action.friend.name})
            return(

                {...state, friends: state.friends.push(action.friend)}

            //    Object.assign({}, state, {
            //        friends: state.friends.push(action.friend)
            //    })
            )

        default:
          return state;
      }


}

// Initial state
// state = {friends: []}


// action = {
//     type: "ADD_FRIEND",
//     friend: {
//       name: "Chrome Boi"
//       homewtown: "NYC",
//       id: 1
//     }
//   }
