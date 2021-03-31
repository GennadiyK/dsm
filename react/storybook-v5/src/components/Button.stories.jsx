import React from 'react';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Button from './Button';

// This story is written in "Component Story Format" that was introduced in Storybook 5.2
// https://storybook.js.org/docs/formats/component-story-format/
export default {
  title: 'Button',
  parameters: {
    component: Button,
    decorators: [withKnobs],
    // Module-Level 'in-dsm' configuration (Will apply to all stories inside the module)
  }
};

const iconOptions = { none: null, 'chevron-right': 'chevron-right' };

export const simpleButton = () => (
  <div>Login</div>
);

simpleButton.story = {
  parameters: {
    // Story-Level 'in-dsm' configuration (Will apply only to the story that is being configured)
    // Story-Level configuration will override Module-Level 'in-dsm' configuration for the specific story
    'in-dsm': { id: '5e45c8b621fb52b43ce3245d', versionFilePath: '../components/versionFile.json' },
  }
};
