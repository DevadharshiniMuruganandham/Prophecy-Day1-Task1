import { useState } from "react";

export default function AboutMe() {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4 bg-gradient-to-r from-violet-500 via-violet-600 to-violet-700">
      <h1 className="text-2xl font-bold text-white">I'm Devadharshini Muruganandham</h1>
      <button 
        onClick={() => setShowAbout(true)} 
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        About Me
      </button>
      {showAbout && (
        <div className="p-4 max-w-md text-center border border-gray-300 rounded mt-4 bg-white">
          <p>
            I have a solid foundation in C programming with knowledge of Java,
            AWS, and now currently expanding my skills by learning the React
            framework!
          </p>
        </div>
      )}
    </div>
  );
}
