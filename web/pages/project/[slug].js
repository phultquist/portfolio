import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Icon from '../../components/Icon'
import Site from '../../components/Site'

import Image from 'next/image'

import { gql } from "@apollo/client";
import client from "../../apollo-client";

export default function Component({ project }) {
    return (<>
        <Navbar />
        <div className="bg-gray-200">
            <div className="max-w-screen-lg mx-auto py-10 px-10">
                <div className="flex space-x-10">
                    <h1 className="font-medium text-2xl mb-4">{project.title}</h1>
                    <div className="flex space-x-1">
                        <Icon className="pb-4" glyph={"github"} href={"GITHUB METADATA"} />
                        <Icon className="pb-4" glyph={"web"} href={"GITHUB METADATA"} />
                    </div>
                </div>
                <div className="flex">
                    <div className="flex-grow">
                        <p>
                            {project.description}
                        </p>
                    </div>
                    {/* <div className="flex-none min-w-min w-40 bg-red-400 text-right">
                        <h2 className="text-md font-medium">Resources</h2>
                        <a>GitHub</a> <br />
                        <a>Website</a>
                    </div> */}
                </div>
                <div className="mt-10">
                    {/* <Site url={"https://fr.wikipedia.org/wiki/Main_Page"} /> */}
                    {project.site ? <Site url={project.urls[0]} /> : null}
                </div>
                <div className="flex flex-wrap justify-between">
                    {project.images.length > 1 ? project.images.map(image => {
                        const src = image.asset.url;
                        return (<div className={"w-1/3 p-10"}>
                            <Image className="object-cover rounded" loader={() => src} src={src} width={500} height={500} />
                        </div>)
                    }) : null}
                </div>
            </div>
        </div>
        <Footer background="white" />
    </>)
}

export async function getServerSideProps({ params }) {
    const { data } = await client.query({
        query: gql`
        query {
            allProject(where: { slug: { current: { eq: "${params.slug}" } } } ) {
                title
                description
                urls
                startDate
                endDate
                site
                images {
                    asset {
                        url
                        metadata {
                            dimensions {
                                width
                                height
                            }
                        }
                    }
                }
            }
        }
        `,
        variables: {
            slug: params.slug
        }
    });

    return {
        props: {
            project: data.allProject[0]
        },
    };
}

