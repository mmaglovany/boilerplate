import React from 'react';
import { mount } from 'enzyme';
import { enzymeFind } from 'styled-components/test-utils';

import ClearButton from '../ClearButton';

describe('<CenteredSection />', () => {
  it('should render a <button> tag', () => {
    const wrapper = mount(<ClearButton />);
    const renderedComponent = enzymeFind(wrapper, ClearButton);
    expect(renderedComponent.type()).toEqual('button');
  });

  it('should render a valid text', () => {
    const text = 'Clear';
    const wrapper = mount(<ClearButton>{text}</ClearButton>);
    const renderedComponent = enzymeFind(wrapper, ClearButton);
    expect(renderedComponent.text()).toBe(text);
  });

  it('should have a className attribute', () => {
    const wrapper = mount(<ClearButton />);
    const renderedComponent = enzymeFind(wrapper, ClearButton);
    expect(renderedComponent.prop('className')).toBeDefined();
  });

  it('should adopt a valid attribute', () => {
    const id = 'testId';
    const wrapper = mount(<ClearButton id={id} />);
    const renderedComponent = enzymeFind(wrapper, ClearButton);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const wrapper = mount(<ClearButton attribute="test" />);
    const renderedComponent = enzymeFind(wrapper, ClearButton);
    expect(renderedComponent.prop('attribute')).toBeUndefined();
  });
});
