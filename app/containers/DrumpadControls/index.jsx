import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class DrumpadControlsContainer extends PureComponent {
  render() {
    return (
      <div className="drumpad-container drumpad-controls">
        <div id="station-controls" className="drumpad-beats__inner gs-u-mb hide">
          <div className="station-controls">
            <p className="right controls-space-loaded"></p>
            <h4>Controls</h4>
            <div className="control-group">
              <label className="gs-u-mb gs-u-display-block" for="key_mapping">Key mapping *</label>
              <input type="text" name="key_mapping" id="key_mapping" value="" min="1" max="1" />
            </div>
            <div className="control-group">
              <label className="drum-sample custom-control control--checkbox">
                Drum pad sample
               <input type="checkbox" />
                <div className="control__indicator"></div>
              </label>
            </div>
            <div className="control-group">
              <label className="loop-sample custom-control control--checkbox">
                Loop sample
               <input type="checkbox" />
                <div className="control__indicator"></div>
              </label>
            </div>
          </div>
        </div>
        <div className="drumpad-beats__inner">
          <h4>Station</h4>
          <div className="control-group">
            <label className="gs-u-mb gs-u-display-block" for="station-name">Station name *</label>
            <input type="text" name="station-name" id="station-name" value="" />
          </div>
          <div className="control-group">
            <label className="custom-control control--checkbox">
              Public
            <input id="station-public" type="checkbox" />
              <div className="control__indicator"></div>
            </label>
          </div>
          <div id="station-controls-message" className="station-controls-message padded">
            <p className="underlined">Note</p>
            <p>Once you have loaded a sample in, you can click the small cog within the beat space to load in the controls for that space.</p>
          </div>
        </div>
        <hr />
        <button id="save-station" className="button button--full gs-u-p gs-u-align-center gs-u-display-block"><i className="fa fa-fw fa-floppy-o"></i> Save station</button>
        {/*<a className="button button--full gs-u-p gs-u-align-center gs-u-display-block" href="/track/new/station/{{station['id']}}"><i className="fa fa-fw fa-plus"></i> Create track</a>*/}
      </div>
    );
  }
}

DrumpadControlsContainer.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = ({ }) => ({
});

export default connect(mapStateToProps)(DrumpadControlsContainer);
