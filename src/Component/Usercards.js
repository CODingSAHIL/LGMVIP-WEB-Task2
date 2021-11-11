import React from "react";

const Users = ({ loading, users }) => {
  return loading ? (
    <div id="main">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBGFo_9x_ldnLUJly8_kbeICFUbWhmiK63jA&usqp=CAU"
        alt="Loading.."
        className="loader"
      />
    </div>
  ) : (
    <div id="main">
      {users.map((user) => (
        <div className="project users">
          {/* {console.log(user)} */}
          <div className="userProfile">
            <img
              src={user.avatar}
              alt={user.avatar}
              className="display-picture"
            ></img>
            <h1 className="name">
              {" "}
              Name : {user.first_name} {user.last_name}
            </h1>
            <p className="email"> Email : {user.email}</p>
            <p>User-ID : {user.id}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;