export function filterUsers(users: any[], column1: string, value1: any, column2: string, value2: any, column3: string, value3: any) {
  if (column1 === "null" && column2 === "null" && column3 === "null") {
    return users;
  }
  if (column1 === "null" && column2 === "null" && column3 !== "null") {
    console.log(column3,value3);
    return users.filter(user =>
      user[column3].toLowerCase().includes(value3.toLowerCase())
    );
  }
  if (column1 === "null" && column2 !== "null" && column3 === "null") {
    return users.filter(user =>
      user[column2].toLowerCase().includes(value2.toLowerCase())
    );
  }
  if (column1 !== "null" && column2 === "null" && column3 === "null") {
    return users.filter(user =>
      user[column1].toLowerCase().includes(value1.toLowerCase())
    );
  }
  if (column1 === "null" && column2 !== "null" && column3 !== "null") {
    return users.filter(user =>
      user[column2].toLowerCase().includes(value2.toLowerCase()) &&
      user[column3].toLowerCase().includes(value3.toLowerCase())
    );
  }
  if (column1 !== "null" && column2 === "null" && column3 !== "null") {
    return users.filter(user =>
      user[column1].toLowerCase().includes(value1.toLowerCase()) &&
      user[column3].toLowerCase().includes(value3.toLowerCase())
    );
  }
  if (column1 !== "null" && column2 !== "null" && column3 === "null") {
    return users.filter(user =>
      user[column1].toLowerCase().includes(value1.toLowerCase()) &&
      user[column2].toLowerCase().includes(value2.toLowerCase())
    );
  }
  // All columns are provided
  return users.filter(user =>
    user[column1].toLowerCase().includes(value1.toLowerCase()) &&
    user[column2].toLowerCase().includes(value2.toLowerCase()) &&
    user[column3].toLowerCase().includes(value3.toLowerCase())
  );
}

          


export function searchUsers(users: any[], query: string) {
  if(query.length === 0){
    return users;
  
  }else{
    return users.filter(user =>
      user.name.toLowerCase().includes(query.toLowerCase())
    );
  }
} 

const columns = [
    { name: "Orgaization Name", uid: "name" },
    { name: "Type", uid: "type" },
    { name: "Area", uid: "area" },
    { name: "Status", uid: "status" },
    { name: "ACTIONS", uid: "actions" },
  ];
  
  const Originalusers = [
    {
      id: 1,
      name: "Hospital 1",
      type: "Hospital",
      area:"New Cairo",
      status: "active",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    },
    {
      id: 2,
      name: "Mosque 1",
      type: "Mosque",
      area:"Maadi",
      status: "pending",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",

    },
    {
      id: 3,
      name: "Church 1",
      type: "Church",
      area:"Giza",
      status: "active",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",

    },
    {
      id: 4,
      name: "Orphanage 1",
      type: "Orphanage",
      area:"New Cairo",
      status: "pending",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",

    },
    {
      id: 5,
      name: "School 1",
      type: "School",
      area:"New Cairo",
      status: "active",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",

    },
    {
      id: 6,
      name: "NGO 1",
      type: "NGO",
      area:"Maadi",
      status: "active",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",    },
    {
      id: 7,
      name: "Community Center 1",
      type: "Community Center",
      area:"Maadi",
      status: "pending",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",

    },
    {
      id: 8,
      name: "Food Bank 1",
      type: "Food Bank",
      area:"Maadi",
      status: "active",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
      

    },
    {
      id: 9,
      name: "Shelter 1",
      type: "Shelter",
      area:"Maadi",

      status: "pending",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",

    },
    {
      id: 10,
      name: "Animal Rescue 1",
      type: "Animal Rescue",
      area:"Maadi",
      status: "active",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",

    },
  ];
  
  export { columns, Originalusers };
  