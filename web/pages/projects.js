import Card from "../components/Card"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { gql } from "@apollo/client";
import client from "../apollo-client";

export default function Component({ proudProjects, portfolioProjects }) {
    return (
        <div>
            <Navbar />
            <div className="bg-gray-200">
                <div className={"max-w-screen-lg mx-auto py-10 px-10"}>
                    <h1 className={"text-2xl mb-4 font-medium"}>
                        Featured Projects
                    </h1>
                    <div className="flex flex-wrap -mx-3">
                        {proudProjects.map((project, i) => {
                            const image = project.images ? project.images[0].asset.url : "test"
                            return (
                                <Card href={'/project/' + project.slug?.current} key={i} src={image}>
                                    <h3 className="font-medium text-lg">{project.title}</h3>
                                    <p className="text-sm">
                                        {project.description}
                                    </p>
                                </Card>
                            )
                        }
                        )}
                    </div>
                </div>
            </div>
            <div>
                <div className={"max-w-screen-lg mx-auto py-10 px-10"}>
                    <h1 className={"text-2xl mb-4 font-medium"}>
                        Other Projects
                    </h1>
                    <div className="flex flex-wrap -mx-3">
                        {portfolioProjects.map((project, i) => (
                            <div key={i} className="my-6 px-6 w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
                                <a href={'/project/' + project.slug?.current} target="_blank">
                                    <h3 className="font-medium text-lg">{project.title}</h3>
                                    <p className="text-sm">
                                        {project.description}
                                    </p>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export async function getStaticProps() {
    const { data } = await client.query({
        query: gql`
        query {
          allFormat {
            slug {
              current
            }
            projects {
              title
              description
              slug {
                current
              }
              images {
                asset {
                  url
                }
              }
            }
          }
        }
      `,
    });
    return {
        props: {
            proudProjects: data.allFormat.find(f => f.slug?.current == "proud-work").projects,
            portfolioProjects: data.allFormat.find(f => f.slug?.current == "portfolio")?.projects,
        },
    };
}