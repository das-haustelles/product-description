import React from 'react';
import {
  shallow,
} from 'enzyme';

// Components
import Reviews from '../client/components/reviews';

describe('Renders Das Haustelles', () => {
  test('Title of page is Das Haustelles Reviews', () => {
    const wrapper = shallow(<Reviews />);
    expect(wrapper.exists()).toBe(true);
  });
});
