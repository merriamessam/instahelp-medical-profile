import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import QRCode from 'react-qr-code';
import { 
  Phone, 
  MapPin, 
  AlertTriangle, 
  CheckCircle2, 
  XCircle, 
  Activity, 
  Lock, 
  User, 
  Droplet
} from 'lucide-react';

export default function EmergencyProfile() {
  const navigate = useNavigate();
  const [currentUrl, setCurrentUrl] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username === 'doctor' && password === '1234') {
      navigate('/medical-history');
    } else {
      setLoginError(true);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-12">
      {/* Top Warning Bar */}
      <div className="bg-red-600 text-white text-center py-2 px-4 font-bold uppercase tracking-wider text-sm animate-pulse">
        Medical Emergency Profile - Authorized Access Only
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 mt-6 space-y-6">
        
        {/* 1. Profile Header */}
        <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-blue-600 flex flex-col md:flex-row items-center gap-6">
          <div className="w-32 h-32 rounded-full bg-slate-200 overflow-hidden flex-shrink-0 border-4 border-slate-100 shadow-inner">
            <img 
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop" 
              alt="Jane Doe" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl font-extrabold text-slate-800">Jane Doe</h1>
            <p className="text-lg text-slate-600 font-medium">Age: 32 • Female</p>
            <div className="mt-2 flex flex-wrap justify-center md:justify-start gap-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-red-100 text-red-800">
                <Droplet className="w-4 h-4 mr-1" /> Blood Type: O-
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-slate-100 text-slate-800">
                <User className="w-4 h-4 mr-1" /> Organ Donor
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center p-3 bg-slate-50 rounded-lg shadow-sm border border-slate-100">
            <p className="text-xs font-semibold text-slate-500 mb-2 text-center">Scan to open<br/>this page</p>
            {currentUrl && (
              <div className="bg-white p-1 rounded">
                <QRCode value={currentUrl} size={80} level="L" />
              </div>
            )}
          </div>
        </div>

        {/* 2 & 3. Action Buttons (Call / Map) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a href="tel:01202853771" className="flex items-center justify-center p-4 bg-red-600 hover:bg-red-700 text-white rounded-xl shadow-md transition-colors font-bold text-lg group">
            <Phone className="w-6 h-6 mr-3 group-hover:animate-bounce" />
            Call Emergency (01202853771)
          </a>
          <a href="https://maps.google.com/?q=current+location" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-md transition-colors font-bold text-lg">
            <MapPin className="w-6 h-6 mr-3" />
            Send Location
          </a>
        </div>

        {/* 4. Critical Warnings */}
        <div className="bg-amber-50 rounded-xl shadow-md border-l-4 border-amber-500 p-5">
          <h2 className="flex items-center text-xl font-bold text-amber-900 mb-3">
            <AlertTriangle className="w-6 h-6 mr-2 text-amber-600" />
            Critical Medical Warnings
          </h2>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-amber-900 font-medium">Severe Penicillin Allergy (Anaphylaxis)</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-amber-900 font-medium">Type 1 Diabetes - Insulin Dependent</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-amber-900 font-medium">History of Asthma</span>
            </li>
          </ul>
        </div>

        {/* 5. DO / DON'T Instructions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-md border-t-4 border-emerald-500 p-5">
            <h3 className="flex items-center text-lg font-bold text-emerald-800 mb-4">
              <CheckCircle2 className="w-5 h-5 mr-2 text-emerald-500" />
              DO (Immediate Actions)
            </h3>
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex items-start">
                <span className="text-emerald-500 font-bold mr-2">•</span>
                Check medical bracelet for insulin pump location
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 font-bold mr-2">•</span>
                Administer Glucagon if unconscious and hypoglycemic
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 font-bold mr-2">•</span>
                Keep patient upright if experiencing shortness of breath
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-xl shadow-md border-t-4 border-red-500 p-5">
            <h3 className="flex items-center text-lg font-bold text-red-800 mb-4">
              <XCircle className="w-5 h-5 mr-2 text-red-500" />
              DON'T (Avoid Actions)
            </h3>
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex items-start">
                <span className="text-red-500 font-bold mr-2">•</span>
                DO NOT administer any Penicillin-based antibiotics
              </li>
              <li className="flex items-start">
                <span className="text-red-500 font-bold mr-2">•</span>
                DO NOT remove insulin pump unless directed by EMS
              </li>
              <li className="flex items-start">
                <span className="text-red-500 font-bold mr-2">•</span>
                DO NOT give food or drink if patient is disoriented
              </li>
            </ul>
          </div>
        </div>

        {/* 6. Real-time Vital Monitor Timeline (Simulation) */}
        <div className="bg-slate-900 rounded-xl shadow-md p-5 text-white">
          <h2 className="flex items-center text-xl font-bold mb-4 text-slate-100">
            <Activity className="w-6 h-6 mr-2 text-blue-400" />
            Last Recorded Vitals (EMS / Wearable)
          </h2>
          <div className="relative border-l border-slate-700 ml-3 pl-6 space-y-6">
            <div className="relative">
              <div className="absolute -left-[31px] bg-red-500 w-4 h-4 rounded-full border-4 border-slate-900"></div>
              <p className="text-xs text-slate-400 font-mono mb-1">10 mins ago</p>
              <div className="bg-slate-800 p-3 rounded-lg flex justify-between items-center border border-slate-700">
                <div>
                  <span className="text-slate-400 text-sm block">Heart Rate</span>
                  <span className="font-bold text-xl text-red-400">142 bpm</span>
                </div>
                <div className="text-right">
                  <span className="text-slate-400 text-sm block">SpO2</span>
                  <span className="font-bold text-xl text-amber-400">92%</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -left-[31px] bg-blue-500 w-4 h-4 rounded-full border-4 border-slate-900"></div>
              <p className="text-xs text-slate-400 font-mono mb-1">25 mins ago</p>
              <div className="bg-slate-800 p-3 rounded-lg flex justify-between items-center border border-slate-700">
                <div>
                  <span className="text-slate-400 text-sm block">Heart Rate</span>
                  <span className="font-bold text-xl text-slate-100">110 bpm</span>
                </div>
                <div className="text-right">
                  <span className="text-slate-400 text-sm block">SpO2</span>
                  <span className="font-bold text-xl text-slate-100">96%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 7. Secure Doctor Login */}
        <div className="bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden">
          <div className="bg-slate-100 px-6 py-4 border-b border-slate-200 flex items-center">
            <Lock className="w-5 h-5 text-slate-500 mr-2" />
            <h2 className="text-lg font-bold text-slate-800">Authorized Personnel Portal</h2>
          </div>
          <div className="p-6">
            <p className="text-sm text-slate-600 mb-4">
              Access full medical history, clinical diagnosis, and clinical notes. For medical professionals only.
            </p>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Medical ID / Username</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  placeholder="Enter 'doctor'"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Passcode</label>
                <input 
                  type="password" 
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  placeholder="Enter '1234'"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {loginError && (
                <p className="text-red-500 text-sm font-medium">Invalid credentials. Try doctor / 1234.</p>
              )}
              <button 
                type="submit" 
                className="w-full bg-slate-800 hover:bg-slate-900 text-white font-bold py-3 px-4 rounded-lg transition-colors flex justify-center items-center"
              >
                Access Medical Records
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}
