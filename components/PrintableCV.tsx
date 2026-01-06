import React from 'react';


const PrintableCV: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100 flex justify-center py-8 print:p-0 print:bg-white">
      <img
        src="/Milakshi_Vithana_CV.png"
        alt="Milakshi Vithana CV"
        className="max-w-[21cm] w-full shadow-lg print:shadow-none print:w-full"
      />
    </div>
  );
};

export default PrintableCV;