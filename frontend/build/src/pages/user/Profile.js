import React, { useEffect, useState } from "react";
import UsersMenu from "../../components/layout/UsersMenu";
import Layout from "../../components/layout/layout";
import { useAuth } from "../../context/auth";
import axios from "axios";
import toast  from "react-hot-toast";

const Profile = () => {
  // context
  const [auth, setAuth] = useAuth();

  //State 
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [phone, setPhone] = useState("");
   const [address, setAddress] = useState("");

  // Get User Data
  useEffect(()=>{
    const {email, name, phone, address} = auth?.user;
    setName(name);
    setEmail(email);
    setPhone(phone);
    setAddress(address);
  },[auth?.user])


  //  Form Function
     const handleSubmit = async (e) => {
       e.preventDefault();

       try {
          const {data} = await axios.put(`/api/v1/auth/profile`, {
           name,
           email,
           password,
           phone,
           address,
         });

         if(data?.error) {
          toast.error(data?.error)
         }else{
          setAuth({...auth, user:data?.updatedUser});
          let ls = localStorage.getItem("auth");
          ls = JSON.parse(ls);
          ls.user = data.updatedUser;
          localStorage.setItem("auth", JSON.stringify(ls));
          toast.success("Profile Updated Successfully")
         }

       } catch (error) {
         console.log(error);
         toast.error("Something went wrong");
       }
     };

  return (
    <Layout title={"Your Profile"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <UsersMenu />
          </div>
          <div className="col-md-9">
            <div className="form-container">
              <form onSubmit={handleSubmit}>
                <h4 className="title">USER PROFILE</h4>

                <div className="mb-3">
                  Name
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Enter Your Name"
                    />
                </div>

                <div className="mb-3">
                  Email
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Enter Your Email"
                    disabled
                  />
                </div>

                <div className="mb-3">
                  Password
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Enter Your Password"
                  />
                </div>

                <div className="mb-3">
                  Phone
                  <input
                    type="text"
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Enter Your Phone No."
                  />

                  <div className="mb-3">
                    Address
                    <input
                      type="text"
                      onChange={(e) => setAddress(e.target.value)}
                      value={address}
                      className="form-control"
                      id="exampleInputEmail1"
                      placeholder="Enter Your Address"
                    />
                  </div>
                </div>

                <button type="submit" className="btn btn-primary">
                Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;