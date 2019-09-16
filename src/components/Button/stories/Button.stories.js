import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, number } from '@storybook/addon-knobs';

import Button from '../Button';
import ButtonReadme from '../README.md';

storiesOf('Buttons', module)
    .addDecorator(withKnobs)
    .addParameters({
        readme: {
            sidebar: ButtonReadme,
            includePropTables: [Button]
        }
    })
    .add('primary', () => <Button>Button Primary</Button>);
