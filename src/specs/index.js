// this file is init file for the enzyme adapter configuration

/* es-lint: disable */

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import polyfill from './polyfill';

// configuring the adapter

Enzyme.configure({ adapter: new Adapter() });
