
import * as helpers from '../../helpers'

export function set(data){
    return {
        type: 'MOPIDY_SET',
        data: data
    }
}

export function request(method, params = {}, response_callback = null, error_callback = null){
	return {
		type: 'MOPIDY_REQUEST',
		method: method,
		params: params,
		response_callback: response_callback,
		error_callback: error_callback
	}
}

export function connect(){
	return {
		type: 'MOPIDY_CONNECT'
	}
}

export function connecting(){
	return {
		type: 'MOPIDY_CONNECTING'
	}
}

export function disconnect(){
	return {
		type: 'MOPIDY_DISCONNECT'
	}
}

export function debug(call, value){
	return {
		type: 'MOPIDY_DEBUG',
		call: call,
		value: value
	}
}

export function restartStarted(){
	return {
		type: 'MOPIDY_RESTART_STARTED'
	}
}

export function restartFinished(){
	return {
		type: 'MOPIDY_RESTART_FINISHED'
	}
}

export function upgradeStarted(){
	return {
		type: 'MOPIDY_UPGRADE_STARTED'
	}
}

export function upgradeFinished(){
	return {
		type: 'MOPIDY_UPGRADE_FINISHED'
	}
}

export function localScanStarted(){
	return {
		type: 'MOPIDY_LOCAL_SCAN_STARTED'
	}
}

export function localScanFinished(){
	return {
		type: 'MOPIDY_LOCAL_SCAN_FINISHED'
	}
}

/**
 * Core play actions
 **/

export function getPlayState(){
	return {
		type: 'MOPIDY_GET_PLAY_STATE'
	}
}

export function play(){
	return {
		type: 'MOPIDY_PLAY'
	}
}

export function pause(){
	return {
		type: 'MOPIDY_PAUSE'
	}
}

export function stop(){
	return {
		type: 'MOPIDY_STOP'
	}
}

export function next(){
	return {
		type: 'MOPIDY_NEXT'
	}
}

export function previous(){
	return {
		type: 'MOPIDY_PREVIOUS'
	}
}

export function getMute(){
	return {
		type: 'MOPIDY_GET_MUTE'
	}
}

export function setMute(mute){
	return {
		type: 'MOPIDY_SET_MUTE',
		mute: mute
	}
}

export function getVolume(){
	return {
		type: 'MOPIDY_GET_VOLUME'
	}
}

export function setVolume(volume){
	return {
		type: 'MOPIDY_SET_VOLUME',
		volume: volume
	}
}

export function getConsume(){
	return {
		type: 'MOPIDY_GET_CONSUME'
	}
}

export function setConsume(consume){
	return {
		type: 'MOPIDY_SET_CONSUME',
		consume: consume
	}
}

export function getRepeat(){
	return {
		type: 'MOPIDY_GET_REPEAT'
	}
}

export function setRepeat(repeat){
	return {
		type: 'MOPIDY_SET_REPEAT',
		repeat: repeat
	}
}

export function getRandom(){
	return {
		type: 'MOPIDY_GET_RANDOM'
	}
}

export function setRandom(random){
	return {
		type: 'MOPIDY_SET_RANDOM',
		random: random
	}
}

export function getTimePosition(){
	return {
		type: 'MOPIDY_GET_TIME_POSITION'
	}
}

export function setTimePosition(time_position){
	return {
		type: 'MOPIDY_SET_TIME_POSITION',
		time_position: parseInt(time_position)
	}
}

export function timePosition(time_position){
	return {
		type: 'MOPIDY_TIME_POSITION',
		time_position: parseInt(time_position)
	}
}

export function getUriSchemes(){
	return {
		type: 'MOPIDY_GET_URI_SCHEMES'
	}
}



/**
 * Advanced playback actions
 **/

export function getCurrentTrack(){
	return {
		type: 'MOPIDY_GET_CURRENT_TRACK'
	}
}

export function currentTrackLoaded(tl_track){
	return {
		type: 'MOPIDY_CURRENT_TRACK_LOADED',
		tl_track: tl_track
	}
}

export function getNextTrack(){
	return {
		type: 'MOPIDY_GET_NEXT_TRACK'
	}
}

export function clearCurrentTrack(){
	return {
		type: 'CLEAR_CURRENT_TRACK'
	}
}

export function getQueue(){
	return {
		type: 'MOPIDY_GET_QUEUE'
	}
}

export function changeTrack(tlid){
	return {
		type: 'MOPIDY_CHANGE_TRACK',
		tlid: tlid
	}
}

/**
 * Playing assets
 **/

export function playURIs(uris = [], from_uri = null, shuffle = false){
	return {
		type: 'MOPIDY_PLAY_URIS',
		uris: uris,
		from_uri: from_uri
	}
}

export function playAlbum(uri){
	return {
		type: 'MOPIDY_PLAY_ALBUM',
		uri: uri
	}
}

