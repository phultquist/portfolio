export default {
  name: 'post',
  type: 'document',
  title: 'Posts',
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
      name: 'date',
      title: 'Date',
      type: 'date',
      validation: Rule => Rule.required()
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        {
          type: 'block'
        }
      ]
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: Rule => Rule.required(),
      options: {
        source: 'title',
        maxLength: 200, // will be ignored if slugify is set
        slugify: input =>
          input
            .toLowerCase()
            .replace(/\s+/g, '-')
            .slice(0, 200)
      }
    },
    {
      name: 'expiration',
      title: 'Expiration',
      type: 'datetime',
      description: 'The date and time when this post will be unpublished. Enabled only for private posts.'
    }
  ]
};
