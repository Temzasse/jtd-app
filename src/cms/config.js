// Config for Netlify CMS

const IS_DEV = process.env.NODE_ENV === 'development';
const CLOUDINARY_NAME = process.env.CLOUDINARY_NAME;
const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY;

const devBackend = {
  name: 'file-system',
  api_root: 'http://localhost:8000/api',
};

const prodBackend = {
  name: 'git-gateway',
  repo: 'Temzasse/jtd-app',
  branch: 'master',
};

let config = {
  backend: IS_DEV ? devBackend : prodBackend,

  media_library: {
    name: 'cloudinary',
    use_transformations: false,
    config: {
      cloud_name: CLOUDINARY_NAME,
      api_key: CLOUDINARY_API_KEY,
    },
  },

  collections: [
    {
      name: 'gallery',
      label: 'Gallery',
      folder: IS_DEV ? 'src/data/dev/gallery' : 'src/data/prod/gallery',
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
