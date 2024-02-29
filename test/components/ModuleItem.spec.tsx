import { ModuleItem } from '../../src/components/ModuleItem';
import type { Package } from '../../src/models/Package';
import { MockList } from '../__mock__/mock';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import * as React from 'react';

describe('ModuleItem', () => {
  it('renders without error', () => {
    const component = render(<ModuleItem packageElement={MockList[0] as Package} />);

    expect(component).toMatchSnapshot();
  });
});
