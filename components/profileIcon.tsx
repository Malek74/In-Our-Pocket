import { Avatar, Button } from '@nextui-org/react';

// Define the type of the profile function
export default function Profile(props:{
    name:string;
}) {
    const name =props.name;

    return (
        <div className="flex justify-center items-center">
            <p className="font-semibold p-1">{name}</p>
            <Avatar />
        </div>
    );
};

