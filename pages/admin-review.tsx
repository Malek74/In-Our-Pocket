import AdminTable from "@/components/admin-table";
import { Navbar } from "@/components/navbar";
import Sidebar from "@/components/sideBar";
import { AdminPanelSettingsTwoTone } from "@mui/icons-material";

export default function adminReviewPage() {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar></Navbar>
      <div className="flex flex-row flex-1">
        <div className="flex-initial w-[250px]">
          <Sidebar></Sidebar>
        </div>
        <div>
          <AdminTable></AdminTable>
        </div>
      </div>
    </div>
  );
}