export function playPlaylist(uri, shuffle = false){
	return {
		type: 'MOPIDY_PLAY_PLAYLIST',
		uri: uri,
		shuffle: shuffle
	}
}

export function enqueueURIs(uris = [], from_uri = null, play_next = false, at_position = null, offset = 0){
	return {
		type: 'MOPIDY_ENQUEUE_URIS',
		uris: uris,
		from_uri: from_uri,
		at_position: at_position,
		play_next: play_next,
		offset: offset
	}
}

export function enqueueAlbum(uri, next = false, at_position = null){
	return {
		type: 'MOPIDY_ENQUEUE_ALBUM',
		uri: uri,
		next: next,
		at_position: at_position
	}
}

export function enqueuePlaylist(uri, play_next = false, at_position = null){
	return {
		type: 'MOPIDY_ENQUEUE_PLAYLIST',
		uri: uri,
		play_next: play_next,
		at_position: at_position
	}
}

export function enqueueURIsBatchDone(){
	return {
		type: 'MOPIDY_ENQUEUE_URIS_BATCH_DONE'
	}
}


/**
 * Playlist maniopulation
 **/

export function removeTracks(tlids){
	return {
		type: 'MOPIDY_REMOVE_TRACKS',
		tlids: tlids
	}
}

export function reorderTracklist(indexes, insert_before){
	var range = helpers.createRange(indexes );
	if (insert_before > range.start ) insert_before = insert_before - range.length
	return { 
		type: 'MOPIDY_REORDER_TRACKLIST',
		range_start: range.start,
		range_length: range.length,
		insert_before: insert_before
	}
}

export function clearTracklist(){
	return { 
		type: 'MOPIDY_CLEAR_TRACKLIST'
	}
}



/**
 * Asset-oriented actions
 **/

export function getImages(context, uris){
	return { 
		type: 'MOPIDY_GET_IMAGES',
		context: context,
		uris: uris
	}
}

export function createPlaylist(name, scheme){
	return { 
		type: 'MOPIDY_CREATE_PLAYLIST',
		name: name,
		scheme: scheme
	}
}

export function deletePlaylist(uri){
	return { 
		type: 'MOPIDY_DELETE_PLAYLIST',
		uri: uri
	}
}

export function getLibraryPlaylists(){
	return { type: 'MOPIDY_GET_LIBRARY_PLAYLISTS' }
}

export function getPlaylist(uri){
	return { 
		type: 'MOPIDY_GET_PLAYLIST', 
		data: { uri: uri } 
	}
}

export function getPlaylists(uris, processor = null){
	return { 
		type: 'MOPIDY_GET_PLAYLISTS', 
		uris: uris,
		processor: processor
	}
}

export function getDirectory(uri){
	return { 
		type: 'MOPIDY_GET_DIRECTORY', 
		data: { uri: uri } 
	}
}

export function getTrack(uri){
	return { 
		type: 'MOPIDY_GET_TRACK', 
		data: { uri: uri } 
	}
}

export function getLibraryArtists(uri = null){
	return { 
		type: 'MOPIDY_GET_LIBRARY_ARTISTS',
		uri: uri
	}
}

export function clearLibraryArtists(){
	return { 
		type: 'MOPIDY_CLEAR_LIBRARY_ARTISTS' 
	}
}

export function getArtist(uri){
	return { 
		type: 'MOPIDY_GET_ARTIST', 
		data: { uri: uri } 
	}
}

export function getArtists(uris, processor = null){
	return { 
		type: 'MOPIDY_GET_ARTISTS', 
		uris: uris,
		processor: processor
	}
}

export function getAlbum(uri){
	return { 
		type: 'MOPIDY_GET_ALBUM', 
		data: { uri: uri } 
	}
}

export function getAlbums(uris, processor = null){
	return { 
		type: 'MOPIDY_GET_ALBUMS', 
		uris: uris,
		processor: processor
	}
}

export function getLibraryAlbums(uri = null){
	return { 
		type: 'MOPIDY_GET_LIBRARY_ALBUMS',
		uri: uri
	}
}

export function clearLibraryAlbums(){
	return { 
		type: 'MOPIDY_CLEAR_LIBRARY_ALBUMS' 
	}
}

export function runProcessor(processor){
	return {
		type: processor
	}
}

export function cancelProcessor(processor){
	return {
		type: processor+'_CANCEL'
	}
}


/**
 * Searching
 **/

export function clearSearchResults(){
    return {
        type: 'MOPIDY_CLEAR_SEARCH_RESULTS'
    }
}

export function getSearchResults(context, query, limit = 100){
	return {
		type: 'MOPIDY_GET_SEARCH_RESULTS',
		context: context,
		query: query,
		limit: limit
	}
}


/**
 * Other general actions
 **/

export function getQueueHistory(){
	return {
		type: 'MOPIDY_GET_QUEUE_HISTORY'
	}
}
 