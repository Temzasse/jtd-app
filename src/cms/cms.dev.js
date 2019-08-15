import CMS from 'netlify-cms-app';
import FileSystemBackend from 'netlify-cms-backend-fs';
import config from './config';

console.log('> Using fs backend for netlify-cms');

// Register the file system backend for local development
CMS.registerBackend('file-system', FileSystemBackend);

// Start Netlify CMS
CMS.init({ config });
