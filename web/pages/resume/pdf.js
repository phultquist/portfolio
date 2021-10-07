import React from 'react';

import PDFLayout from '../../components/PdfLayout';
import pdfHelper from '../../lib/pdfHelper';
import Resume from '../../components/Resume'

import { gql } from "@apollo/client";
import client from "../../apollo-client";

import metadataQuery from '../../queries/metadata'

class IndexPage extends React.Component {
    static async getInitialProps({ req, res, query }) {
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

        const exportPDF = query.exportPDF === 'true';
        const isServer = !!req;
        //metadata: data.allMeta[0],
        // resume: data.allFormat[0]
        const buffer = await pdfHelper.componentToPDFBuffer(
            <PDFLayout><Resume metadata={data.allMeta[0]} resume={data.allFormat[0]} /></PDFLayout>
        );

        // with this header, your browser will prompt you to download the file
        // without this header, your browse will open the pdf directly
        //   res.setHeader('Content-disposition', 'attachment; filename="article.pdf');

        // set content type
        res.setHeader('Content-Type', 'application/pdf');

        // output the pdf buffer. once res.end is triggered, it won't trigger the render method
        res.end(buffer);

        return {};
    }

    //   render() {
    //     return (<p>Test</p>)
    //   }
}

export default IndexPage;
