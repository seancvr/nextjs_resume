'use client'

import Link from 'next/link'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

const navItems = {
  '/': {
    name: 'Resume',
  },
  '/contact': {
    name: 'Contact',
  },
}


export function Navbar() {
  const pathname = usePathname();

  return (
    <aside className="-ml-[8px] mb-10 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className={clsx("transition-all hover:text-neutral-700 hover:underline dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1", 
                    {
                      "transition-all hover:text-neutral-700 underline dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1": pathname === path,
                    },
                  )}
                >
                  {name}
                </Link>
              )
            })}
            <a
              href="https://www.linkedin.com/"
              rel="noopener noreferrer"
              target="_blank"
              className="transition-all hover:text-neutral-700 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
              >
              <LinkedInIcon />
            </a>
            <a
              href="https://github.com/seancvr"
              rel="noopener noreferrer"
              target="_blank"
              className="transition-all hover:text-neutral-700 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
              >
              <GitHubIcon />
            </a>
          </div>
        </nav>
      </div>
    </aside>
  )
}
