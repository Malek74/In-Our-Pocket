import { FaUsers } from "react-icons/fa";
import { CgOrganisation } from "react-icons/cg";
import { IoAnalyticsSharp } from "react-icons/io5";



const AdminElements= [
    {
        id: 1,
        title: "Organizations Management",
        icon: <CgOrganisation /> ,
        link: "./organisationsViewer"
    },
    {
        id: 2,
        title: "Donors Management",
        icon: <FaUsers />, 
        link: "./donorViewer"
    },
    {
        id: 3,
        title: "Analytics",
        icon: <IoAnalyticsSharp />, 
        link: "./AdminAnalytics"
    }

];

export default AdminElements;