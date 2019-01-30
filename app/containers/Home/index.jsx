import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as PacksActions from '../../actions/packs';

class HomeContainer extends PureComponent {

  static readyOnActions(dispatch) {
    return Promise.all([
      dispatch(PacksActions.fetchPacksIfNeeded()),
    ]);
  }

  componentDidMount() {
    HomeContainer.readyOnActions(this.props.dispatch, this.props.params);
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

  renderPacks() {
    const { list } = this.props.packs;
    return list.map((pack) => {
      return (
        <li className='pack gel-layout__item gel-1/2@xs gel-1/4@m gs-u-display-inline-block gs-u-mb gs-u-m0@m'>
          <div className='pack-image'>
            <img src={pack.image} alt='' />
          </div>
          <div className='pack-artist gs-u-pv+'>
            <img className='pack-artist-image gs-u-float-left gs-u-mr+' src={pack.artist.image} alt='' />
            <div className='pack-artist-details'>
              <a href=''>{pack.name}</a>
              <p>{pack.artist.name}</p>
            </div>
          </div>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <Helmet title="Create and share beats with the Instrumentl Beat Pad" description='Home page' meta={this.getMetaTags()} />
        <div className='gel-wrap gs-u-pv+'>
          <ul className='packs gel-layout'>
            {this.renderPacks()}
          </ul>
        </div>
      </div>
    );
  }
}

HomeContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  packs: PropTypes.object.isRequired
};

const mapStateToProps = ({ packs }) => ({
  packs
});

export default connect(mapStateToProps)(HomeContainer);
