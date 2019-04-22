import CMS from 'netlify-cms-app';
import FileSystemBackend from 'netlify-cms-backend-fs';
import Cloudinary from 'netlify-cms-media-library-cloudinary';
import config from './config';

console.log('> Using fs backend for netlify-cms');

// Register the file system backend for local development
CMS.registerBackend('file-system', FileSystemBackend);

// NOTE: `netlify-cms-app` does not have any extra media libraries by default
// so register Cloudinary media library
CMS.registerMediaLibrary(Cloudinary);

// Start Netlify CMS
CMS.init({ config });
