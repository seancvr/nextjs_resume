import { tech } from 'app/lib/resume-data'
  
export default function Tech() {
    return (
        <div>
            {tech.map((item, index) => (
                <div key={index} className="flex flex-col space-y-1 mb-4">
                    <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
                        <p className="text-neutral-600 dark:text-neutral-400 w-[100px] text-nowrap">{item.field}</p>
                        <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">{item.tools}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
