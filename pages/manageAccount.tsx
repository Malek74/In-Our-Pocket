import React, { useState } from "react";
import { Button, Input } from "@nextui-org/react";
import { Navbar } from "@/components/navbar";
import SideNavbar from "@/components/sideBar";


export default function ManageAccount() {
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <div className="flex flex-col min-h-screen ">

      <SideNavbar></SideNavbar>

     <div className="flex justify-start min-w-screen"> <Navbar></Navbar></div>
      <div className="flex justify-center">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-center justify-center min-h-screen">
        <Input
          value={email}
          type="text"
          variant="bordered"
          label="Email"
          className="max-w-xs"
          isRequired
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          value={currentPassword}
          variant="bordered"
          label="Current Password"
          className="max-w-xs"
          isRequired
          onChange={(e) => setCurrentPassword(e.target.value)}
        />
        <Input
          type="password"
          value={newPassword}
          variant="bordered"
          label="New Password"
          className="max-w-xs"
          isRequired
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <Button type="submit" radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
          Change Password
        </Button>
      </form>
      </div>
    </div>
  );
}
