import { Counter } from '@/components/counter'
import { Navbar } from '@/components/navbar'
import DefaultLayout from '@/layouts/default'
 import {Button, Card, CardHeader, Divider, Input} from "@nextui-org/react";
import { useMemo, useState } from 'react';

export default function Page() {
  const [value, setValue] = useState("junior2nextui.org");

  const validateEmail = (value: string) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const isInvalid = useMemo(() => {
    if (value === "") return false;

    return validateEmail(value) ? false : true;
  }, [value]);

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className='flex flex-col min-h-screen min-w-screen justify-center items-center'>
      <Card className='flex flex-col justify-center items-center gap-4 p-6'>
        <CardHeader className='flex justify-center items-center'>
            <label className='text-xl font-bold'>Admin Login</label>
        </CardHeader>
        <Divider />
    <Input
      value={value}
      type="email"
      label="Email"
      variant="bordered"
      isInvalid={isInvalid}
      color={isInvalid ? "danger" : "success"}
      errorMessage={isInvalid && "Please enter a valid email"}
      onValueChange={setValue}
      className="w-80"
      isRequired
    />
    <Input
      label="Password"
      variant="bordered"
      placeholder="Enter your password"
      endContent={
        <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
          {/* {isVisible ? (
            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          ) : (
            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          )} */}
        </button>
      }
      type={isVisible ? "text" : "password"}
      className="w-80"
    />
    <Button isDisabled={isInvalid} radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
      Log in
    </Button>
    </Card>
    </div>
  );
}
