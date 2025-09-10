
import React from "react";

type TrainStatus = "Fit" | "Unfit";
type BrandingStatus = "Compliant" | "Non-Compliant";
type CleaningStatus = "Cleaned" | "Pending";
type JobStatus = "Closed" | "Open";
type OverrideStatus = "None" | "Approved" | "Rejected";

interface TrainRow {
  id: string;
  assignment: string;
  fitness: TrainStatus;
  branding: BrandingStatus;
  mileage: string;
  cleaning: CleaningStatus;
  job: JobStatus;
  override: OverrideStatus;
  why: string;
}

// Sidebar Inline Component
function Sidebar() {
  const menu = ["Dashboard", "Upload Data", "Induction Plan", "History", "Admin", "Help"];
  return (
    <nav className="w-60 bg-white shadow p-6 flex flex-col min-h-screen">
      <div className="mb-8 font-bold text-xl text-blue-600">InductFlow</div>
      <ul className="space-y-4">
        {menu.map(item => (
          <li key={item}
            className={`hover:text-blue-500 cursor-pointer ${item === "Induction Plan" ? "font-bold text-black bg-gray-100 p-2 rounded" : ""}`}>
            {item}
          </li>
        ))}
      </ul>
      <div className="flex-grow" />
      <div className="text-xs text-gray-400">Made with <span className="text-violet-500 font-bold">♥️</span></div>
    </nav>
  );
}

// Data Upload Inline Component
function DataUpload() {
  return (
    <div className="bg-white rounded-lg shadow p-6 mb-6">
      <h2 className="font-semibold mb-4">Data Upload</h2>
      <div className="flex flex-col items-center gap-4">
        <img src="/upload-icon.svg" alt="Upload" className="w-16 h-16" />
        <form className="flex flex-col md:flex-row items-center gap-2">
          <input type="file" accept=".csv,.xlsx" className="border p-2 rounded text-sm" />
          <button className="bg-blue-600 text-white px-4 py-2 rounded" type="button">Upload</button>
        </form>
      </div>
    </div>
  );
}

// Induction Plan Inline Component
const trainRows: TrainRow[] = [
  { id: "TRN-1001", assignment: "Service", fitness: "Fit", branding: "Compliant", mileage: "120k km", cleaning: "Cleaned", job: "Closed", override: "None", why: "" },
  { id: "TRN-1002", assignment: "Standby", fitness: "Unfit", branding: "Non-Compliant", mileage: "150k km", cleaning: "Pending", job: "Open", override: "None", why: "" },
  { id: "TRN-1003", assignment: "IBL", fitness: "Fit", branding: "Compliant", mileage: "80k km", cleaning: "Cleaned", job: "Closed", override: "Approved", why: "" },
  { id: "TRN-1004", assignment: "Service", fitness: "Fit", branding: "Compliant", mileage: "95k km", cleaning: "Cleaned", job: "Closed", override: "Approved", why: "" },
  { id: "TRN-1005", assignment: "Standby", fitness: "Fit", branding: "Compliant", mileage: "110k km", cleaning: "Cleaned", job: "Closed", override: "None", why: "" },
];

// Helper to manage complex conditional classes and improve readability
const getStatusClasses = (status: string) => {
  const baseClasses = "px-2 py-1 rounded text-xs font-semibold";
  switch (status) {
    case "Fit":
    case "Compliant":
      return `${baseClasses} bg-green-100 text-green-600`;
    case "Unfit":
    case "Non-Compliant":
      return `${baseClasses} bg-red-100 text-red-600`;
    case "Cleaned":
      return `px-2 py-1 rounded text-xs bg-green-50`;
    case "Pending":
      return `px-2 py-1 rounded text-xs bg-yellow-50`;
    case "Closed":
      return `px-2 py-1 rounded text-xs bg-gray-100`;
    case "Open":
      return `px-2 py-1 rounded text-xs bg-orange-100`;
    default:
      return `px-2 py-1 rounded text-xs bg-gray-50`;
  }
};

