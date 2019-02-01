import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import AudioManager from '../../audio/audio-manager';
import DB from '../../db';

export default class BeatsTable extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      numberOfBeats: 10
    };

    this.loadMoreHandler = this.loadMoreHandler.bind(this);
  }

  componentDidMount() {
    this.audioManager = new AudioManager();
    this.audioContext = this.audioManager.getContext();
    this.loadBeats(0, 10);
  }

  componentDidUpdate(_, prevState) {
    if (prevState.numberOfBeats !== this.state.numberOfBeats) {
      const { numberOfBeats } = prevState;
      this.loadBeats(numberOfBeats, numberOfBeats + 10);
    }
  }

  loadBeats(from, to) {
    const { pack } = this.props;
    const WaveSurfer = require("wavesurfer.js");

    pack.beats.slice(from, to).forEach((beat, index) => {
      const el = document.querySelector(`.beats-table__row--${from + index}`);
      const wavesurfer = WaveSurfer.create({
        container: el.querySelector('.beats-table__waveform'),
        waveColor: '#999',
        progressColor: '#191616',
        cursorColor: '#191616',
        audioContext: this.audioContext,
        barWidth: 2,
        height: 25,
        cursorWidth: 3,
        maxCanvasWidth: 300
      });

      wavesurfer.load(`${DB.AWS}/${pack.id}/beats/${encodeURIComponent(beat.name)}.wav`);

      el.querySelector('.beats-table__play').addEventListener('click', (e) => {
        e.preventDefault();
        wavesurfer.playPause();
      });

      wavesurfer.on('ready', function () {
        const spinner = el.querySelector('.fa-spinner');
        spinner.parentNode.removeChild(spinner);
        wavesurfer.params.container.style.opacity = 1;
      });

      // wavesurfer.on('pause', function () {
      //   $row.find('.fa-pause').removeClass('fa-pause').addClass('fa-play');
      // });

      // wavesurfer.on('finish', function () {
      //   $row.find('.fa-pause').removeClass('fa-pause').addClass('fa-play');
      // });

      // wavesurfer.on('play', function () {
      //   $row.find('.fa-play').removeClass('fa-play').addClass('fa-pause');
      // });

      // wavesurfer.on('error', function () {
      //   $row.addClass('error');
      //   $row.attr('title', 'There was an error loading this audio item.');
      //   $el.siblings('.fa-spinner').remove();
      //   $row.find('.waveform-control').replaceWith('Error loading audio');
      // });
    });
  }

  renderBeatsTableRows() {
    const { pack } = this.props;

    return pack.beats.slice(0, this.state.numberOfBeats).map((beat, index) => {
      return (
        <tr className={`beats-table__row beats-table__row--${index}`} key={`beat-${index}`}>
          <td scope='row' className='beats-table__td gs-u-pv+'>
            <div className='sound-pic play-audio-sound'>
              <div id='play-status-0' className='sound-playing'></div>
              <img className='beats-table__image gs-u-float-left gs-u-mr+' src={pack.image} />
            </div>
            <div className='sound-info'>
              <a className='beats-table__play gs-u-display-inline-block gs-u-mt' href='/sample-pack/apollo_studios_sfx_library'>{beat.name}</a>
              <span className='gs-u-display-block'>{pack.artist.name}</span>
            </div>
          </td>
          <td className='beats-table__td gs-u-p+ gs-u-align-center'>
            <b class="fa fa-spinner fa-spin"></b>
            <div className='beats-table__waveform gs-u-align-middle'></div>
          </td>
          <td className='beats-table__td gs-u-pv+'>{beat.type}</td>
          <td className='beats-table__td gs-u-pv+'>{beat.instrument}</td>
          <td className='beats-table__td gs-u-pv+'>{beat.bpm}</td>
          <td className='beats-table__td gs-u-pv+'>{beat.key}</td>
        </tr>
      );
    });
  }

  loadMoreHandler() {
    this.setState({ numberOfBeats: this.state.numberOfBeats + 10 });
  }

  renderLoadMore() {
    const { numberOfBeats } = this.state;
    const { pack } = this.props;

    console.log('numberOfBeats', numberOfBeats);
    console.log('pack.beats.length', pack.beats.length);

    if (numberOfBeats < pack.beats.length) {
      return (
        <div className='beats-load gs-u-align-center gs-u-mt+ gs-u-mb++'>
          <button className='button gs-u-align-center gs-u-display-inline-block gs-u-p+' onClick={this.loadMoreHandler}>Load more</button>
        </div>
      );
    }
  }

  render() {
    return (
      <div className='gel-wrap i-module-slice'>
        <table className="beats-table">
          <thead>
            <tr className='beats-table__tr'>
              <th className='beats-table__th gs-u-pv+ gs-u-align-left'>Sound</th>
              <th className='beats-table__th gs-u-pv+ gs-u-align-left'></th>
              <th className='beats-table__th gs-u-pv+ gs-u-align-left'>Type</th>
              <th className='beats-table__th gs-u-pv+ gs-u-align-left'>Instrument</th>
              <th className='beats-table__th gs-u-pv+ gs-u-align-left'>BPM</th>
              <th className='beats-table__th gs-u-pv+ gs-u-align-left'>Key</th>
            </tr>
          </thead>
          <tbody>
            {this.renderBeatsTableRows()}
          </tbody>
        </table>
        {this.renderLoadMore()}
      </div>
    );
  }
}

BeatsTable.propTypes = {
  pack: PropTypes.object.isRequired
};
