const columns = [

  { name: "Type", uid: "type" },
  { name: "From", uid: "from" },
  { name: "To", uid: "to" },
  { name: "Status", uid: "status" },
  { name: "Arrival time estimate", uid: "arrival_time_estimate" },
  { name: "Actions", uid: "actions" },

];

const users = [
  {
    id: 1,
    type: "Clothes",
    to: "Maadi",
    from: "Nasr city",
    status: 40,
    arrival_time_estimate: "2 day(s) 12 hour(s)",
  },
  {
    id: 2,
    type: "Toys",
    to: "New cairo",
    from: "Zamalek",
    status: 10,
    arrival_time_estimate: "4 day(s) 0 hour(s)",


  },
  {
    id: 3,
    type: "Blood",
    to: "Heliopolis",
    from: "Maadi",
    status: 30,
    arrival_time_estimate: "2 day(s) 16 hour(s)",


  },
  {
    id: 4,
    type: "Clothes",
    to: "Nasr city",
    from: "6th of october",
    status: 15,
    arrival_time_estimate: "4 day(s) 13 hour(s)",

  },
  {
    id: 5,
    type: "Food",
    to: "Sheikh zayed",
    from: "Maadi",
    status: 55,
    arrival_time_estimate: "2 day(s) 0 hour(s)",


  },
  {
    id: 6,
    type: "Medical Supplies",
    to: "New cairo",
    from: "Zamalek",
    status: 5,
    arrival_time_estimate: "5 day(s) 20 hour(s)",

  },
  {
    id: 7,
    type: "School Supplies",
    to: "Heliopolis",
    from: "New cairo",
    status: 30,
    arrival_time_estimate: "2 day(s) 6 hour(s)",


  },
  {
    id: 8,
    type: "Food",
    to: "Maadi",
    from: "6th of October",
    status: 60,
    arrival_time_estimate: "1 day(s) 18 hour(s)",



  },
  {
    id: 9,
    type: "Blood",
    to: "Nasr city",
    from: "Sheikh zayed",
    status: 75,
    arrival_time_estimate: "0 day(s) 17 hour(s)",


  },
  {
    id: 10,
    type: "Medical supplies",
    to: "Zamalek",
    from: "New cairo",
    status: 80,
    arrival_time_estimate: "0 day(s) 8 hour(s)",


  },
];

export { columns, users };