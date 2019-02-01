import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Hero from '../../components/Hero';
import BeatsTable from '../../components/BeatsTable';

import * as PacksActions from '../../actions/packs';
import { compose } from 'redux';

class PackContainer extends PureComponent {

  static readyOnActions(dispatch) {
    return Promise.all([
      dispatch(PacksActions.fetchPacksIfNeeded()),
    ]);
  }

  componentDidMount() {
    PackContainer.readyOnActions(this.props.dispatch, this.props.params);
  }

  getPack() {
    const { list } = this.props.packs;
    return list.find((pack) => pack.id === this.props.params.packId)
  }

  getMetaTags() {
    return [
      { name: 'author', content: 'UFCBrowser' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@ufcbrowser' },
      { name: 'twitter:title', content: 'UFCBrowser' },
      { name: 'twitter:description', content: 'Create and share beats with the Instrumentl Beat Pad' },
      { name: 'twitter:image', content: `${process.env.UFCBROWSER_URL}/img/twitter-og.png` },
      { property: 'og:title', content: 'UFCBrowser' },
      { property: 'og:site_name', content: 'UFCBrowser' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: `${process.env.UFCBROWSER_URL}` },
      { property: 'og:description', content: 'Create and share beats with the Instrumentl Beat Pad' },
      { property: 'og:image', content: `${process.env.UFCBROWSER_URL}/img/og.png` },
      { property: 'og:site_name', content: 'UFCBrowser' }
    ];
  }

  render() {
    return (
      <div>
        <Helmet title={this.getPack().name} description='Home page' meta={this.getMetaTags()} />
        <Hero title={this.getPack().name} image={this.getPack().image} artist={this.getPack().artist.name} />
        <BeatsTable pack={this.getPack()} />
      </div>
    );
  }
}

PackContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  packs: PropTypes.object.isRequired
};

const mapStateToProps = ({ packs }) => ({
  packs
});

export default connect(mapStateToProps)(PackContainer);
