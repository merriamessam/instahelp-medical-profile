
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  User, 
  FileText, 
  Stethoscope, 
  Syringe, 
  Activity, 
  Download, 
  HeartPulse, 
  Thermometer, 
  ShieldAlert,
  LogOut
} from 'lucide-react';

export default function MedicalHistory() {
  const navigate = useNavigate();

  const handleDownload = (reportName: string) => {
    alert(`Downloading ${reportName}... (Simulation)`);
  };

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 font-sans">
      {/* Navbar */}
      <nav className="bg-slate-900 text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <button 
                onClick={() => navigate('/')}
                className="mr-4 p-2 rounded-full hover:bg-slate-800 transition-colors"
                title="Back to Emergency Profile"
              >
                <ArrowLeft className="w-5 h-5 text-slate-300" />
              </button>
              <h1 className="text-xl font-bold tracking-wide flex items-center">
                <HeartPulse className="w-6 h-6 mr-2 text-blue-400" />
                InstaHelp <span className="font-light ml-2 text-slate-400 hidden sm:inline">| Doctor Portal</span>
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-slate-300 hidden sm:block">Dr. Smith</span>
              <button 
                onClick={handleLogout}
                className="flex items-center text-sm bg-red-600 hover:bg-red-700 px-3 py-1.5 rounded transition-colors font-medium"
              >
                <LogOut className="w-4 h-4 mr-1 sm:mr-2" />
                <span className="hidden sm:inline">Secure Logout</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* Patient Quick Info Header */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-slate-200 overflow-hidden flex-shrink-0">
              <img 
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop" 
                alt="Jane Doe" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Jane Doe</h2>
              <p className="text-slate-500">DOB: 12 May 1991 (32yo) • ID: PAT-8492-B</p>
            </div>
          </div>
          <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
            <span className="bg-red-100 text-red-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider whitespace-nowrap">Penicillin Allergy</span>
            <span className="bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider whitespace-nowrap">Type 1 Diabetes</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column */}
          <div className="lg:col-span-1 space-y-8">
            
            {/* Personal Info */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h3 className="flex items-center text-lg font-bold text-slate-800 border-b pb-3 mb-4">
                <User className="w-5 h-5 mr-2 text-blue-600" />
                Personal Details
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-slate-500 block text-xs uppercase font-semibold">Full Name</span>
                  <span className="font-medium">Jane Doe</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-xs uppercase font-semibold">Blood Type</span>
                  <span className="font-medium text-red-600 font-bold">O Negative</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-xs uppercase font-semibold">Emergency Contact</span>
                  <span className="font-medium">John Doe (Husband) - 555-0198</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-xs uppercase font-semibold">Address</span>
                  <span className="font-medium">123 Maple Street, Seattle, WA</span>
                </div>
              </div>
            </div>

            {/* Doctor Notes */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h3 className="flex items-center text-lg font-bold text-slate-800 border-b pb-3 mb-4">
                <FileText className="w-5 h-5 mr-2 text-blue-600" />
                Recent Doctor Notes
              </h3>
              <div className="space-y-4">
                <div className="bg-slate-50 p-3 rounded border border-slate-100">
                  <p className="text-xs text-slate-500 mb-1">Dr. Allen - Oct 12, 2023</p>
                  <p className="text-sm text-slate-700">Patient's A1C levels are stable. Advised to maintain current insulin regimen. Experiencing mild seasonal asthma symptoms.</p>
                </div>
                <div className="bg-slate-50 p-3 rounded border border-slate-100">
                  <p className="text-xs text-slate-500 mb-1">Dr. Chen - Jun 05, 2023</p>
                  <p className="text-sm text-slate-700">Annual checkup. Vitals normal. Renewed Albuterol inhaler prescription.</p>
                </div>
              </div>
            </div>

            {/* Digital Reports */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h3 className="flex items-center text-lg font-bold text-slate-800 border-b pb-3 mb-4">
                <Download className="w-5 h-5 mr-2 text-blue-600" />
                Digital Reports
              </h3>
              <div className="space-y-3">
                <button 
                  onClick={() => handleDownload('Blood_Panel_Q3_2023.pdf')}
                  className="w-full flex items-center justify-between p-3 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors group"
                >
                  <div className="flex items-center text-sm font-medium text-slate-700">
                    <FileText className="w-4 h-4 mr-2 text-slate-400 group-hover:text-blue-500" />
                    Blood Panel Q3 2023
                  </div>
                  <Download className="w-4 h-4 text-slate-400" />
                </button>
                <button 
                  onClick={() => handleDownload('MRI_Scan_Knee_2022.pdf')}
                  className="w-full flex items-center justify-between p-3 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors group"
                >
                  <div className="flex items-center text-sm font-medium text-slate-700">
                    <FileText className="w-4 h-4 mr-2 text-slate-400 group-hover:text-blue-500" />
                    MRI Knee Scan 2022
                  </div>
                  <Download className="w-4 h-4 text-slate-400" />
                </button>
              </div>
            </div>

          </div>

          {/* Right Column */}
          <div className="lg:col-span-2 space-y-8">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Clinical Diagnosis */}
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <h3 className="flex items-center text-lg font-bold text-slate-800 border-b pb-3 mb-4">
                  <Stethoscope className="w-5 h-5 mr-2 text-blue-600" />
                  Clinical Diagnoses
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <ShieldAlert className="w-4 h-4 mr-2 text-amber-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-slate-800">Type 1 Diabetes Mellitus</p>
                      <p className="text-xs text-slate-500">Diagnosed: 2005 • Active</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ShieldAlert className="w-4 h-4 mr-2 text-amber-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-slate-800">Asthma (Exercise-induced)</p>
                      <p className="text-xs text-slate-500">Diagnosed: 1998 • Managed</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ShieldAlert className="w-4 h-4 mr-2 text-red-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-slate-800">Severe Penicillin Allergy</p>
                      <p className="text-xs text-slate-500">Anaphylactic reaction • Lifelong</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Surgeries & Vaccinations */}
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex flex-col gap-6">
                <div>
                  <h3 className="flex items-center text-lg font-bold text-slate-800 border-b pb-2 mb-3">
                    <Activity className="w-5 h-5 mr-2 text-blue-600" />
                    Past Surgeries
                  </h3>
                  <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
                    <li>Appendectomy (2015)</li>
                    <li>ACL Reconstruction - Right Knee (2018)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="flex items-center text-lg font-bold text-slate-800 border-b pb-2 mb-3">
                    <Syringe className="w-5 h-5 mr-2 text-blue-600" />
                    Vaccinations
                  </h3>
                  <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
                    <li>COVID-19 Bivalent Booster (Nov 2023)</li>
                    <li>Influenza Quadrivalent (Oct 2023)</li>
                    <li>Tetanus (Tdap) (2020)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Vitals Table */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="p-6 border-b border-slate-200 bg-slate-50">
                <h3 className="flex items-center text-lg font-bold text-slate-800">
                  <Thermometer className="w-5 h-5 mr-2 text-blue-600" />
                  Historical Vital Signs
                </h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-slate-600">
                  <thead className="text-xs text-slate-700 uppercase bg-slate-100">
                    <tr>
                      <th className="px-6 py-3">Date</th>
                      <th className="px-6 py-3">Time</th>
                      <th className="px-6 py-3">Heart Rate</th>
                      <th className="px-6 py-3">SpO2</th>
                      <th className="px-6 py-3">Temp (°F)</th>
                      <th className="px-6 py-3">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-red-50 border-b border-red-100">
                      <td className="px-6 py-4 font-medium text-slate-900">Today</td>
                      <td className="px-6 py-4">14:32</td>
                      <td className="px-6 py-4 text-red-600 font-bold">142 bpm</td>
                      <td className="px-6 py-4 text-amber-600 font-bold">92%</td>
                      <td className="px-6 py-4">98.6</td>
                      <td className="px-6 py-4"><span className="bg-red-200 text-red-800 text-xs px-2 py-1 rounded font-bold">CRITICAL</span></td>
                    </tr>
                    <tr className="bg-amber-50 border-b border-amber-100">
                      <td className="px-6 py-4 font-medium text-slate-900">Today</td>
                      <td className="px-6 py-4">14:17</td>
                      <td className="px-6 py-4 font-bold">110 bpm</td>
                      <td className="px-6 py-4">96%</td>
                      <td className="px-6 py-4">98.5</td>
                      <td className="px-6 py-4"><span className="bg-amber-200 text-amber-800 text-xs px-2 py-1 rounded font-bold">WARNING</span></td>
                    </tr>
                    <tr className="bg-white border-b border-slate-100 hover:bg-slate-50">
                      <td className="px-6 py-4">Oct 12, 2023</td>
                      <td className="px-6 py-4">09:15</td>
                      <td className="px-6 py-4">72 bpm</td>
                      <td className="px-6 py-4">99%</td>
                      <td className="px-6 py-4">98.4</td>
                      <td className="px-6 py-4"><span className="bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded font-medium">NORMAL</span></td>
                    </tr>
                    <tr className="bg-white border-b border-slate-100 hover:bg-slate-50">
                      <td className="px-6 py-4">Jun 05, 2023</td>
                      <td className="px-6 py-4">10:30</td>
                      <td className="px-6 py-4">68 bpm</td>
                      <td className="px-6 py-4">98%</td>
                      <td className="px-6 py-4">98.2</td>
                      <td className="px-6 py-4"><span className="bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded font-medium">NORMAL</span></td>
                    </tr>
                    <tr className="bg-white border-b border-slate-100 hover:bg-slate-50">
                      <td className="px-6 py-4">Dec 10, 2022</td>
                      <td className="px-6 py-4">14:00</td>
                      <td className="px-6 py-4">75 bpm</td>
                      <td className="px-6 py-4">99%</td>
                      <td className="px-6 py-4">98.6</td>
                      <td className="px-6 py-4"><span className="bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded font-medium">NORMAL</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
