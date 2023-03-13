import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserDetails } from "./contextApi";

const UserList = () => {
  const userList = useContext(UserDetails);
const navigate = useNavigate();
  return (
    <div className="backGroundImage w-full h-screen bg-no-repeat bg-cover">
      <div className="block top-0 left-0 translate-x-[80%] translate-y-14 w-[480px] h-[485px] rounded-3xl overflow-hidden bg-white shadow-2xl ">
        <div className="bg-gray-200 text-lg text-center font-bold py-7 text-slate-700">
          Select An Account
        </div>{" "}
        <div className="w-[470px] h-[380px] bg-white overflow-y-scroll">
          <div>
            {userList.map((items) => {
              return (
                <div
                  className="flex items-center py-[6px] mx-[30px] border-b-[1px] border-gray-200 font-[400] cursor-pointer"
                  key={items.id}
                  onClick={() =>{
                    navigate(`profile/${items.id}`)
                  }}
                >
                  <div className="w-[38px] h-[38px] rounded-[50%] mr-[15px]">
                    <img
                      className="w-[100%] h-[100%] rounded-[50%]"
                      src={`${items.profilepicture}`}
                      alt="User Profile"
                    />
                  </div>
                  <div>{items.name}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;
