import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ResumeItem from '../components/ResumeItem'

import { gql } from "@apollo/client";
import client from "../apollo-client";

import metadataQuery from '../queries/metadata'
import formatDates from '../utility/formatDates'

export default function Component({ metadata, resume }) {
    return (
        <div>
            <Navbar />
            <div className="bg-gray-200">
                <div className={"max-w-screen-lg mx-auto py-10 px-10 space-y-4"}>
                    <div className="w-full flex flex-row justify-between">
                        <h1 className="font-medium text-2xl">Patrick Hultquist</h1>
                        <div className="flex flex-row space-x-4 text-sm">
                            <p>
                                {metadata.email}
                            </p>
                            <p>
                                {metadata.phone}
                            </p>
                        </div>
                    </div>
                    <h2 className="font-medium text-xl">Education</h2>
                    <div className="flex flex-row">
                        {resume.educations.map((education, i) => {
                            return <ResumeItem
                                title={education.title}
                                secondary={education.school}
                                description={education.description}
                                startDate={education.startDate}
                                endDate={education.endDate} key={i} />
                        })}
                    </div>
                    <h2 className="font-medium text-xl">Experiences</h2>
                    <div className="flex flex-row">
                        {resume.experiences.map((experience, i) => {
                            return <ResumeItem
                                title={experience.title}
                                secondary={experience.company}
                                description={experience.description}
                                startDate={experience.startDate}
                                endDate={experience.endDate} key={i} />
                        })}
                    </div>
                    <h2 className="font-medium text-xl">Projects</h2>
                    <div className="flex flex-row">
                        {resume.projects.map((project, i) => {
                            return <ResumeItem
                                title={project.title}
                                description={project.description}
                                startDate={project.startDate}
                                endDate={project.endDate} key={i} />
                        })}
                    </div>
                </div>
            </div>
            <Footer background="white" metadata={metadata} />
        </div>
    )
}

export async function getStaticProps() {
    const { data } = await client.query({
        query: gql`
          query {
            ${metadataQuery}
            allFormat(where: { slug: { current: {eq: "resume" } } }) {
              title
              experiences {
                  title
                  description
                  startDate
                  endDate
                  company
              }
              projects {
                  title
                  description
                  startDate
                  endDate
              }
              educations {
                  title
                  startDate
                  endDate
                  school
              }

            }
          }
        `,
    });
    return {
        props: {
            metadata: data.allMeta[0],
            resume: data.allFormat[0]
        }
    };
}