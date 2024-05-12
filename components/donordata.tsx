import exp from "constants";

export function filterDonors(donors: any[], column1: string, value1: any,column2:string,value2:string) {
  console.log("gowa function",column1,value1,column2,value2)
  if(column1==="null" && column2==="null"){
    return donors;
  }
  if(column1==="null" && column2!=="null"){
    return donors.filter(donor =>
      donor[column2].toLowerCase().includes(value2.toLowerCase()));
  }
  if(column1!=="null" && column2==="null"){
    return donors.filter(donor =>
      donor[column1].toLowerCase().includes(value1.toLowerCase()));
  }
  if(column1!=="null" && column2!=="null"){
    return donors.filter(donor =>
      donor[column1].toLowerCase().includes(value1.toLowerCase()) && donor[column2].toLowerCase().includes(value2.toLowerCase()));
  }
          
}

export function searchDonors(donors: any[], query: string) {
  if(query.length === 0){
    return donors;
  
  }else{
    return donors.filter(donor =>
      donor.name.toLowerCase().includes(query.toLowerCase())
    );
  }
} 


const columns = [
    { name: "Donor name", uid: "name" },
    { name: "Expertise", uid: "exp" },
    { name: "Status", uid: "status" },
    { name: "ACTIONS", uid: "actions" },
  ];
  
  const originalSet = [
    {
      id: 1,
      name: "John Doe",
      exp: "Teacher",
      status: "active",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
      address: "123 Main Street, Cityville, State",
      age: "25",
      gender: "Male",
      email: "john.doe@teachers.org",
      number: "+20 123 456 7890",
      dob: "1996-01-01"
    },
    {
      id: 2,
      name: "Jane Smith",
      exp: "Healthcare Professional",
      status: "pending",
      avatar: "https://i.pravatar.cc/150?u=a04258a2462d826712d",
      address: "123 Main Street, Cityville, State",
      age: "30",
      gender: "Female",
      email: "jane.smith@healthcare.org",
      number: "+20 123 456 7890",
      dob: "1991-01-01"
    },
    {
      id: 3,
      name: "Michael Johnson",
      exp: "Regular Donor",
      status: "active",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
      address: "123 Main Street, Cityville, State",
      age: "35",
      gender: "Male",
      email: "michael.johnson@donors.org",
      number: "+20 123 456 7890",
      dob: "1986-01-01"
    },
    {
      id: 4,
      name: "Emily Davis",
      exp: "Healthcare Professional",
      status: "pending",
      avatar: "https://i.pravatar.cc/150?u=a04258114e29026302d",
      address: "123 Main Street, Cityville, State",
      age: "40",
      gender: "Female",
      email: "emily.davis@healthcare.org",
      number: "+20 123 456 7890",
      dob: "1981-01-01"
    },
    {
      id: 5,
      name: "Sarah Brown",
      exp: "Teacher",
      status: "active",
      avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
      address: "123 Main Street, Cityville, State",
      age: "45",
      gender: "Female",
      email: "sarah.brown@teachers.org",
      number: "+20 123 456 7890",
      dob: "1976-01-01"
    },
    {
      id: 6,
      name: "Matthew Clark",
      exp: "Regular Donor",
      status: "active",
      avatar: "https://i.pravatar.cc/150?u=a04258114e29026708c",
      address: "123 Main Street, Cityville, State",
      age: "50",
      gender: "Male",
      email: "matthew.clark@donors.org",
      number: "+20 123 456 7890",
      dob: "1971-01-01"
    },
    {
      id: 7,
      name: "Emma Wilson",
      exp: "Teacher",
      status: "pending",
      avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
      address: "123 Main Street, Cityville, State",
      age: "55",
      gender: "Female",
      email: "emma.wilson@teachers.org",
      number: "+20 123 456 7890",
      dob: "1966-01-01"
    },
    {
      id: 8,
      name: "Christopher Martinez",
      exp: "Healthcare Professional",
      status: "active",
      avatar: "https://i.pravatar.cc/150?u=a04258a2462d826712d",
      address: "123 Main Street, Cityville, State",
      age: "60",
      gender: "Male",
      email: "christopher.martinez@healthcare.org",
      number: "+20 123 456 7890",
      dob: "1961-01-01"
    },
    {
      id: 9,
      name: "Olivia Taylor",
      exp: "Regular Donor",
      status: "active",
      avatar: "https://i.pravatar.cc/150?u=a04258a2462d826712d",
      address: "123 Main Street, Cityville, State",
      age: "65",
      gender: "Female",
      email: "olivia.taylor@donors.org",
      number: "+20 123 456 7890",
      dob: "1956-01-01"
    },
    {
      id: 10,
      name: "Daniel Anderson",
      exp: "Healthcare Professional",
      status: "active",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
      address: "123 Main Street, Cityville, State",
      age: "70",
      gender: "Male",
      email: "daniel.anderson@healthcare.org",
      number: "+20 123 456 7890",
      dob: "1951-01-01"
    }
  ];

  export { columns, originalSet };

  