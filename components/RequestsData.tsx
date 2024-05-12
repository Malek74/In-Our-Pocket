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
        parseInt(user[column1]) >= val1 &&
        parseInt(user[column1]) <= val2
    );
  }
  if (column1 !== "null" && column2 !== "null" && column3 === "null") {
    let val1 = parseInt(value1.split("-")[0]);
    let val2 = parseInt(value1.split("-")[1]);

    return users.filter(
      (user) =>
        user[column2].toLowerCase().includes(value2.toLowerCase()) &&
        parseInt(user[column1]) >= val1 &&
        parseInt(user[column1]) <= val2
    );
  }

  let val1 = parseInt(value1.split("-")[0]);
  let val2 = parseInt(value1.split("-")[1]);

  // All columns are provided
  return users.filter(
    (user) =>
      parseInt(user[column1]) >= val1 &&
      parseInt(user[column1]) <= val2 &&
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
  { name: "Request", uid: "name" },
  { name: "Medical Specialty", uid: "medicalspecialty" },
  { name: "Organisation", uid: "organisation" },
  { name: "Governorate", uid: "governorate" },
  { name: "Area", uid: "area" },
  { name: "Review", uid: "review" },
];

const medicalCasesUsers = [
  {
    id: 1,
    name: "Request 1",
    medicalspecialty: "Dentist",
    organisation: "Organization 1",
    governorate: "Cairo",
    area: "Tagamoa",
    link: "./MedicalCase",
  },
  {
    id: 2,
    name: "Request 2",
    medicalspecialty: "Surgeon",
    organisation: "Organization 2",
    governorate: "Cairo",
    area: "Madinet Nasr",
  },
  {
    id: 3,
    name: "Request 3",
    medicalspecialty: "Dentist",
    organisation: "Organization 3",
    governorate: "Alexandria",
    area: "Area 1",
  },
];

const foodsColumns = [
  { name: "Request", uid: "name" },
  { name: "Food Type", uid: "foodtype" },
  { name: "Review", uid: "review" },
];

const foodsUsers = [
  { id: 1, name: "Canned Beans", foodtype: "Canned Foods", link:"./FoodDetails" },
  { id: 2, name: "Request 2", foodtype: "Fruits and Vegetables" },
  { id: 3, name: "Request 3", foodtype: "Fresh Meals" },
  { id: 4, name: "Request 4", foodtype: "Baked Goods" },
];

const teachingPostsColumns = [
  { name: "Request", uid: "name" },
  { name: "Subject", uid: "subject" },
  { name: "Governorate", uid: "governorate" },
  { name: "Area", uid: "area" },
  { name: "Review", uid: "review" },
];

const teachingPostsUsers = [
  {
    id: 1,
    name: "Request 1",
    subject: "Maths",
    governorate: "Cairo",
    area: "Tagamoa",
    link:"./TeachingPost",
  },
  {
    id: 2,
    name: "Request 2",
    subject: "English",
    governorate: "ALexandria",
    area: "area 1",
  },
  {
    id: 3,
    name: "Request 3",
    subject: "Science",
    governorate: "Cairo",
    area: "Madinet Nasr",
  },
];

const bloodDonationRequestsColumns = [
  { name: "Request", uid: "name" },
  { name: "Hospital", uid: "hospital" },
  { name: "Governorate", uid: "governorate" },
  { name: "Area", uid: "area" },
  { name: "Review", uid: "review" },
];

const bloodDonationRequestsUsers = [
  {
    id: 1,
    name: "Omar",
    hospital: "Air Force Hospital",
    governorate: "Cairo",
    area: "5th Settlement",
    link: "./BloodDonation",
  },
  {
    id: 2,
    name: "Request 2",
    hospital: "Hospital 2",
    governorate: "Alexandria",
    area: "area 1",
  },
  {
    id: 3,
    name: "Request 3",
    hospital: "Hospital 3",
    governorate: "Cairo",
    area: "Madinet Nasr",
  },
];

const medicalSuppliesColumns = [
  { name: "Request", uid: "name" },
  { name: "Supplies", uid: "supplies" },
  { name: "Review", uid: "review" },
];

const medicalSuppliesUsers = [
  { id: 1, name: "Stethoscope", supplies: "Medical Devices", link:"MedicalSuppliesDetails"},
  { id: 2, name: "Request 2", supplies: "Medical Equipment" },
  { id: 3, name: "Request 3", supplies: "Medication" },
];

const toysColumns = [
  { name: "Request", uid: "name" },
  { name: "Age", uid: "age" },
  { name: "Gender", uid: "gender" },
  { name: "Category", uid: "category" },
  { name: "Review", uid: "review" },
];

const toysUsers = [
  {
    id: 1,
    name: "Barbie Doll",
    age: "3",
    gender: "Female",
    category: "Doll",
    link: "./ToyDetails",
  },
  {
    id: 2,
    name: "Request 1",
    age: "12",
    gender: "Male",
    category: "Board Games",
  },
  {
    id: 3,
    name: "Request 2",
    age: "5",
    gender: "Female",
    category: "Dolls",
  },
  {
    id: 4,
    name: "Request 3",
    age: "7",
    gender: "Male",
    category: "Cars",
  },
  {
    id: 5,
    name: "Request 4",
    age: "10",
    gender: "Female",
    category: "Stuffed Toys",
  },
  {
    id: 6,
    name: "Request 5",
    age: "14",
    gender: "Male",
    category: "Outdoor",
  },
  {
    id: 7,
    name: "Request 6",
    age: "15",
    gender: "Male",
    category: "Sports",
  },
];

const schoolColumns = [
  { name: "Request", uid: "name" },
  { name: "Supplies", uid: "supplies" },
  { name: "Review", uid: "review" },
];

const schoolUsers = [
  { id: 1, name: "Harry Potter", supplies: "Books", link: "./BookDetails" },
  {
    id: 2,
    name: "Black Pens",
    supplies: "Stationary",
    link: "./StationaryDetails",
  },
];

const clothesColumns = [
  { name: "Request", uid: "name" },
  { name: "Age", uid: "age" },
  { name: "Gender", uid: "gender" },
  { name: "Season", uid: "season" },
  { name: "Review", uid: "review" },
];

const clothesUsers = [
  {
    id: 1,
    name: "Jeans",
    age: "14",
    gender: "Male",
    season: "Summer",
    link:"./clothes"
  },
  {
    id: 2,
    name: "Request 1",
    age: "16",
    gender: "Male",
    season: "Summer",
  },
  {
    id: 3,
    name: "Request 2",
    age: "23",
    gender: "Female",
    season: "Autumn",
  },
  {
    id: 4,
    name: "Request 3",
    age: "4",
    gender: "Female",
    season: "Summer",
  },
  {
    id: 5,
    name: "Request 4",
    age: "34",
    gender: "Male",
    season: "Spring",
  },
  {
    id: 6,
    name: "Request 5",
    age: "20",
    gender: "Male",
    season: "Winter",
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