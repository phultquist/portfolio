import ResumeItem from "./ResumeItem";

export default function Component({ resume, metadata }) {
  const columns =
    "grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2";

  const currentExperience = resume.experiences[0];

  return (
    <>
      <div className="w-full mb-10">
        <h1 className="section">Patrick Hultquist</h1>
        <div className="text-sm space-y-1 text-gray-700 -ml-3">
          <p className="md:inline lg:inline xl:inline">
            <a className="p-3" href={`mailto:hi@patrick.app`}>
              hi@patrick.app
            </a>
          </p>
          <p className="md:inline lg:inline xl:inline">
            <a className="p-3" href={`tel:${metadata.phone}`}>
              {metadata.phone}
            </a>
          </p>
          <p className="md:inline lg:inline xl:inline">
            <a className="p-3" href={metadata.github.url}>
              {metadata.github.url.split("https://")}
            </a>
          </p>
          <p className="md:inline lg:inline xl:inline">
            <a className="p-3" href={metadata.linkedin.url}>
              {metadata.linkedin.url.split("https://www.")}
            </a>
          </p>
        </div>
      </div>
      {resume.educations && (
        <>
          <h2 className="font-medium text-xl">Education</h2>
          <Grid columns={columns}>
            {resume.educations.map((education, i) => {
              return (
                <ResumeItem
                  title={education.title}
                  secondary={education.school}
                  description={education.description}
                  startDate={education.startDate}
                  endDate={education.endDate}
                  key={i}
                />
              );
            })}
          </Grid>
        </>
      )}
      <h2 className="font-medium text-xl">Experiences</h2>

      {currentExperience && (
        <div className="rounded-md border-gray-300 pt-2 border-2 ">
          <ResumeItem
            title={currentExperience.title}
            secondary={currentExperience.company}
            description={currentExperience.description}
            startDate={currentExperience.startDate}
            endDate={currentExperience.endDate}
          />
        </div>
      )}
      <Grid columns={columns}>
        {resume.experiences
          .filter(
            (experience) =>
              experience.slug.current !== currentExperience?.slug?.current
          )
          .map((experience, i) => {
            return (
              <ResumeItem
                title={experience.title}
                secondary={experience.company}
                bullets={experience.bullets}
                startDate={experience.startDate}
                endDate={experience.endDate}
                key={i}
              />
            );
          })}
      </Grid>
      <h2 className="font-medium text-xl">Selected Projects</h2>

      <Grid columns={columns}>
        {resume.projects.map((project, i) => {
          return (
            <ResumeItem
              title={project.title}
              description={project.description}
              startDate={project.startDate}
              endDate={project.endDate}
              key={i}
            />
          );
        })}
      </Grid>
      {/* <h2 className="font-medium text-xl">Awards & Recognitions</h2>
      <Grid columns={columns}>
        {resume.projects.map((project, i) => {
          return (
            <ResumeItem
              title={project.title}
              description={project.description}
              startDate={project.startDate}
              endDate={project.endDate}
              key={i}
            />
          );
        })}
      </Grid> */}
      <Grid columns={columns}>
        <div className="skills text-gray-500 pr-6 mb-4">
          <p className="font-semibold text-sm">Skills</p>
          <div className="">{metadata.skills.join(", ")}</div>
        </div>
        <div className="technologies text-gray-500">
          <p className="font-semibold text-sm">Technologies</p>
          <div className="">{metadata.technologies.join(", ")}</div>
        </div>
      </Grid>
    </>
  );
}

function Grid({ children, columns }) {
  return <div className={`grid ${columns}`}>{children}</div>;
}
