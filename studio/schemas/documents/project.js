export default {
  name: 'project',
  type: 'document',
  title: 'Projects',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => [
        Rule.required().error('A title is required'),
        Rule.max(120).warning("A title shouldn't be more than 120 characters.")
      ]
    },
    {
      name: 'startDate',
      title: 'Started on',
      type: 'date',
      validation: Rule => Rule.required()
    },
    {
      name: 'endDate',
      title: 'Ended on',
      type: 'date'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H1', value: 'h1' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
            { title: 'Quote', value: 'blockquote' }
          ]
        }
      ]
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: Rule => Rule.required()
    },
    {
      name: 'metadata',
      title: 'Project Metadata',
      type: 'metadata'
    },
    {
      name: 'urls',
      title: 'Related URLs',
      type: 'array',
      of: [{ type: 'url' }]
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'image' }]
    },
    {
      name: 'files',
      title: 'Files',
      type: 'array',
      of: [{ type: 'file' }]
    }
  ]
};
