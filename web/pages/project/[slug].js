import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Icon from '../../components/Icon'
import Site from '../../components/Site'

import React from 'react'
import Image from 'next/image'

import { gql } from "@apollo/client";
import client from "../../apollo-client";
import BlockContent from "@sanity/block-content-to-react"

import metadataQuery from '../../queries/metadata'

export default function Component({ project, metadata }) {
    const [modalShown, setModalShown] = React.useState(false);
    const [modalImage, setModalImage] = React.useState(null);

    return (<>
        {modalShown ? <div className="modal">
            <div className="modal-background fixed w-screen h-screen z-50" onClick={() => setModalShown(false)}>
                <div className="opacity-50 bg-black w-screen h-screen absolute">

                </div>
                <div className="h-screen w-screen flex content-center p-10 justify-center">
                    <div className="padding-10 flex justify-center">
                        {modalImage ? <Image className="object-contain" width={modalImage.asset.metadata.dimensions.width} height={modalImage.asset.metadata.dimensions.height} loader={() => modalImage.asset.url} src={modalImage.asset.url} /> : null}
                    </div>
                </div>
            </div>
        </div> : null}
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
                            {project.bodyRaw ? <BlockContent blocks={project.bodyRaw} /> : project.description}
                        </p>
                    </div>
                    {/* <div className="flex-none min-w-min w-40 bg-red-400 text-right">
                        <h2 className="text-md font-medium">Resources</h2>
                        <a>GitHub</a> <br />
                        <a>Website</a>
                    </div> */}
                </div>
                <div className="mt-10">
                    {project.metadata?.website ? <Site url={project.metadata.website} /> : null}
                </div>
                <div className="flex flex-wrap justify-between">
                    {project.images.length > 1 ? project.images.map(image => {
                        const src = image.asset.url;
                        return (<div onClick={() => {
                            setModalImage(image);
                            setModalShown(true);
                        }} className={"w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-2 py-2 md:p-6 scale-102 cursor-pointer"}>
                            <Image className="object-cover rounded" loader={() => src} src={src} width={500} height={500} />
                        </div>)
                    }) : null}
                </div>
            </div>
        </div>
        <Footer background="white" metadata={metadata} />
    </>)
}

export async function getServerSideProps({ params }) {
    const { data } = await client.query({
        query: gql`
        query {
            ${metadataQuery}
            allProject(where: { slug: { current: { eq: "${params.slug}" } } } ) {
                title
                description
                urls
                bodyRaw
                startDate
                endDate
                metadata {
                    website
                }
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
            project: data.allProject[0],
            metadata: data.allMeta[0]
        },
    };
}

