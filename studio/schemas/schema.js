// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Document types
import category from './documents/category'
import project from './documents/project'
import education from './documents/education'
import award from './documents/award'
import siteSettings from './documents/siteSettings'
import format from './documents/format'
import experience from './documents/experience'
import meta from './documents/meta'

// Object types
import metadata from './objects/metadata'
import account from './objects/account'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'portfolio',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    account,
    metadata,
    // The following are document types which will appear
    // in the studio.
    category,
    format,
    education,
    experience,
    project,
    siteSettings,
    meta,
    award
  ])
})
