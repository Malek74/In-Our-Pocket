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
      name: "Town Hospital",
      type: "Hospital",
      address:"15 Street 53",
      area:"New Cairo 1",
      governate:"Cairo",
      status: "active",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
      repFName: "Saaed",
      repLName: "Mansour",
      repGender: "Male",
      repEmail:"saeed.mansour@.org",
      repAdd:"Abbas El Akkad, Nasr city, Cairo",
      repNum:"",

    },

    {
      id: 2,
      name: "Mosque 1",
      type: "Mosque",
      address:"",
      area:"Maadi",
      governate:"Cairo",
      status: "pending",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
      repFName: "Reem",
      repLName: "Mostafa",
      repGender: "Female",
      repEmail:"Reem.mostafa@.org",
      repAdd:"",
      repNum:"",
    },

    {
      id: 3,
      name: "Church 1",
      type: "Church",
      address:"",
      area:"Giza",
      governate:"Giza",
      status: "active",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
      repFName: "Ibrahim",
      repLName: "elmoenoufy",
      repGender: "Male",
      repEmail:"Ibrahim.elmenoufy@.org",
      repAdd:"",
      repNum:"",
    },

    {
      id: 4,
      name: "Orphanage 1",
      type: "Orphanage",
      address:"",
      area:"New Cairo",
      governate:"Cairo",
      status: "pending",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
      repFName: "Saaed",
      repLName: "Mansour",
      repGender: "Male",
      repEmail:"@.org",
      repAdd:"",
      repNum:"",
    },

    {
      id: 5,
      name: "School 1",
      type: "School",
      address:"",
      area:"New Cairo",
      governate:"Cairo",
      status: "active",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
      repFName: "Saaed",
      repLName: "Mansour",
      repGender: "Male",
      repEmail:"@.org",
      repAdd:"",
      repNum:"",
    },

    {
      id: 5,
      name: "School 2",
      type: "School",
      address:"",
      area:"New Cairo",
      governate:"Cairo",
      status: "active",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
      repFName: "Saaed",
      repLName: "Mansour",
      repGender: "Male",
      repEmail:"@.org",
      repAdd:"",
      repNum:"",
    },

    {
      id: 6,
      name: "NGO 1",
      type: "NGO",
      address:"",
      area:"Maadi",
      governate:"Cairo",
      status: "active",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",    
      repFName: "Saaed",
      repLName: "Mansour",
      repGender: "Male",
      repEmail:"@.org",
      repAdd:"",
      repNum:"",
    },

    {
      id: 7,
      name: "Hospital 3",
      type: "Hospital",
      name: "Community Center 1",
      type: "Community Center",
      address:"",
      area:"Maadi",
      governate:"Cairo",
      status: "pending",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
      repFName: "Saaed",
      repLName: "Mansour",
      repGender: "Male",
      repEmail:"@.org",
      repAdd:"",
      repNum:"",
    },
    {
      id: 8,
      name: "Refugee Camp 1",
      type: "Refugee Camp",
      name: "Food Bank 1",
      type: "Food Bank",
      address:"",
      area:"Maadi",
      governate:"Cairo",
      status: "active",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
      repFName: "Saaed",
      repLName: "Mansour",
      repGender: "Male",
      repEmail:"@.org",
      repAdd:"",
      repNum:"",
    },

    {
      id: 9,
      name: "Hospital 2",
      type: "Hospital",
      name: "Shelter 1",
      type: "Shelter",
      address:"",
      area:"Maadi",
      governate:"Cairo",
      status: "pending",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
      repFName: "Saaed",
      repLName: "Mansour",
      repGender: "Male",
      repEmail:"@.org",
      repAdd:"",
      repNum:"",
    },
    {
      id: 10,
      name: "School 3",
      type: "School",
      name: "Animal Rescue 1",
      type: "Animal Rescue",
      address:"",
      area:"Maadi",
      governate:"Cairo",
      status: "active",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
      repFName: "Saaed",
      repLName: "Mansour",
      repGender: "Male",
      repEmail:"@.org",
      repAdd:"",
      repNum:"",
    },
  ];
  
  export { columns, Originalusers };
  