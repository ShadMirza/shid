import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate  = useNavigate();
  const [IsLoading, setIsLoading] = useState(false);
  const [UserData, SetUserData] = useState({
    Data: "",
    Password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    SetUserData({ ...UserData, [name]: value });
  };
  const handleClick = async () =>
  {
    setIsLoading(true);
    if (UserData.Data === "" || UserData.Password === "") {
      setIsLoading(false);
      return toast.warning("Filled is empty");
    }
    try {
      const res = await axios.post(
        "https://hackathondb.cyclic.app/auth/login",
        UserData
      );
      console.log(res.data);
      if (res.data.success) {
        toast.success(res.data.message);
        localStorage.setItem("userID", res.data.data._id);
        localStorage.setItem("userName", res.data.data.FirstName);
        setIsLoading(false);
        SetUserData({
          Data: "",
          Password: "",
        });
        navigate('/courses')
      } else {
        setIsLoading(false);
        toast.error(res.data.message);
      }
    } catch (err) {
      console.log(err);
      toast.warning("Please Try Again");
      setIsLoading(false);
    }
  };

  return (
    <>
      <form>
        {IsLoading ? (
          <div className="spinner"></div>
        ) : (
          <>
            <input
              type="text"
              placeholder="Email Address"
              name="Data"
              onChange={handleChange}
              value={UserData.Data}
              autoComplete="off"
              required
              className="Login-input"
            />
            <input
              type="password"
              placeholder="Password"
              name="Password"
              onChange={handleChange}
              className="Login-input"
              value={UserData.Password}
              autoComplete="off"
              required
            />
            <button type="button" className="Login-btn" onClick={handleClick}>
              Login
            </button>
          </>
        )}
      </form>
    </>
  );
};

export default LoginForm;
