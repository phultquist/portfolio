export default {
  name: 'format',
  type: 'document',
  title: 'Format',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 200, // will be ignored if slugify is set
        slugify: input => input
          .toLowerCase()
          .replace(/\s+/g, '-')
          .slice(0, 200)
      }
    },
    {
      name: 'educations',
      title: 'Education',
      description: 'What education should appear',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{ type: 'education' }]
      }]
    },
    {
      name: 'projects',
      title: 'Projects',
      description: 'What projects should appear',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{ type: 'project' }]
      }]
    },
    {
      name: 'experiences',
      title: 'Experiences',
      description: 'What experiences should appear',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{ type: 'experience' }]
      }]
    }
  ]
}
