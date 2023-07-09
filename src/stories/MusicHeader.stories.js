import type { StoryObj } from '@storybook/react';
import { MusicHeader } from './MusicHeader';

type Story = StoryObj<typeof ButtonGroup>;

export default {
  title: 'Example/MusicHeader',
  component: MusicHeader,
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export const SearchPage: Story = {
    args: {
      link: "/",
      icon: "music",
      pageTitle: "Musicly - Search for an Artist",
      blurbTitle: "About Musicly",
      blurb: "Musicly is lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor sollicitudin metus id pellentesque. Ut luctus felis arcu, et finibus enim maximus sed. Mauris fringilla tristique magna ut eleifend. Vivamus condimentum, felis eget dapibus porttitor, felis libero consequat mi, convallis molestie augue tellus et felis.",
      largeBlurb: false,
    },
};

export const ArtistPage: Story = {
    args: {
      link: "/artist/<id>",
      icon: "music",
      pageTitle: "Artist",
      blurbTitle: "About the Band: Artist",
      blurb: "The Band Artist is lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor sollicitudin metus id pellentesque. Ut luctus felis arcu, et finibus enim maximus sed. Mauris fringilla tristique magna ut eleifend. Vivamus condimentum, felis eget dapibus porttitor, felis libero consequat mi, convallis molestie augue tellus et felis.",
      largeBlurb: true,
    },
};
