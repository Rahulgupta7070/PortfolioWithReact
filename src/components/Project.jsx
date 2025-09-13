import React from 'react';
import Button from './Button';

function Project({ val, mover, count }) {
  return (
    <div
      onMouseEnter={() => mover(count)}
      className="group w-full py-20 h-[20rem] text-zinc-300 transition-all duration-300"
    >
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        
        {/* Title */}
        <h1 className="text-6xl w-32 capitalize font-semibold group-hover:text-indigo-600 transition-colors duration-300">
          {val.title}
        </h1>

        {/* Details */}
        <div className="dets w-1/3">
          <p className="mb-10 group-hover:text-indigo-600 transition-colors duration-300">
            {val.desc}
          </p>

          {/* Buttons -> by default hidden, show on hover */}
          <div className="flex items-center gap-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            {val.live && val.liveLink && (
              <a href={val.liveLink} target="_blank" rel="noopener noreferrer">
                <Button title="Live" className="group-hover:bg-blue-500 transition-colors duration-300" />
              </a>
            )}
            {val.case && val.caseLink && (
              <a href={val.caseLink} target="_blank" rel="noopener noreferrer">
                <Button title="GitCode" className="group-hover:bg-blue-500 transition-colors duration-300" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
