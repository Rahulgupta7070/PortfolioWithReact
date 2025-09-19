import React from 'react';
import Button from './Button';

function Project({ val, mover, count }) {
  return (
    <div
      onMouseEnter={() => mover(count)}
      className="group w-full py-20 h-[20rem] text-zinc-300 transition-all duration-300
                 max-sm:py-10 max-sm:h-auto max-sm:flex max-sm:flex-col max-sm:items-start"
    >
      <div className="max-w-screen-xl mx-auto flex items-center justify-between
                      max-sm:flex-col max-sm:items-start max-sm:gap-5 px-5">
        
        {/* Title */}
        <h1 className="text-6xl w-32 capitalize font-semibold group-hover:text-indigo-600 transition-colors duration-300
                       max-sm:text-3xl max-sm:w-full max-sm:mb-2">
          {val.title}
        </h1>

        {/* Details */}
        <div className="dets w-1/3 max-sm:w-full">
          <p className="mb-10 group-hover:text-indigo-600 transition-colors duration-300
                        max-sm:text-sm max-sm:mb-4">
            {val.desc}
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500
                          max-sm:opacity-100 flex-wrap">
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
