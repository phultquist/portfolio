export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '614a238b470cbd00bba8538c',
                  title: 'Sanity Studio',
                  name: 'sanity-portfolio-studio-go2wrfd4',
                  apiId: 'c3361bcf-b1ec-46cb-8692-cc3fcbb24fb9'
                },
                {
                  buildHookId: '614a238a3fdc8800cc0ebb16',
                  title: 'Portfolio Website',
                  name: 'sanity-portfolio-web-iahjmj54',
                  apiId: 'f7d107b5-e56e-4f1a-b3be-d0a1714a48df'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/phultquist/sanity-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-portfolio-web-iahjmj54.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
