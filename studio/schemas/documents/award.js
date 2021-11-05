export default {
  name: 'award',
  type: 'document',
  title: 'Award',
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
      name: 'date',
      title: 'Date',
      type: 'date'
    }
  ]
}
