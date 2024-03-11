import React from "react";

const Logo = () => {
  return (
    <div className="card w-72 bg-base-100 shadow-sm flex-start px-2 py-2 rounded-btn hover:bg-base-200 hover:cursor-pointer">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="avatar">
            <div className="w-10 rounded-xl">
              <img
                src="https://yt3.googleusercontent.com/dzbkpxn6UbiztRe7QzKzGC6cYldtnalVydEGsfdcRv5lNzOPI2YjK-aE0etjLhTeRc9_dH7eeA=s900-c-k-c0x00ffffff-no-rj"
                alt="logo"
              />
            </div>
          </div>
          <div className="flex flex-col items-start">
            <div className="text-md text-base-content/60">INC</div>
            <div className="font-semibold text-md">InnovateHub</div>
          </div>
        </div>
        <div className="avatar">
          <div className="w-8 rounded-full">
            <img
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              alt="user"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logo;
