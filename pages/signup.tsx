import { EyeFilledIcon, EyeSlashFilledIcon } from "@/components/icons";
import { Button, Card, CardHeader, Divider, Input } from "@nextui-org/react";
import { useMemo, useState } from "react";
import NextLink from "next/link";

export default function Page() {
  const [emailValue, setEmailValue] = useState("");
  const [passlValue, setPassValue] = useState("");
  const validateEmail = (emailValue: string) =>
    emailValue.match(/^^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i);

  const isInvalid = useMemo(() => {
    if (emailValue === "") return false;

    return validateEmail(emailValue) ? false : true;
  }, [emailValue, setEmailValue]);

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="flex flex-col min-h-screen justify-center items-center gap-6">
      <Card className="flex flex-col justify-center items-center gap-4 p-6">
        <CardHeader className="flex justify-center items-center">
          <label className="text-xl font-bold">Login</label>
        </CardHeader>
        <Divider />
        <Input
          value={emailValue}
          type="email"
          label="Email"
          variant="bordered"
          isInvalid={isInvalid}
          color={
            isInvalid
              ? "danger"
              : emailValue.length == 0
              ? "default"
              : "success"
          }
          errorMessage={isInvalid && "Please enter a valid email"}
          onValueChange={setEmailValue}
          className="w-80"
          placeholder="Enter your email"
          isRequired
        />
        <Input
          isRequired
          label="Password"
          variant="bordered"
          placeholder="Enter your password"
          endContent={
            <button
              className="focus:outline-none"
              type="button"
              onClick={toggleVisibility}
            >
              {isVisible ? (
                <EyeSlashFilledIcon className="text-xl text-default-400 pointer-events-none" />
              ) : (
                <EyeFilledIcon className="text-xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
          type={isVisible ? "text" : "password"}
          className="w-80"
          value={passlValue}
          onValueChange={setPassValue}
        />
        <Button
          isDisabled={isInvalid}
          radius="full"
          className="bg-rose text-black shadow-lg"
        >
          Log in
        </Button>
      </Card>
      <Card className="flex flex-col justify-center items-center gap-4 p-4 w-[368px]">
        <CardHeader className="flex justify-center items-center">
          <label className="text-sm">
            {"New Donor/Organization and wish to "}
            <NextLink href={"/register"} color="foreground">
              Register?
            </NextLink>
          </label>
        </CardHeader>
      </Card>
    </div>
  );
}