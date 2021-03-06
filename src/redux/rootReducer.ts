/**
 * @file Root reducers
 */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

// Place for reducers' app
import LoginPage, { name as nameOfLoginPage } from '../modules/LoginPage';
import DashboardLayout, { name as nameOfDashboardLayout } from '../layouts/DashboardLayout';

import AboutUsPage, { name as nameOfAboutUsPage } from '../modules/AboutUsPage';
import LandingPage, { name as nameOfLandingPage } from '../modules/LandingPage';

/*----Reducers List-----------------*/
const reducers = {
	[nameOfDashboardLayout]: DashboardLayout,
	[nameOfLoginPage]: LoginPage,
	[nameOfAboutUsPage]: AboutUsPage,
	[nameOfLandingPage]: LandingPage,
};

const rootReducer = (history: History<any>) =>
	combineReducers({
		...reducers,
		router: connectRouter(history),
	});

export default rootReducer;
