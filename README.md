# Nextjs resume template

First attempt at creating a simple Nextjs portfolio website. Built on this Vercel template
https://portfolio-blog-starter.vercel.app.

The page is built using Nextjs, React, Tailwind-postcss and the Material UI component library.

I added some custom React components to represent resume sections:
| Component | description |
|:------------|:----------|
| skills.tsx | `Uses Material UI Paper and Grid components, which gives each skills item a raised effect and makes the list responsive to changes in screen size.` |
| tech.tsx   | `A relatively simple react list component.` |
| experience.tsx    | `Uses the React useState and useEffect hooks to create a custom accordion component.` |
| education.tsx      | `Uses the same design as experience.tsx but with different data.`|

This was a useful exercise to practice some relatively simple React design principles. One particularly useful principle here is that if the underlying JSON data is well structured, it would flow easily throught the compoment structure of the UI.

All of the resume data is stored in the **app/lib/resume-data.ts** folder. The relevant data is imported into a each component file:

```jsx
import { jobs } from 'app/lib/resume-data';
```

I then used a simple JavaScript .map method to iterate over the JSON data and create a list of identical components:

```jsx
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
```

The data is then passed as props through various sub-components. This builds a uniform, responsive list of html items with fewer lines of code, and without hard-coding any data into the actual html.