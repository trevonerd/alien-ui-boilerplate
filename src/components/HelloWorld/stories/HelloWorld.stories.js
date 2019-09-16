import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, number } from '@storybook/addon-knobs';

import HelloWorld from '../HelloWorld';
import HelloWorldReadme from '../README.md';

storiesOf('HelloWorld', module)
    .addDecorator(withKnobs)
    .addParameters({
        readme: {
            sidebar: HelloWorldReadme,
            includePropTables: [HelloWorld]
        }
    })
    .add('default', () => <HelloWorld />);
