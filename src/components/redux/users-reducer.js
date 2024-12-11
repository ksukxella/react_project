const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
            {id:1, photoUrl:"https://www.flaticon.com/free-icon/smiley_3480315", followed: true, fullName:"DMirty", status:"I'm a boss", location: {city: "Minsk", country: "Belarus"}},
            {id:2, photoUrl:"https://www.flaticon.com/free-icon/smiley_3480315", followed: false, fullName:"Anna", status:"I'm a tester", location: {city: "Gomel", country: "Belarus"}},
            {id:3, photoUrl:"https://www.flaticon.com/free-icon/smiley_3480315", followed: true, fullName:"Ksenia", status:"I'm a student", location: {city: "Brest", country: "Belarus"} },
            {id:4, photoUrl:"https://www.flaticon.com/free-icon/smiley_3480315", followed: false, fullName:"Victoria", status:"I'm a girl", location: {city: "Vitebsk", country: "Belarus"}}
      
    ]
   
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
              ...state, 
              users: state.users.map(u => {
              if (u.id === action.userId) {
                return {...u, followed: true}
              }
              return u;
            })
          }
            case UNFOLLOW:
            return {
              ...state, 
              users: state.users.map(u => {
              if (u.id === action.userId) {
                return {...u, followed: false}
              }
              return u;
            })
          }

          case SET_USERS:
            return {
              ...state, 
              users:[...state.users, ...action.users] 
          }

            default:
                return state;
          }
}

export const followAC = (userId) => (
    {
      type: FOLLOW, userId: userId
    }
  )
  
  export const unfollowAC = (userId) => (
   {
      type: UNFOLLOW, userId: userId
    }
  )

  export const setUsersAC= (users) => (
    {
      type: SET_USERS, users: users
    }
  )


export default usersReducer;