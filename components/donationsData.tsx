import { BiSolidDonateBlood } from "react-icons/bi";

export function filterDonations(donations: any[], column1: string, value1: any,column2:string,value2:string) {
  console.log("gowa function",column1,value1,column2,value2)
  if(column1==="null" && column2==="null"){
    return donations;
  }
  if(column1==="null" && column2!=="null"){
    return donations.filter(donation =>
      donation[column2].toLowerCase().includes(value2.toLowerCase()));
  }
  if(column1!=="null" && column2==="null"){
    return donations.filter(donation =>
      donation[column1].toLowerCase().includes(value1.toLowerCase()));
  }
  if(column1!=="null" && column2!=="null"){
    return donations.filter(donation =>
      donation[column1].toLowerCase().includes(value1.toLowerCase()) && donation[column2].toLowerCase().includes(value2.toLowerCase()));
  }
          
}

export function searchDonations(donations: any[], query: string) {
  if(query.length === 0){
    return donations;
  
  }else{
    return donations.filter(donation =>
      donation.donation.toLowerCase().includes(query.toLowerCase())
    );
  }
} 


export const columns = [
    { name: "Donation", uid: "donation" },
    { name: "Category", uid: "Category" },
    { name: "Status", uid: "status" },
    { name: "Actions", uid: "actions" },
  ];
  

  export const originalSet = [
        {
          id: 1,
          donation: "B+ Blood Donation",
          Category: "Blood Donation",
          status: "Pending",
          avatar:<BiSolidDonateBlood/>
         },
        {
          id: 2,
          donation: "Winter Clothes Donation",
          Category: "Clothes",
          status: "Pending",
          avatar:<BiSolidDonateBlood/>

        },
        {
          id: 3,
          donation: "Toy Drive for Children",
          Category: "Toys",
          status: "Fulfilled",
          avatar:<BiSolidDonateBlood/>

        },
        {
          id: 4,
          donation: "Food Drive for Homeless",
          Category: "Food",
          status: "Pending",
          avatar:<BiSolidDonateBlood/>

        },
        {
          id: 5,
          donation: "Medical Supplies Donation",
          Category: "Medical Supplies",
          status: "Fulfilled",
          avatar:<BiSolidDonateBlood/>

        },
        {
          id: 6,
          donation: "Back-to-School Supplies Drive",
          Category: "School Supplies",
          status: "Pending",
          avatar:<BiSolidDonateBlood/>

        },
        {
          id: 7,
          donation: "O- Blood Donation",
          Category: "Blood Donation",
          status: "Fulfilled",
          avatar:<BiSolidDonateBlood/>

        },
        {
          id: 8,
          donation: "Summer Clothes Donation",
          Category: "Clothes",
          status: "Fulfilled",
          avatar:<BiSolidDonateBlood/>

        },
        {
          id: 9,
          donation: "Toy Collection for Orphanage",
          Category: "Toys",
          status: "Pending",
          avatar:<BiSolidDonateBlood/>

        },
        {
          id: 10,
          donation: "Emergency Food Drive",
          Category: "Food",
          status: "Fulfilled",
          avatar:<BiSolidDonateBlood/>

        },
        // Add more users as needed
      ];

      
  export const dataAfterDelete = [
   
    {
      id: 2,
      donation: "Winter Clothes Donation",
      Category: "Clothes",
      status: "Pending",
      avatar:<BiSolidDonateBlood/>

    },
    {
      id: 3,
      donation: "Toy Drive for Children",
      Category: "Toys",
      status: "Fulfilled",
      avatar:<BiSolidDonateBlood/>

    },
    {
      id: 4,
      donation: "Food Drive for Homeless",
      Category: "Food",
      status: "Pending",
      avatar:<BiSolidDonateBlood/>

    },
    {
      id: 5,
      donation: "Medical Supplies Donation",
      Category: "Medical Supplies",
      status: "Fulfilled",
      avatar:<BiSolidDonateBlood/>

    },
    {
      id: 6,
      donation: "Back-to-School Supplies Drive",
      Category: "School Supplies",
      status: "Pending",
      avatar:<BiSolidDonateBlood/>

    },
    {
      id: 7,
      donation: "O- Blood Donation",
      Category: "Blood Donation",
      status: "Fulfilled",
      avatar:<BiSolidDonateBlood/>

    },
    {
      id: 8,
      donation: "Summer Clothes Donation",
      Category: "Clothes",
      status: "Fulfilled",
      avatar:<BiSolidDonateBlood/>

    },
    {
      id: 9,
      donation: "Toy Collection for Orphanage",
      Category: "Toys",
      status: "Pending",
      avatar:<BiSolidDonateBlood/>

    },
    {
      id: 10,
      donation: "Emergency Food Drive",
      Category: "Food",
      status: "Fulfilled",
      avatar:<BiSolidDonateBlood/>

    },
    // Add more users as needed
  ];