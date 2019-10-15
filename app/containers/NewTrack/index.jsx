import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AudioList from '../../components/AudioList';
import DrumpadContainer from '../Drumpad';
import DrumpadControlsContainer from '../DrumpadControls';

import * as PacksActions from '../../actions/packs';

class NewTrackContainer extends PureComponent {

  static readyOnActions(dispatch) {
    return Promise.all([
      dispatch(PacksActions.fetchPacksIfNeeded()),
    ]);
  }

  componentDidMount() {
    NewTrackContainer.readyOnActions(this.props.dispatch, this.props.params);
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
    console.log(this.getPack());
    return (
      <div>
        <Helmet title={this.getPack().name} description='New Track' meta={this.getMetaTags()} />
        <div class="wrap drumpad-wrap">
          <div class="drumpad-container drumpad-beats">
            <div class="drumpad-beats__inner">
              <AudioList pack={this.getPack()} />
            </div>
          </div>
          <DrumpadContainer />
          <DrumpadControlsContainer />
        </div>
      </div>
    );
  }
}

NewTrackContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  packs: PropTypes.object.isRequired
};

const mapStateToProps = ({ packs }) => ({
  packs
});

export default connect(mapStateToProps)(NewTrackContainer);
