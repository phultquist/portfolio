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
                Rule.max(120).warning('A title shouldn\'t be more than 120 characters.')
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
            name: 'description',
            title: 'Description',
            type: 'text'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug'
        }
    ]
}