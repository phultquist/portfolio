export default {
  name: 'method',
  type: 'document',
  title: 'Method',
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
    }
  ],
  preview: {
    select: {
      title: 'Method of Viewing',
      subtitle: 'A place where items will be seen, like resume or online portfolio'
    }
  }
}
