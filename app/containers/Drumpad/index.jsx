import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as PacksActions from '../../actions/packs';

class DrumpadContainer extends PureComponent {

  static readyOnActions(dispatch) {
    return Promise.all([
      // dispatch(PacksActions.fetchPacksIfNeeded()),
    ]);
  }

  componentDidMount() {
    // DrumpadContainer.readyOnActions(this.props.dispatch, this.props.params);
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

  renderDrumpadSquares() {
    return Array.from(Array(16).keys()).map((_, index) => {
      return (
        <li className="active-beat" key={`drumpad-${index}`}>
          <a href="" className="j-drumpad dropzone">
            <span className="key--position"></span>

            <span className="key--settings">
              <i className="fa fa-cog"></i>
            </span>

            <span className="key--settings">
              <i className="fa fa-retweet"></i>
            </span>

            <span className="key--settings">
              <i className="fa fa-th-large" aria-hidden="true"></i>
            </span>

            <span className="key--info truncate">
              <span className="key--load j-key-load">
                <i className="fa fa-question" aria-hidden="true"></i>
              </span>

              <span className="key--sample">
              </span>
            </span>
          </a>
        </li>
      );
    });
  }

  render() {
    return (
      <div id="drumpad" className="drumpad" data-stationid="{{station['id']}}">
        <ul className="group">
          {this.renderDrumpadSquares()}
        </ul>
      </div>
    );
  }
}

DrumpadContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  // packs: PropTypes.object.isRequired
};

const mapStateToProps = ({ packs }) => ({
  packs
});

export default connect(mapStateToProps)(DrumpadContainer);
