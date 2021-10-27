import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Resume from '../../components/Resume'

import { gql } from "@apollo/client";
import client from "../../apollo-client";

import metadataQuery from '../../queries/metadata'

export default function Component({ metadata, resume }) {
    const resumeColumns = {
        default: 'grid-cols-1',
        sm: 'sm:grid-cols-1',
        md: 'md:grid-cols-2',
        lg: 'lg:grid-cols-2',
        xl: 'xl:grid-cols-2'
    }
    return (
        <div>
            <Navbar />
            <div className="bg-gray-200">
                <div className={"max-w-screen-lg mx-auto py-10 px-10 space-y-4"}>
                    <Resume resume={resume} metadata={metadata}/>
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