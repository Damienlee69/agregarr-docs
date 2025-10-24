import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // Setup sidebar
  setupSidebar: [
    {
      type: 'doc',
      id: 'installation',
      label: 'Installation',
    },
    {
      type: 'doc',
      id: 'setup',
      label: 'Initial Setup',
    },
    {
      type: 'doc',
      id: 'creating-a-collection',
      label: 'Creating a Collection',
    },
  ],

  // Main documentation sidebar
  docsSidebar: [
    {
      type: 'doc',
      id: 'sources/overview',
      label: 'Collection Sources',
    },
    {
      type: 'doc',
      id: 'downloads/overview',
      label: 'Downloads & Integration',
    },
    {
      type: 'doc',
      id: 'scheduling',
      label: 'Time Restrictions',
    },
  ],

  // FAQ sidebar
  faqSidebar: [
    {
      type: 'doc',
      id: 'faq/index',
      label: 'F.A.Q',
    },
  ],
};

export default sidebars;
