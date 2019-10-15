import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import DB from '../../db';

export default class AudioList extends PureComponent {
  renderAudioList() {
    const { pack } = this.props;
    
    return pack.beats.map((beat) => {
      return (
        <li>
          <a class="audio" href={`${DB.AWS}/${pack.id}/beats/${encodeURIComponent(beat.name)}.wav`} target="_blank" title={beat.name}>
            <span class="audio-desc truncate"><i class="fa fa-play fa-small"></i> {beat.name}</span>
          </a>
          <a class="audio-drop" data-id={`${pack.id}/${encodeURIComponent(beat.name)}`} href="#" title="Drag me into a free pad space">
            <i class="fa fa-music" aria-hidden="true"></i>
          </a>
        </li>
      );
    });
  }

  render() {
    return (
      <div className='audio-list'>
        <h4>Audio</h4>
        <ul>
          {this.renderAudioList()}
        </ul>
      </div>
    );
  }
}

AudioList.propTypes = {
  pack: PropTypes.object.isRequired
};
