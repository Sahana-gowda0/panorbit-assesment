import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserDetails } from "./contextApi";
import OutsideClickHandler from "react-outside-click-handler";
import UserModal from "./UserModal";
import MAPIMG from "../Images/map.png";

const Profile = () => {
  const id = useParams();
  const userList = useContext(UserDetails);
  const [users, setUsers] = useState([]);
  const [showUserModal, setShowUserModal] = useState(false);
  const getUser = users?.filter((data) => {
    if (data.id == id.id) {
      return data;
    }
  });

  useEffect(() => {
    setUsers(userList);
  }, [userList]);

  return (
    <>
      <div>
        {getUser?.map((user) => {
          return (
            <div className="mt-[20px] w-[900px] h-[650px]">
              <>
                <div className="flex justify-between pb-[20px] border-b-[1px] border-gray-200">
                  <label className="text-lg font-bold text-[#413f3f]">
                    {" "}
                    Profile{" "}
                  </label>
                  <div
                    className="flex items-center justify-center cursor-pointer"
                    onClick={() => {
                      setShowUserModal(true);
                    }}
                  >
                    <img
                      src={`${user.profilepicture}`}
                      className="h-[30px] w-[30px] rounded-xl mr-[10px]"
                      alt=""
                    />
                    <span className="text-[#717171] text-lg font-medium">
                      {" "}
                      {user.name}{" "}
                    </span>
                  </div>
                </div>
                {showUserModal && (
                  <OutsideClickHandler
                    onOutsideClick={() => {
                      setShowUserModal(false);
                    }}
                  >
                    <UserModal user={getUser} />
                  </OutsideClickHandler>
                )}

                <div className="flex w-[100%] h-[580px]">
                  <div className="w-1/2 h-full text-center border-r-[1px] border-[rgb(211, 210, 210)] mt-[30px] pr-[30px]">
                    <img
                      src={`${user.profilepicture}`}
                      className="w-[170px] h-[170px] rounded-[50%] ml-[130px] mb-[10px]"
                      alt=""
                    />
                    <h3 className="font-bold text-xl"> {user.name} </h3>
                    <div>
                      <div className="flex text-right pb-[10px]">
                        <span className="text-right text-[#9f9f9f] text-lg font-medium w-[50%]">
                          Username :{" "}
                        </span>
                        <span className="text-left text-lg font-medium ml-[10px] w-[50%]">
                          {" "}
                          {user.username}{" "}
                        </span>
                      </div>
                      <div className="flex text-right pb-[10px]">
                        <span className="text-right text-[#9f9f9f] text-lg font-medium w-[50%]">
                          Email :{" "}
                        </span>
                        <span className="text-left text-lg font-medium ml-[10px] w-[50%]">
                          {" "}
                          {user.email}{" "}
                        </span>
                      </div>
                      <div className="flex text-right pb-[10px]">
                        <span className="text-right text-[#9f9f9f] text-lg font-medium w-[50%]">
                          Phone :{" "}
                        </span>
                        <span className="text-left text-lg font-medium ml-[10px] w-[50%]">
                          {" "}
                          {user.phone}{" "}
                        </span>
                      </div>
                      <div className="flex text-right pb-[10px]">
                        <span className="text-right text-[#9f9f9f] text-lg font-medium w-[50%]">
                          Website :{" "}
                        </span>
                        <span className="text-left text-lg font-medium ml-[10px] w-[50%]">
                          {user.website}{" "}
                        </span>
                      </div>
                      <hr className="w-[100%] border-none h-[1px] bg-gray-300" />
                      <div>
                        <label className="text-[#a9a3a3] text-[18px] text-bold">
                          {" "}
                          Company{" "}
                        </label>
                        <div className="flex text-right pb-[10px]">
                          <span className="text-right text-[#9f9f9f] text-lg font-medium w-[50%]">
                            Name :{" "}
                          </span>
                          <span className="text-left text-lg font-medium ml-[10px] w-[50%]">
                            {" "}
                            {user.company.name}{" "}
                          </span>
                        </div>
                        <div className="flex text-right pb-[10px]">
                          <span className="text-right text-[#9f9f9f] text-lg font-medium w-[50%]">
                            catchPhrase :{" "}
                          </span>
                          <span className="text-left text-lg font-medium ml-[10px] w-[50%]">
                            {user.company.catchPhrase}
                          </span>
                        </div>
                        <div className="flex text-right pb-[10px]">
                          <span className="text-right text-[#9f9f9f] text-lg font-medium w-[50%]">
                            bs :{" "}
                          </span>
                          <span className="text-left text-lg font-medium ml-[10px] w-[50%]">
                            {user.company.bs}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2 h-full m-[30px]">
                    <label className="text-[20px] font-medium text-[#9f9f9f]">
                      {" "}
                      Address :
                    </label>
                    <div className="text-left mt-[15px] ml-[50px]">
                      <span className="text-right text-[#9f9f9f] text-[18px] font-medium ">
                        Street :{" "}
                      </span>{" "}
                      <span className="text-left text-[18px] font-medium  ml-[10px]">
                        {" "}
                        {user.address.street}{" "}
                      </span>
                    </div>
                    <div className="text-left mt-[15px] ml-[50px]">
                      <span className="text-right text-[#9f9f9f] text-[18px] font-medium ">
                        Suite :{" "}
                      </span>
                      <span className="text-left text-lg font-medium ml-[10px] w-[50%]">
                        {" "}
                        {user.address.suite}{" "}
                      </span>
                    </div>
                    <div className="text-left mt-[15px] ml-[50px]">
                      <span className="text-right text-[#9f9f9f] text-[18px] font-medium ">
                        City :{" "}
                      </span>
                      <span className="text-left text-lg font-medium ml-[10px] w-[50%]">
                        {" "}
                        {user.address.city}{" "}
                      </span>
                    </div>
                    <div className="text-left mt-[15px] ml-[50px]">
                      <span className="text-right text-[#9f9f9f] text-[18px] font-medium ">
                        ZipCode :{" "}
                      </span>
                      <span className="text-left text-lg font-medium ml-[10px] w-[50%]">
                        {" "}
                        {user.address.zipcode}{" "}
                      </span>
                    </div>
                    <div className="mt-4">
                      <img
                        className="w-[800px] h-[250px] rounded-xl"
                        src={`${MAPIMG}`}
                        alt=""
                      ></img>
                      <div className="flex mt-2">
                        <div className="text-left ml-[250px] ">
                          <span className="text-right text-[#9f9f9f] text-[12px] font-medium ">
                            Lat :{" "}
                          </span>
                          <span className="text-left text-[12px] font-medium w-[50%]">
                            {" "}
                            {user.address.geo.lat}{" "}
                          </span>
                        </div>
                        <div className="ml-4">
                          <span className="text-right text-[#9f9f9f] text-[12px] font-medium ">
                            Lng :{" "}
                          </span>
                          <span className="text-left text-[12px] font-medium w-[50%]">
                            {" "}
                            {user.address.geo.lng}{" "}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Profile;
