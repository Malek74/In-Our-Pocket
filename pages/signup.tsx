import { Counter } from '@/components/counter'
import { Navbar } from '@/components/navbar'
import DefaultLayout from '@/layouts/default'
 import {Button, Input} from "@nextui-org/react";
import { useMemo, useState } from 'react';

export default function Page() {
  const [value, setValue] = useState("junior2nextui.org");

  const validateEmail = (value: string) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const isInvalid = useMemo(() => {
    if (value === "") return false;

    return validateEmail(value) ? false : true;
  }, [value]);

  return (
    <div className='flex flex-col min-h-screen justify-center items-center gap-4'>
    <Input
      value={value}
      type="email"
      label="Email"
      variant="bordered"
      isInvalid={isInvalid}
      color={isInvalid ? "danger" : "success"}
      errorMessage={isInvalid && "Please enter a valid email"}
      onValueChange={setValue}
      className="max-w-xs"
      isRequired
    />
    <Input
      value={value}
      type="email"
      label="ASHdaddasdad"
      variant="bordered"
      isInvalid={isInvalid}
      color={isInvalid ? "danger" : "success"}
      errorMessage={isInvalid && "Please enter a valid email"}
      onValueChange={setValue}
      className="max-w-xs"
      isRequired
    />
    <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
      Log in
    </Button>

    </div>
  );
}
