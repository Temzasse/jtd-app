import CMS from 'netlify-cms-app';
import FileSystemBackend from 'netlify-cms-backend-fs';
import config from './config';

// If running in development
if (process.env.NODE_ENV === 'development') {
  console.log('> Using fs backend for netlify-cms');
  CMS.registerBackend('file-system', FileSystemBackend); // Register the FileSystemBackend.
}

// Start Netlify CMS
CMS.init({ config });
