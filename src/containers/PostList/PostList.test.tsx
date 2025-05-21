import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest'

import PostList from './PostList';

describe('<PostList />', () => {
  test('it should mount', () => {
    render(<PostList />);

    const test = screen.getByTestId('PostList');

    expect(test).toBeInTheDocument();
  });
});