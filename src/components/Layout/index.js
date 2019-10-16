import React from 'react';
import PropTypes from 'prop-types';

import SEO from '../SEO';

function Layout({ title, children }) {
  return (
    <section>
      <SEO title={title} />
      {children}
    </section>
  );
}

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Layout;
