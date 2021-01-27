export default {
    items: [
        {
            id: 'navigation',
            title: 'Navigation',
            type: 'group',
            icon: 'icon-navigation',
            children: [
                {
                    id: 'dashboard',
                    title: 'Accueil',
                    type: 'item',
                    url: '/',
                    icon: 'feather icon-home',
                }
            ]
        },
        // {
        //     id: 'chart',
        //     title: 'Stats',
        //     type: 'group',
        //     icon: 'icon-charts',
        //     children: [
        //         {
        //             id: 'charts',
        //             title: 'Statistiques',
        //             type: 'item',
        //             icon: 'feather icon-pie-chart',
        //             url: '/charts/nvd3'
        //         }
        //     ]
        // },
        {
            id: 'appointment',
            title: 'Gestion',
            type: 'group',
            icon: 'icon-charts',
            children: [
                {
                    id: 'appointments',
                    title: 'Importation rendez-vous',
                    type: 'item',
                    icon: 'feather icon-calendar',
                    url: '/appointments'
                },
                {
                    id: 'questions',
                    title: 'Questionnaire',
                    type: 'item',
                    icon: 'feather icon-clipboard',
                    url: '/questions'
                }
            ]
        },
        {
            id: 'consent-opinion',
            title: 'Consentements & Avis',
            type: 'group',
            icon: 'icon-charts',
            children: [
                {
                    id: 'consents',
                    title: 'Consentements',
                    type: 'item',
                    icon: 'feather icon-edit',
                    url: '/consents'
                },
                {
                    id: 'opinions',
                    title: 'Avis',
                    type: 'item',
                    icon: 'feather icon-star',
                    url: '/opinions'
                }
            ]
        },

        {
            id: 'deconnect',
            title: 'Deconnexion',
            type: 'group',
            icon: 'icon-pages',
            children: [
                {
                    id: 'deconnect',
                    title: 'Deconnexion',
                    type: 'item',
                    url: '/auth/signin-1',
                    classes: 'nav-item',
                    icon: 'feather icon-power',
                    breadcrumbs: false
                },

            ]
        }
    ]
}