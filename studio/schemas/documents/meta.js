export default {
  name: 'meta',
  title: 'Meta',
  type: 'document',
  fields: [
    {
      name: 'firstname',
      title: 'First name',
      type: 'string'
    },
    {
      name: 'lastname',
      title: 'Last name',
      type: 'string'
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'text'
    },
    {
      name: 'email',
      title: 'Email',
      type: 'email'
    },
    {
      name: 'linkedin',
      title: 'LinkedIn',
      type: 'account'
    },
    // {
    //   name: 'website',
    //   title: 'Website',
    //   type: 'url',
    //   description: 'Personal website.',
    // },
    {
      name: 'github',
      title: 'GitHub',
      type: 'account'
    },
    {
      name: 'twitter',
      title: 'Twitter',
      type: 'account'
    },
    {
      name: 'phone',
      title: 'Phone number',
      type: 'string'
    },
    {
      name: 'dob',
      title: 'Date of birth',
      type: 'date'
    },
    {
      name: 'skills',
      type: 'array',
      title: 'Skills',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'technologies',
      type: 'array',
      title: 'Technologies',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image'
    }
  ],
  preview: {
    select: { title: 'firstname' }
  }
}
