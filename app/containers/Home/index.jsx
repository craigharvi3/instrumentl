import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from '../../components/Card';
import Title from '../../components/Title';

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
        <li className='gel-layout__item gel-1/2@xs gel-1/4@m gs-u-display-inline-block gs-u-mb gs-u-m0@m' key={`pack-${pack.id}`}>
          <Card
            id={pack.id}
            image={pack.image}
            title={pack.name}
            subtitle={pack.artist.name}
            subImage={pack.artist.image}
          />
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <Helmet title='Create and share beats with the Instrumentl Beat Pad' description='Home page' meta={this.getMetaTags()} />
        <div className='gel-wrap i-module-slice'>
          <Title title='Popular Packs' />
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
