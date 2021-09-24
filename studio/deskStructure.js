import S from '@sanity/desk-tool/structure-builder'
import { MdSettings, MdLightbulbOutline, MdWallpaper, MdAssignmentInd, MdSchool } from 'react-icons/md'

const hiddenDocTypes = listItem =>
  !['category', 'person', 'siteSettings', 'format', 'project', 'experience', 'education'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        )
        .icon(MdSettings),
      // S.listItem()
      //   .title('Sample projects')
      //   .schemaType('sampleProject')
      //   .child(S.documentTypeList('sampleProject').title('Sample projects')),
      // S.listItem()
      //   .title('Categories')
      //   .schemaType('category')
      //   .child(S.documentTypeList('category').title('Categories')),
      S.listItem()
        .title('Projects')
        .schemaType('project')
        .child(S.documentTypeList('project').title('Projects'))
        .icon(MdLightbulbOutline),
      S.listItem()
        .title('Formats')
        .schemaType('format')
        .child(S.documentTypeList('format').title('Formats'))
        .icon(MdWallpaper),
      S.listItem()
        .title('Experiences')
        .schemaType('experience')
        .child(S.documentTypeList('experience').title('Experiences'))
        .icon(MdAssignmentInd),
      S.listItem()
        .title('Education')
        .schemaType('education')
        .child(S.documentTypeList('education').title('Education'))
        .icon(MdSchool),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
      // ...S.objectTypeListItems()
    ])
