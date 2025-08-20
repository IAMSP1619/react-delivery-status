import React from "react";
import NoteInput from "./NoteInput";
import Date_Time from "./Date_Time";
import './App.css'
const App = () => {
  const data = [
    { package: "axfdbapi", version: "21.4.0-13", status: "Delivered", remarks: "N/A" },
    { package: "axfinfra", version: "21.0.3-12", status: "Delivered", remarks: "N/A" },
    { package: "axfdss", version: "21.4.0-18", status: "Delivered", remarks: "N/A" },
    { package: "axfdba", version: "21.4.0-11", status: "Delivered", remarks: "N/A" },
    { package: "axfapl", version: "21.4.0-16", status: "Delivered", remarks: "N/A" },
    { package: "axfclr", version: "20.0.0-15", status: "Delivered", remarks: "N/A" },
    { package: "axfjcs9", version: "21.4.0-22", status: "Delivered", remarks: "N/A" },
    { package: "axfweb", version: "21.4.0-11", status: "Delivered", remarks: "N/A" },
    { package: "aovapl", version: "21.4.0-20", status: "Ready for Delivery", remarks: "Waiting for Dev confirmation for new build/delivery." },
    { package: "aowapl", version: "21.4.0-14", status: "Pending", remarks: "Waiting for Dev confirmation for new build/delivery." }
  ];


  return (
    <>
    <Date_Time />
    
    <div>

      <h2>Package Delivery Status</h2>
      <p>Hi All,</p>
      <p>Please find below pkg delivery status for RHEL8 21.4.0/21.0.0 Linux GLOBAL/WM packages-RHEL8 WM First setup testing.</p>
      <NoteInput />

      <table border="1" style={{borderCollapse:"collapse", width:"75%"}}>
          <thead style={{backgroundColor:"pink"}}>
            <tr>
              <th>Package</th>
              <th>Version</th>
              <th>Delivery Satus</th>
              <th>Remarks</th>
            </tr>
           
          </thead>

          <tbody >

            {data.map((row,index)=>(
              
              <tr key={index}>
               <td>{row.package}</td>
               <td>{row.version}</td>
               <td style={{color:row.status==="Delivered" ? "green" 
                                : row.status==="Ready for deliver" ? "orange"
                                 : row.status==="Pending" ? "red" : "orange",
                           fontWeight:"bold"}}>{row.status}</td>
               <td>{row.remarks}</td>
              </tr>

            ))}
            
            
          </tbody>
         
      </table><br/>
         
      <p>Thanks & Regards,</p>
      <h4>Sudharshan</h4>
    </div>
    
    
    </>
  );
};

export default App;