import { useState } from "react";
import { Dashboard } from "../Dashboard";

import './Start.scss';

export const Start: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
  <div className="about">
    <button className="open-modal-btn" onClick={() => setOpen(true)}> 
      🧩 START 
    </button>
      <div className={`overlay animated ${open ? 'show' : ''}`}>
        <div className="modal">
          <Dashboard />
        </div>
      </div>
  </div>
  );
};