function InductionPlan() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="font-semibold mb-4">Induction Plan</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-2 py-2">Train ID</th>
              <th>Assignment</th>
              <th>Fitness Status</th>
              <th>Branding Status</th>
              <th>Mileage</th>
              <th>Cleaning Status</th>
              <th>Job-card Status</th>
              <th>Manual Override</th>
              <th>Why?</th>
            </tr>
          </thead>
          <tbody>
            {trainRows.map((t) => (
              <tr key={t.id}>
                <td className="px-2 py-1">{t.id}</td>
                <td>{t.assignment}</td>
                <td>
                  <span className={getStatusClasses(t.fitness)}>
                    {t.fitness}
                  </span>
                </td>
                <td>
                  <span className={getStatusClasses(t.branding)}>
                    {t.branding}
                  </span>
                </td>
                <td>{t.mileage}</td>
                <td>
                  <span className={getStatusClasses(t.cleaning)}>{t.cleaning}</span>
                </td>
                <td>
                  <span className={getStatusClasses(t.job)}>{t.job}</span>
                </td>
                <td>
                  <span className={`px-2 py-1 rounded text-xs
                   ${t.override === "Approved" ? "bg-green-200" : t.override === "Rejected" ? "bg-red-200" : "bg-gray-50"}`}>
                    {t.override}
                  </span>
                </td>
                <td>{t.why}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// History Log Inline Component
function HistoryLog() {
  const logs = [
    { date: "November 1st, 2023" },
    { date: "September 6th, 2025" },
  ];
  const items = [
    { id: "H-001", plan: "IND-2023-01", admin: "Admin Jane" },
    { id: "H-002", plan: "IND-2023-02", admin: "Ops Manager" },
    { id: "H-003", plan: "IND-2023-03", admin: "Admin Jane" },
    { id: "H-004", plan: "IND-2023-04", admin: "System" },
    { id: "H-005", plan: "IND-2023-05", admin: "Admin John" },
  ];
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="font-semibold mb-2">History Log</h3>
      <div className="mb-2 flex flex-col">
        {logs.map(log => (
          <div key={log.date} className="text-sm text-gray-500 font-medium">{log.date}</div>
        ))}
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-xs mt-2">
          <thead>
            <tr className="text-gray-400">
              <th className="text-left">ID</th>
              <th className="text-left">Plan ID</th>
              <th className="text-left">By</th>
            </tr>
          </thead>
          <tbody>
            {items.map(i => (
              <tr key={i.id}>
                <td>{i.id}</td>
                <td>{i.plan}</td>
                <td>{i.admin}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Override Log Inline Component
function OverrideLog() {
  const logs = [
    "2023-11-15 10:30 - Admin Jane Approved (Emergency service request for TRN-1003.)",
    "2023-11-12 14:00 - Ops Manager Rejected (Insufficient information for TRN-1002.)",
    "2023-11-08 09:45 - Admin Jane Approved (Expedited cleaning for TRN-1004.)"
  ];
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="font-semibold mb-2">Override Log</h3>
      <ul className="space-y-2 text-xs">
        {logs.map((log, i) => <li key={i}>{log}</li>)}
      </ul>
    </div>
  );
}

// Main Dashboard Page
export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="grid grid-cols-4 gap-6">
          <div className="col-span-3">
            <DataUpload />
            <InductionPlan />
          </div>
          <aside className="col-span-1 flex flex-col gap-6">
            <div className="bg-red-100 text-red-700 p-4 rounded-md shadow text-sm font-semibold mb-6">
              <div>⚠️ Critical Warning</div>
              <div>No available train meets brand + fitness for 6am slot.</div>
            </div>
            <HistoryLog />
            <OverrideLog />
          </aside>
        </div>
      </main>
    </div>
  );
}


