import ResumeItem from './ResumeItem'

export default function Component({ resume, metadata, columns }) {
    return (<>
        <div className="w-full flex flex-row justify-between">
            <h1 className="font-medium text-2xl">Patrick Hultquist</h1>
            <div className="text-right text-sm">
                <p><a href={`mailto:${metadata.email}`}>{metadata.email}</a></p>
                <p><a href={metadata.github.url}>{metadata.github.url.split("https://")}</a></p>
                <p>{metadata.phone}</p>
                <p><a href={metadata.linkedin.url}>{metadata.linkedin.url.split("https://www.")}</a></p>
            </div>
        </div>
        <h2 className="font-medium text-xl">Education</h2>
        <Grid columns={columns}>
            {resume.educations.map((education, i) => {
                return <ResumeItem
                    title={education.title}
                    secondary={education.school}
                    description={education.description}
                    startDate={education.startDate}
                    endDate={education.endDate} key={i} />
            })}
        </Grid>
        <h2 className="font-medium text-xl">Experiences</h2>
        <Grid columns={columns}>
            {resume.experiences.map((experience, i) => {
                return <ResumeItem
                    title={experience.title}
                    secondary={experience.company}
                    description={experience.description}
                    startDate={experience.startDate}
                    endDate={experience.endDate} key={i} />
            })}
        </Grid>
        <h2 className="font-medium text-xl">Projects</h2>
        <Grid columns={columns}>
            {resume.projects.map((project, i) => {
                return <ResumeItem
                    title={project.title}
                    description={project.description}
                    startDate={project.startDate}
                    endDate={project.endDate} key={i} />
            })}
        </Grid>
    </>)
}

function Grid({ children, columns }) {
    return <div className={`grid grid-cols-${columns?.default || 1} md:grid-cols-${columns?.md || 2} lg:grid-cols-${columns?.lg || 2} xl:grid-cols-${columns?.xl || 2}`}>{children}</div>
}
