import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class HomeContainer extends PureComponent {

  static readyOnActions(dispatch) {
    return Promise.all([
      
    ]);
  }

  componentDidMount() {
    // HomeContainer.readyOnActions(this.props.dispatch, this.props.params);
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
    const { list } = this.props.events;
    const { fighter } = this.props.fighter;
    const { list: newsList } = this.props.news;

    return (
      <div>
        <Helmet title="Create and share beats with the Instrumentl Beat Pad" description='Home page' meta={this.getMetaTags()} />
        <div className='gel-wrap gs-u-pv+'>
          <h1>hello</h1>
        </div>
      </div>
    );
  }
}

HomeContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  events: PropTypes.array.isRequired,
  fighter: PropTypes.object.isRequired,
  news: PropTypes.array.isRequired
};

const mapStateToProps = ({ events, fighter, news }) => ({
  events,
  fighter,
  news
});

export default connect(mapStateToProps)(HomeContainer);
