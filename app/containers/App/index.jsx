import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Header from '../../components/Header';

class AppContainer extends PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]).isRequired
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <div>
        <Helmet
          title="Instrumentl"
          titleTemplate="Instrumentl | %s"
          meta={[
            { 'char-set': 'utf-8' },
            { name: 'description', content: 'Create and share beats with the Instrumentl Beat Pad' },
          ]}
        />
        <Header router={this.props.router} />
        {children}
      </div>
    );
  }
}

export default AppContainer;
