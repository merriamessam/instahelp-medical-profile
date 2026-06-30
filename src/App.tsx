import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import EmergencyProfile from './pages/EmergencyProfile';
import MedicalHistory from './pages/MedicalHistory';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EmergencyProfile />} />
        <Route path="/medical-history" element={<MedicalHistory />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
