import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import { useMemo, useState } from "react";
import { Counter } from '@/components/counter'
import { Navbar } from '@/components/navbar'
 import {Button, Input} from "@nextui-org/react";



export default function manageAccount() {

  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  
  const validateEmail = (value: string) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
  const validatePassword = (value: string) => value.length >= 8; // Minimum length of 8 characters

  function showAlert() {
    alert("PASSWORD HAS BEEN CHANGED!!");
}
  
  const isEmailInvalid = useMemo(() => {
    if (email === "") return false;
    return validateEmail(email) ? false : true;
  }, [email]);

  const isCurrentPasswordInvalid = useMemo(() => {
    if (currentPassword === "") return false;
    //return validatePassword(currentPassword) ? false : true;
  }, [currentPassword]);

  const isNewPasswordInvalid = useMemo(() => {
    if (newPassword === "" ) return false;
    else if (newPassword === currentPassword)  { return false && alert ("password is same as the old one. please change it.") ;}
    else{
    return validatePassword(newPassword) ? false : true;}
    
  }, [newPassword]);

  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isEmailInvalid ) {
      alert("Please enter valid email.");
      return;
    }
    if (isCurrentPasswordInvalid ) {
        alert("The old password is incorrect.");
        return;
      }
      if (isNewPasswordInvalid) {
        alert("The new password should be 8 characters minimum.");
        return
     
  };
};

	return (
		<DefaultLayout>
        <div className='flex flex-col min-h-screen justify-center items-center gap-4 '>
        {isEmailInvalid }
      <div >
        <label>Email:</label>
        <Input
          value={email}
          type="text"
          variant="bordered"
          label="Email"
          className="max-w-xs"
          isRequired
          color={isEmailInvalid ? "danger" : "success"}
          onChange={(e) => setEmail(e.target.value)}
        />
        
      </div>
      <div >
        <label>Current Password:</label>
        <Input
          type="password"
          value={currentPassword}
          variant="bordered"
          label="Current Password"
          className="max-w-xs"
          isRequired
          color={isEmailInvalid ? "danger" : "success"}
          onChange={(e) => setCurrentPassword(e.target.value)}
        />
        {isCurrentPasswordInvalid && <p>Password must be at least 8 characters long.</p>}
      </div>
      <div >
        <label>New Password:</label>
        <Input
          type="password"
          value={newPassword}
          variant="bordered"
          label="New Password"
          className="max-w-xs"
          isRequired
          color={isEmailInvalid ? "danger" : "success"}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        {isNewPasswordInvalid && <p>Password must be at least 8 characters long.</p>}
      </div>
      <Button onClick={showAlert} type="submit" radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">Change Password</Button>
      
   
        </div>
        </DefaultLayout>
	);
}
  
