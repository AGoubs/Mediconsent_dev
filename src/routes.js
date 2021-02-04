import React from 'react';
import $ from 'jquery';

window.jQuery = $;
window.$ = $;
global.jQuery = $;

const DashboardDefault = React.lazy(() => import('./Demo/Dashboard/Default'));

const Appointment = React.lazy(() => import('./Demo/Appointments/Appointments'));

const Questions = React.lazy(() => import('./Demo/Questions/Questions'));

const Consents = React.lazy(() => import('./Demo/Consents/Consents'));

const Opinions = React.lazy(() => import('./Demo/Opinions/Opinions'));

const Forms = React.lazy(() => import('./Demo/Forms/Forms'));
// const Nvd3Chart = React.lazy(() => import('./Demo/Charts/Nvd3Chart/index'));



const routes = [
    { path: '/', exact: true, name: 'Default', component: DashboardDefault },
    { path: '/appointments', exact: true, name: 'Appointments', component: Appointment },
    { path: '/forms', exact: true, name: 'forms', component: Forms },
    { path: '/questions', exact: true, name: 'questions', component: Questions },
    { path: '/consents', exact: true, name: 'Consents', component: Consents },
    { path: '/opinions', exact: true, name: 'Opinions', component: Opinions },
    // { path: '/charts', exact: true, name: 'Nvd3 Chart', component: Nvd3Chart },
];

export default routes;