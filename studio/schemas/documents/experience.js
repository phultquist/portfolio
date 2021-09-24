export default {
    name: 'experience',
    type: 'document',
    title: 'Experiences',
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
            name: 'company',
            title: 'Company',
            type: 'string'
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
            type: 'text'
        }
    ]
}