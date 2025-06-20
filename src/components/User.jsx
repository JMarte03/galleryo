import React from "react";

const User = ({ userInfo }) => {
  return (
    <div className="mb-4 flex gap-x-4 items-center">
      <div className="avatar">
        <div className="w-10 rounded-full">
          <img src={userInfo.profile_image.medium} />
        </div>
      </div>
      <a
        className="flex flex-col hover:underline"
        href={userInfo.links.html}
      >
        <span className="font-medium">{userInfo.name}</span>
        <span className="text-xs text-[#737373]">
          @{userInfo.username}
        </span>
      </a>
    </div>
  );
};

export default User;
