import { aboutMe } from 'app/lib/resume-data'
import Skills from 'app/components/skills'
import Tech from 'app/components/tech'
import Education from 'app/components/education'
import Experience from 'app/components/experience'


export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Name
      </h1>
      <p className="mb-8">
        {aboutMe}
      </p>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Skills
      </h1>
      <div className="my-8">
        <Skills />
      </div>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Tech
      </h1>
      <div className="my-8">
        <Tech />
      </div>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Experience
      </h1>
      <div className="my-8">
        <Experience />
      </div>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Education
      </h1>
      <div className="my-8">
        <Education />
      </div>
    </section>
  )
}

