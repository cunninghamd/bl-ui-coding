import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MusicHeader } from './MusicHeader';

test('renders a music header with title', () => {
  render(
    <MusicHeader
        link="/"
        icon="music"
        pageTitle="Musicly - A Test"
        blurbTitle="Musicly - A Blurb"
        blurb="Musicly is amazing"
        largeBlurb={ false }
    />
  );
  const titleElement = screen.getByText(/Musicly - A Test/i);
  expect(titleElement).toBeInTheDocument();
});

test('expands music header when hamburger clicked', () => {
  render(
    <MusicHeader
        link="/"
        icon="music"
        pageTitle="Musicly - A Test"
        blurbTitle="Musicly - A Blurb"
        blurb="Musicly is amazing"
        largeBlurb={ false }
    />
  );
  
  const button = screen.getByRole('button');
  userEvent.click(button);
  expect(button).not.toHaveClass('collapsed');
});
