import React from 'react';
import PropTypes from 'prop-types';

import SEO from '../SEO';

function Layout({ title, className, children }) {
  return (
    <section className={className}>
      <SEO title={title} />
      {children}
    </section>
  );
}

Layout.defaultProps = { className: '' };

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Layout;
