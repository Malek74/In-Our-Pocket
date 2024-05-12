import AdminElements from "@/components/AdminsideBarElements";
import AdminTable from "@/components/admin-table";
import { Navbar } from "@/components/navbar";
import Sidebar from "@/components/sideBar";
import { AdminPanelSettingsTwoTone } from "@mui/icons-material";

export default function adminReviewPage() {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar user="admin"></Navbar>
      <div className="flex flex-row flex-1">
        <div className="flex-initial w-[250px]">
          <Sidebar elements={AdminElements}></Sidebar>
        </div>
        <div>
          <AdminTable></AdminTable>
        </div>
      </div>
    </div>
  );
}
