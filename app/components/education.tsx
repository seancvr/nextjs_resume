'use client';

import { education } from 'app/lib/resume-data';
import { MdArrowRight } from 'react-icons/md';
import React, { useState, useRef, useEffect } from 'react';

//Experience component
export default function Experience() {
    return (
        <ol className="relative border-l border-neutral-600 dark:border-neutral-400">
            {education.map((eduItem, index) => (
                <EduItem key={index} eduItem={eduItem} />
            ))}
        </ol>
    );
}

// Job component
type EduItemType = {
  dates: string,
  place: string,
  subject: string,
}

function EduItem({ eduItem }: { eduItem: EduItemType }) {
    return (
        <li className="mb-4 ms-4">
            <div className="absolute w-3 h-3 bg-neutral-300 rounded-full mt-1.5 -start-1.5 border border-neutral-600 dark:border-neutral-400 dark:bg-gray-700"></div>
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p className="text-neutral-600 dark:text-neutral-400 w-[150px] tabular-nums whitespace-nowrap">
                {eduItem.dates}
              </p>
            </div>
            <EduCollapsible subject={eduItem.subject} place={eduItem.place} />
        </li>
    );
}

interface EduCollapsibleProps {
    subject: string;
    place: string;
  }
  
  function EduCollapsible({ subject, place }: EduCollapsibleProps) {
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
            {subject}
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
          <p className="mb-4 text-neutral-900 dark:text-neutral-100 tracking-tight">{place}</p>
        </div>
      </div>
    );
  }