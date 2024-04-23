import {Menu} from "antd";
import './App.css';
import HomeIcon from '@mui/icons-material/Home';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import BrowseGalleryIcon from '@mui/icons-material/BrowseGallery';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import {Route,Routes,useNavigate} from 'react-router-dom'
import Attendence from "./components/Attendence";
//import Files from "./components/Files";
import Leavetracker from"./components/Leavetracker";
import Performane from "./components/Performane";
import Selfservice from "./components/Selfservice";
import Timetracker from "./components/Timetracker";
import EmployeeFiles from "./components/EmployeeFiles";
import OrganisationFiles from "./components/OrganisationFiles";
import Navbar from "./components/Header";
import Footer from "./components/Footer";
import ListView from "./components/ListView";
import Holidays from "./components/Holidays";
import CalendarView from "./components/CalendarView";
import LeaveApplication from "./components/LeaveApplication";
import Header from "./components/Header";
function App() {
 
  return (
    <div style={{display:'flex',flexDirection : 'column',flex: 1,height:'100vh'}}>
     <Header/>
        <div style={{display:'flex',flexDirection : 'row',flex: 1}}>
          <SideMenu></SideMenu>
          <Content></Content>
        </div>
      <Footer/>
    </div>
 
  );
}
 

 
function SideMenu(){
  const navigate=useNavigate();
  return(
    <div>
         <div style={{display:'flex',flexDirection : 'row'}}>
        <Menu
        onClick={({key})=>{
          navigate(key)
        }}
        items={[{label : "Home",key : "/",icon:<HomeIcon></HomeIcon>},
        {label : "self-service",key : "/self_service",icon:<ManageAccountsIcon></ManageAccountsIcon>},
        {label : "Leave-Tracker",key : "/leave_tracker",icon:<BrowseGalleryIcon></BrowseGalleryIcon>, children :[{label:"ListView",key:"/listView"},{label:"CalendarView",key:"/calendarView"}, {label:"Holidays", key:"/holidays"}, {label:"LeaveApplication",}]},
        {label : "Time-Tracker",key : "/time_tracker",icon:<AccessAlarmsIcon></AccessAlarmsIcon>},
        {label : "Attendence",key : "/attendence",icon:<FolderSharedIcon></FolderSharedIcon>},
        {label : "Performance",key : "/performance",icon:<EmojiEventsIcon></EmojiEventsIcon>,},
        {label : "Files",key : "/files",icon:<InsertDriveFileIcon></InsertDriveFileIcon>,children :[{label:"Organisation_Files",key:"/organisation_files"},{label:"Employee_Files",key:"/employee_files"}]}
      ]}>
        </Menu>
    </div>
    </div>
  )
}
 
function Content(){
  return(
    <div>
      <Routes>
        <Route path="/" element={<div>Home</div>}></Route>
        <Route path="/self_service" element={<Selfservice></Selfservice>}></Route>
        <Route path="/leave_tracker" element={<Leavetracker></Leavetracker>}></Route>
        <Route path="/time_tracker" element={<Timetracker></Timetracker>}></Route>
        <Route path="/attendence" element={<Attendence></Attendence>}></Route>
        <Route path="/performance" element={<Performane></Performane>}></Route>
        <Route path="/organisation_files" element={<OrganisationFiles></OrganisationFiles>}></Route>
        <Route path="/employee_files" element={<EmployeeFiles></EmployeeFiles>}></Route>
        <Route path="/ListView" element={<ListView></ListView>}></Route>
        <Route path="/CalendarView" element={<CalendarView></CalendarView>}></Route>
        <Route path="/Holidays" element={<Holidays></Holidays>}></Route>
        <Route path="/LeaveApplication" element={<LeaveApplication></LeaveApplication>}></Route>
      </Routes>
    </div>
  )
}
 
export default App;
 