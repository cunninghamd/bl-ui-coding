import React from 'react';
import PropTypes from 'prop-types';
import './bootstrap.min.css';
import { MusicHeader as MusicHeaderComponent } from '../MusicHeader';

/**
 * Header component enabling pages to provide dynamic titles and additional information.
 */
export const MusicHeader = ({ link, icon, pageTitle, blurbTitle, blurb, largeBlurb, ...props }) => {
  return (
    <MusicHeaderComponent 
        link={ link }
        icon={ icon }
        pageTitle={ pageTitle }
        blurbTitle={ blurbTitle }
        blurb={ blurb }
        largeBlurb={ largeBlurb }
    />
  );
};

MusicHeader.propTypes = {
  /**
   * Where should the title link to?
   */
  link: PropTypes.string,
  /**
   * What font awesome icon should be used?
   */
  icon: PropTypes.string,
  /**
   * What should the page title be?
   */
  pageTitle: PropTypes.string,
  /**
   * What should the blurb title be?
   */
  blurbTitle: PropTypes.string,
  /**
   * What should the blurb be?
   */
  blurb: PropTypes.string,
  /**
   * Is the blurb large? If so, enable a 'read more' option
   */
  largeBlurb: PropTypes.bool,
};

MusicHeader.defaultProps = {
  link: "/link",
  icon: "icon",
  pageTitle: "Music Header",
  blurbTitle: "Lorem Ipsum",
  blurb: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor sollicitudin metus id pellentesque. Ut luctus felis arcu, et finibus enim maximus sed. Mauris fringilla tristique magna ut eleifend. Vivamus condimentum, felis eget dapibus porttitor, felis libero consequat mi, convallis molestie augue tellus et felis.",
  largeBlurb: undefined,
};
