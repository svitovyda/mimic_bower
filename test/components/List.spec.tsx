import { List } from '../../src/components/List';
import { MockList } from '../__mock__/mock';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import * as React from 'react';

describe('List', () => {
  it('renders without error', () => {
    const component = render(<List data={MockList} />);

    expect(component).toMatchSnapshot();
  });
});
