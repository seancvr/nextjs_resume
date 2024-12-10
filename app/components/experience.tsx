'use client'; // client component because react hooks are used

import { MdArrowRight } from 'react-icons/md';
import { jobs } from 'app/lib/resume-data';
import React, { useState, useRef, useEffect } from 'react';

//Experience component
export default function Experience() {
    return (
        <ol className="relative border-l border-neutral-600 dark:border-neutral-400">
            {jobs.map((job, index) => (
                <Job key={index} job={job} />
            ))}
        </ol>
    );
}

// Job component
type JobType = {
  dates: string,
  role: string,
  employer: string,
  description: string
}
 
function Job({ job }: { job: JobType }) {
    return (
        <li className="mb-4 ms-4">
            <div className="absolute w-3 h-3 bg-neutral-300 rounded-full mt-1.5 -start-1.5 border border-neutral-600 dark:border-neutral-400 dark:bg-gray-700"></div>
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p className="text-neutral-600 dark:text-neutral-400 w-[155px] tabular-nums whitespace-nowrap">
                {job.dates}
              </p>
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {job.employer}
              </p>
            </div> 
            <Collapsible title={job.role} content={job.description} />
        </li>
    );
}

interface CollapsibleProps {
  title: string;
  content: string;
}

function Collapsible({ title, content }: CollapsibleProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [contentHeight, setContentHeight] = useState('0px');
  const contentRef = useRef<HTMLDivElement | null>(null);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      setContentHeight(`${contentRef.current?.scrollHeight}px`);
    } else {
      setContentHeight('0px');
    }
  }, [isOpen]);

  return (
    <div className="collapsible mb-4">
      <h3 className="text-lg font-semibold transition-all text-gray-900 dark:text-white hover:text-neutral-700 hover:underline dark:hover:text-neutral-200">
        <button
          onClick={toggleOpen}
          className="focus:outline-none flex items-center"
          aria-expanded={isOpen}
          style={{ cursor: 'pointer' }}
        >
          {title}
          <span className={`transition-transform duration-300 ease-in-out ml-1 relative ${isOpen ? 'rotate-90' : 'rotate-0'} top-0.5`}>
            <MdArrowRight />
          </span>
        </button>
      </h3>
      <div
        ref={contentRef}
        className="overflow-hidden transition-max-height duration-600 ease-out"
        style={{ maxHeight: contentHeight }}
      >
        <p className="mb-4 text-neutral-900 dark:text-neutral-100 tracking-tight">{content}</p>
      </div>
    </div>
  );
}
