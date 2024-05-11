export function filterUsers(
  users: any[],
  column1: string,
  value1: any,
  column2: string,
  value2: any,
  column3: string,
  value3: any
) {
  if (column1 === "null" && column2 === "null" && column3 === "null") {
    return users;
  }
  if (column1 === "null" && column2 === "null" && column3 !== "null") {
    console.log(column3, value3);
    return users.filter((user) =>
      user[column3].toLowerCase().includes(value3.toLowerCase())
    );
  }
  if (column1 === "null" && column2 !== "null" && column3 === "null") {
    return users.filter((user) =>
      user[column2].toLowerCase().includes(value2.toLowerCase())
    );
  }
  if (column1 !== "null" && column2 === "null" && column3 === "null") {
    return users.filter((user) =>
      user[column1].toLowerCase().includes(value1.toLowerCase())
    );
  }
  if (column1 === "null" && column2 !== "null" && column3 !== "null") {
    return users.filter(
      (user) =>
        user[column2].toLowerCase().includes(value2.toLowerCase()) &&
        user[column3].toLowerCase().includes(value3.toLowerCase())
    );
  }
  if (column1 !== "null" && column2 === "null" && column3 !== "null") {
    return users.filter(
      (user) =>
        user[column1].toLowerCase().includes(value1.toLowerCase()) &&
        user[column3].toLowerCase().includes(value3.toLowerCase())
    );
  }
  if (column1 !== "null" && column2 !== "null" && column3 === "null") {
    return users.filter(
      (user) =>
        user[column1].toLowerCase().includes(value1.toLowerCase()) &&
        user[column2].toLowerCase().includes(value2.toLowerCase())
    );
  }
  // All columns are provided
  return users.filter(
    (user) =>
      user[column1].toLowerCase().includes(value1.toLowerCase()) &&
      user[column2].toLowerCase().includes(value2.toLowerCase()) &&
      user[column3].toLowerCase().includes(value3.toLowerCase())
  );
}

export function filterUsersRange(
  users: any[],
  column1: string,
  value1: any,
  column2: string,
  value2: any,
  column3: string,
  value3: any
) {
  if (column1 === "null" && column2 === "null" && column3 === "null") {
    return users;
  }
  if (column1 === "null" && column2 === "null" && column3 !== "null") {
    console.log(column3, value3);
    return users.filter((user) =>
      user[column3].toLowerCase().includes(value3.toLowerCase())
    );
  }
  if (column1 === "null" && column2 !== "null" && column3 === "null") {
    return users.filter((user) =>
      user[column2].toLowerCase().includes(value2.toLowerCase())
    );
  }
  if (column1 !== "null" && column2 === "null" && column3 === "null") {
    let val1 = parseInt(value1.split("-")[0]);
    let val2 = parseInt(value1.split("-")[1]); 
    
    return users.filter((user) => {
        let userValue = parseInt(user[column1]);
        return userValue >= val1 && userValue <= val2;
    });
  }

  if (column1 === "null" && column2 !== "null" && column3 !== "null") {
    return users.filter(
      (user) =>
        user[column2].toLowerCase().includes(value2.toLowerCase()) &&
        user[column3].toLowerCase().includes(value3.toLowerCase())
    );
  }
  if (column1 !== "null" && column2 === "null" && column3 !== "null") {

    let val1 = parseInt(value1.split("-")[0]);
    let val2 = parseInt(value1.split("-")[1]);

    return users.filter(
      (user) =>
        user[column3].toLowerCase().includes(value3.toLowerCase()) &&
        (parseInt(user[column1]) >= val1 && parseInt(user[column1]) <= val2)
    );
         

    
  }
  if (column1 !== "null" && column2 !== "null" && column3 === "null") {
    let val1 = parseInt(value1.split("-")[0]);
    let val2 = parseInt(value1.split("-")[1]);
    

    return users.filter(
      (user) =>
        user[column2].toLowerCase().includes(value2.toLowerCase()) &&
        (parseInt(user[column1]) >= val1 && parseInt(user[column1]) <= val2)
    );
  }

  let val1 = parseInt(value1.split("-")[0]);
  let val2 = parseInt(value1.split("-")[1]);

  // All columns are provided
  return users.filter(
    
    (user) =>
      (parseInt(user[column1]) >= val1 && parseInt(user[column1]) <= val2) &&
      user[column2].toLowerCase().includes(value2.toLowerCase()) &&
      user[column3].toLowerCase().includes(value3.toLowerCase())
  );
}
export function searchUsers(users: any[], query: string) {
  if (query.length === 0) {
    return users;
  } else {
    return users.filter((user) =>
      user.name.toLowerCase().includes(query.toLowerCase())
    );
  }
}

const medicalCasesColumns = [
  { name: "Donation", uid: "name" },
  { name: "Medical Specialty", uid: "medicalspecialty" },
  { name: "Organisation", uid: "organisation" },
  { name: "Governorate", uid: "governorate" },
  { name: "Area", uid: "area" },
  { name: "Review", uid: "review" },
];

const medicalCasesUsers = [
  {
    id: 1,
    name: "Donation 1",
    medicalspecialty: "Dentist",
    organisation: "Organization 1",
    governorate: "Cairo",
    area: "Tagamoa",
  },
  {
    id: 2,
    name: "Donation 2",
    medicalspecialty: "Surgeon",
    organisation: "Organization 2",
    governorate: "Cairo",
    area: "Madinet Nasr",
  },
  {
    id: 3,
    name: "Donation 3",
    medicalspecialty: "Dentist",
    organisation: "Organization 3",
    governorate: "Alexandria",
    area: "Area 1",
  },
];

