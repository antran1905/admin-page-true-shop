/**
 * @file  Key of action will be listed here
 */

enum ActionTypeKeys {
	GET_ALL_CINEMAS = 'CINEMA_PAGE/GET_ALL_CINEMAS',
	GET_ALL_CINEMAS_SUCCESS = 'CINEMA_PAGE/GET_ALL_CINEMAS_SUCCESS',
	GET_ALL_CINEMAS_FAIL = 'CINEMA_PAGE/GET_ALL_CINEMAS_FAIL',

	TOGGLE_MODAL = 'CINEMA_PAGE/TOGGLE_MODAL',

	HANDLE_CURRENT_CINEMA = 'CINEMA_PAGE/HANDLE_CURRENT_CINEMA',

	DELETE_CINEMA = 'CINEMA_PAGE/DELETE_CINEMA',
	DELETE_CINEMA_SUCCESS = 'CINEMA_PAGE/DELETE_CINEMA_SUCCESS',
	DELETE_CINEMA_FAIL = 'CINEMA_PAGE/DELETE_CINEMA_FAIL',

	CREATE_CINEMA = 'CINEMA_PAGE/CREATE_CINEMA',
	CREATE_CINEMA_SUCCESS = 'CINEMA_PAGE/CREATE_CINEMA_SUCCESS',
	CREATE_CINEMA_FAIL = 'CINEMA_PAGE/CREATE_CINEMA_FAIL',

	HANDLE_CLEAR = 'CINEMA_PAGE/HANDLE_CLEAR',

	UPDATE_CINEMA = 'CINEMA_PAGE/UPDATE_CINEMA',
	UPDATE_CINEMA_SUCCESS = 'CINEMA_PAGE/UPDATE_CINEMA_SUCCESS',
	UPDATE_CINEMA_FAIL = 'CINEMA_PAGE/UPDATE_CINEMA_FAIL',
}

export default ActionTypeKeys;