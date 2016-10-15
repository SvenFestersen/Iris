
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import TrackList from './TrackList'
import * as albumActions from '../actions/albumActions'

class Album extends React.Component{

	constructor(props) {
		super(props);

		this.state = {
			album: false
		}
	}

	// on render
	componentDidMount(){
		this.loadAlbum( this.props.params.uri );
	}

	// when props changed
	componentWillReceiveProps( nextProps ){
		if( nextProps.params.uri != this.props.params.uri ){
			this.loadAlbum( nextProps.params.uri );
		}
	}

	loadAlbum( uri ){
		let self = this;

		var id = uri.replace('spotify:album:','');

        $.ajax({
			method: 'GET',
			cache: true,
			url: 'https://api.spotify.com/v1/albums/'+id,
			success: function(album){
        		self.setState({ album: album });
        	}
        });
	}

	renderAlbum(){
		if( this.state.album ){
			return (
				<div>
					<h3>{ this.state.album.name }</h3>
					<TrackList tracks={this.state.album.tracks.items} />
				</div>
			);
		}
		return null;
	}

	render(){
		return (
			<div>
				<h3>Single album</h3>
				{ this.renderAlbum() }
			</div>
		);
	}
}


/**
 * Export our component
 *
 * We also integrate our global store, using connect()
 **/

const mapStateToProps = (state, ownProps) => {
	return state;
}

const mapDispatchToProps = (dispatch) => {
	return {
		albumActions: bindActionCreators(albumActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Album)