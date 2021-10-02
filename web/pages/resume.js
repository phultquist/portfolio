import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ResumeItem from '../components/ResumeItem'
import Card from '../components/Card'
import memoji from '../public/memoji.png'

import { gql } from "@apollo/client";
import client from "../apollo-client";

import metadataQuery from '../queries/metadata'

export default function Component({ metadata, resume }) {
    return (
        <div>
            <Navbar />
            <div className="bg-gray-200">
                <div className={"max-w-screen-lg mx-auto py-10 px-10 space-y-4"}>
                    <div className="w-full flex flex-row justify-between">
                        <h1 className="font-medium text-2xl">Patrick Hultquist</h1>
                        <table className="text-sm">
                            <tr>
                                <td className="pr-4">
                                    {metadata.email}
                                </td>
                                <td>
                                    <a href={metadata.github.url}>{metadata.github.url.split("https://")}</a>
                                </td>
                            </tr>
                            <tr>
                                <td className="pr-4">
                                    {metadata.phone}
                                </td>
                                <td>
                                    <a href={metadata.linkedin.url}>{metadata.linkedin.url.split("https://www.")}</a>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <h2 className="font-medium text-xl">Education</h2>
                    <Grid>
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
                    <Grid>
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
                    <Grid>
                        {resume.projects.map((project, i) => {
                            return <ResumeItem
                                title={project.title}
                                description={project.description}
                                startDate={project.startDate}
                                endDate={project.endDate} key={i} />
                        })}
                    </Grid>
                </div>
            </div>
            <Footer background="white" metadata={metadata} />
        </div>
    )
}

function Grid({children}) {
    return <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2"}>{children}</div>
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