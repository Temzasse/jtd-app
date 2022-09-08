// Config for Netlify CMS

const IS_DEV = process.env.NODE_ENV === 'development';

const devBackend = {
  name: 'file-system',
  api_root: 'http://localhost:8000/api',
};

const prodBackend = {
  name: 'git-gateway',
  repo: 'Temzasse/jtd-app',
  branch: 'master',
};

const config = {
  backend: IS_DEV ? devBackend : prodBackend,

  media_folder: 'static/assets',
  public_folder: '/assets',

  collections: [
    {
      name: 'gallery',
      label: 'Gallery',
      folder: 'src/data/gallery',
      create: true,
      slug: '{{slug}}', // based on title
      editor: {
        preview: false,
      },
      fields: [
        {
          label: 'Template Key',
          name: 'templateKey',
          widget: 'hidden',
          default: 'galleryItem',
          required: false,
        },
        {
          label: 'Title',
          name: 'title',
          widget: 'string',
          required: true,
        },
        {
          label: 'Publish date',
          name: 'date',
          widget: 'datetime',
          required: true,
        },
        {
          label: 'Description',
          name: 'description',
          widget: 'text',
          required: true,
        },
        {
          label: 'Preview image',
          name: 'previewImage',
          widget: 'image',
          required: true,
        },
        {
          label: 'Gallery images',
          name: 'galleryImages',
          widget: 'list',
          field: {
            label: 'Image',
            name: 'image',
            widget: 'image',
          },
        },
      ],
    },
  ],
};

export default config;
