/*
 * Copyright © 2020 EIS Group and/or one of its affiliates. All rights reserved. Unpublished work under U.S.
 * copyright laws.
 * CONFIDENTIAL AND TRADE SECRET INFORMATION. No portion of this work may be copied, distributed, modified, or
 * incorporated into any other media without EIS Group prior written consent.
 */
import React from 'react'
import {LoginCard} from './LoginCard'
import { withKnobs } from '@storybook/addon-knobs';
import './Login.scss'

// tslint:disable:no-default-export
export default {
    title: 'LoginCard',
    parameters: {
      component: LoginCard,
      decorators: [withKnobs],
      // Module-Level 'in-dsm' configuration (Will apply to all stories inside the module)
        'in-dsm': { id: '60644ef1f0fdc0a0927caac2', versionFilePath: '../versionFile.json' }
    }
  };

export const LoginCardComponent = () => {
    return (
        <LoginCard>
            login card
        </LoginCard>
    )
}

// LoginCardComponent.story = {
//     parameters: {
//       // Story-Level 'in-dsm' configuration (Will apply only to the story that is being configured)
//       // Story-Level configuration will override Module-Level 'in-dsm' configuration for the specific story
//       // 'in-dsm': { id: '5d81da1f794992009993e356', versionFilePath: './versionFile.json' },
//     //   'in-dsm': {id: '60644ef1f0fdc0a0927caac2', versionFilePath: '../versionFile.json'}
//     }
// };
