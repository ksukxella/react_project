import React from 'react';

let Users = (props) => {

    // debugger
   
//    if(props.users.length === 0) {
        
//     props.setUsers(
//         [ 
//             {id:1, photoUrl:"https://www.flaticon.com/free-icon/smiley_3480315", followed: true, fullName:"DMirty", status:"I'm a boss", location: {city: "Minsk", country: "Belarus"}},
//             {id:2, photoUrl:"https://www.flaticon.com/free-icon/smiley_3480315", followed: false, fullName:"Anna", status:"I'm a tester", location: {city: "Gomel", country: "Belarus"}},
//             {id:3, photoUrl:"https://www.flaticon.com/free-icon/smiley_3480315", followed: true, fullName:"Ksenia", status:"I'm a student", location: {city: "Brest", country: "Belarus"} },
//             {id:4, photoUrl:"https://www.flaticon.com/free-icon/smiley_3480315", followed: false, fullName:"Victoria", status:"I'm a girl", location: {city: "Vitebsk", country: "Belarus"}}
//         ]
//     )
//    }

    return <div>
    {
        props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photoUrl}></img>
                </div>
                <div>
                     {u.followed ? <button onClick = {() => {props.unfollow(u.id)}}>Unfollow</button> : <button onClick = {() => {props.follow(u.id)}}>Follow</button>  }
                </div>
            </span>
            <span>
                <span><div>{u.fullName}</div><div>{u.status}</div></span>
                <span><div>{u.location.city}</div>
                <div>{u.location.country}</div></span>
            </span>
        </div>)
    }
    
        
    </div>

}

export default Users;