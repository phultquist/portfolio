export default {
  name: 'education',
  type: 'document',
  title: 'Education',
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
      type: 'date'
    },
    {
      name: 'endDate',
      title: 'Ended on',
      type: 'date'
    },
    {
      name: 'school',
      title: 'School',
      type: 'string',
      validation: Rule => Rule.required().error('A school is required')
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug'
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
    }
  ]
};
