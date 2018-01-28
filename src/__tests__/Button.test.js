import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Button from '../components/Button.jsx';

// describe('Button', () => {
  const mockFn = jest.fn();
  it('should be defined', () => {
    expect(Button).toBeDefined();
  });
  it('should render correctly', () => {
    const tree = shallow(
      <Button name='button test' handleClick={mockFn} />
    );
    expect(tree).toMatchSnapshot();
  });
  it('should have a button value', () => {
    const tree = shallow(
      <Button name='button test' handleClick={mockFn} />
    );
    expect(typeof(tree.find('.button').node.props.value)).toBe('string');
    expect(tree.find('.button').node.props.value).toEqual('button test');
  });
  it('should have a click function', () => {
    const tree = shallow(
      <Button name='button test' handleClick={mockFn} />
    );
    tree.simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });
// });