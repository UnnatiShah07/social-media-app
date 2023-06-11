import { useState } from "react";
import { IoMdEyeOff, IoMdEye } from "react-icons/io";

const PasswordInput = ({ placeholder }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="w-full border my-1 p-2 text-sm flex justify-between items-center">
      <input
        className="outline-none border-0 my-0 p-0"
        type={show ? "text" : "password"}
        placeholder={placeholder}
      />
      <div className="text-xl text-font-color" onClick={() => setShow(!show)}>
        {show ? <IoMdEyeOff /> : <IoMdEye />}
      </div>
    </div>
  );
};

export default PasswordInput;