const foodsColumns = [
  { name: "Donation", uid: "name" },
  { name: "Food Type", uid: "foodtype" },
  { name: "Review", uid: "review" },
];

const foodsUsers = [
  { id: 1, name: "Donation 1", foodtype: "Fruits and Vegetables" },
  { id: 2, name: "Donation 2", foodtype: "Canned Foods" },
  { id: 3, name: "Donation 3", foodtype: "Fresh Meals" },
  { id: 4, name: "Donation 4", foodtype: "Baked Goods" },
];

const teachingPostsColumns = [
  { name: "Donation", uid: "name" },
  { name: "Subject", uid: "subject" },
  { name: "Governorate", uid: "governorate" },
  { name: "Area", uid: "area" },
  { name: "Review", uid: "review" },
];

const teachingPostsUsers = [
  {
    id: 1,
    name: "Donation 1",
    subject: "Maths",
    governorate: "Cairo",
    area: "Tagamoa",
  },
  {
    id: 2,
    name: "Donation 2",
    subject: "English",
    governorate: "ALexandria",
    area: "area 1",
  },
  {
    id: 3,
    name: "Donation 3",
    subject: "Science",
    governorate: "Cairo",
    area: "Madinet Nasr",
  },
];

const bloodDonationRequestsColumns = [
  { name: "Donation", uid: "name" },
  { name: "Hospital", uid: "hospital" },
  { name: "Governorate", uid: "governorate" },
  { name: "Area", uid: "area" },
  { name: "Review", uid: "review" },
];

const bloodDonationRequestsUsers = [
  {
    id: 1,
    name: "Donation 1",
    hospital: "Hospital 1",
    governorate: "Cairo",
    area: "Tagamoa",
  },
  {
    id: 2,
    name: "Donation 2",
    hospital: "Hospital 2",
    governorate: "Alexandria",
    area: "area 1",
  },
  {
    id: 3,
    name: "Donation 3",
    hospital: "Hospital 3",
    governorate: "Cairo",
    area: "Madinet Nasr",
  },
];

const medicalSuppliesColumns = [
  { name: "Donation", uid: "name" },
  { name: "Supplies", uid: "supplies" },
  { name: "Review", uid: "review" },
];

const medicalSuppliesUsers = [
  { id: 1, name: "Donation 1", supplies: "Medical Devices" },
  { id: 2, name: "Donation 2", supplies: "Medical Equipment" },
  { id: 3, name: "Donation 3", supplies: "Medication" },
];

const toysColumns = [
  { name: "Donation", uid: "name" },
  { name: "Age", uid: "age" },
  { name: "Gender", uid: "gender" },
  { name: "Category", uid: "category" },
  { name: "Review", uid: "review" },
];

const toysUsers = [
  {
    id: 1,
    name: "Donation 1",
    age: "12",
    gender: "Male",
    category: "Board Games",
  },
  {
    id: 2,
    name: "Donation 2",
    age: "5",
    gender: "Female",
    category: "Dolls",
  },
  {
    id: 3,
    name: "Donation 3",
    age: "7",
    gender: "Male",
    category: "Cars",
  },
  {
    id: 4,
    name: "Donation 4",
    age: "10",
    gender: "Female",
    category: "Stuffed Toys",
  },
  {
    id: 5,
    name: "Donation 5",
    age: "14",
    gender: "Male",
    category: "Outdoor",
  },
  {
    id: 6,
    name: "Donation 6",
    age: "15",
    gender: "Male",
    category: "Sports",
  },
];

const schoolColumns = [
  { name: "Donation", uid: "name" },
  { name: "Supplies", uid: "supplies" },
  { name: "Review", uid: "review" },
];

const schoolUsers = [
  { id: 1, name: "Donation 1", supplies: "Books" },
  { id: 1, name: "Donation 1", supplies: "Stationary" },
];

const clothesColumns = [
  { name: "Donation", uid: "name" },
  { name: "Age", uid: "age" },
  { name: "Gender", uid: "gender" },
  { name: "Season", uid: "season" },
  { name: "Review", uid: "review" },
];

const clothesUsers = [
  {
    id: 1,
    name: "Donation 1",
    age: "16",
    gender: "Male",
    season: "Summer",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
  },
  {
    id: 2,
    name: "Donation 2",
    age: "23",
    gender: "Female",
    season: "Autumn",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
  },
  {
    id: 3,
    name: "Donation 3",
    age: "4",
    gender: "Female",
    season: "Summer",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
  },
  {
    id: 4,
    name: "Donation 4",
    age: "34",
    gender: "Male",
    season: "Spring",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
  },
  {
    id: 5,
    name: "Donation 5",
    age: "20",
    gender: "Male",
    season: "Winter",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
  },
  {
    id: 6,
    name: "Donation 6",
    age: "11",
    gender: "Female",
    season: "Summer",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
  },
  {
    id: 7,
    name: "Donation 7",
    age: "43",
    gender: "Male",
    season: "Autumn",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
  },
  {
    id: 8,
    name: "Donation 8",
    age: "32",
    gender: "Female",
    season: "Spring",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
  },
  {
    id: 9,
    name: "Donation 9",
    age: "14",
    gender: "Female",
    season: "Autumn",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
  },
  {
    id: 10,
    name: "Donation 10",
    age: "9",
    gender: "Male",
    season: "Summer",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
  },
];

export {
  medicalCasesColumns,
  medicalCasesUsers,
  foodsColumns,
  foodsUsers,
  teachingPostsColumns,
  teachingPostsUsers,
  bloodDonationRequestsColumns,
  bloodDonationRequestsUsers,
  medicalSuppliesColumns,
  medicalSuppliesUsers,
  toysUsers,
  toysColumns,
  schoolUsers,
  schoolColumns,
  clothesColumns,
  clothesUsers,
};
