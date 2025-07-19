// Client init
import { createClient as createManagementClient } from 'contentful-management';

export const managementClient = createManagementClient(
  {
    accessToken: process.env.NEXT_PUBLIC_BLOG_TOKEN || '',
  },
  { type: 'plain' }
);

export const SPACE_ID = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || '';
