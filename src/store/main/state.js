export default {
  position: 0,
  config: {
    colors: {
      primary: 'light-green-7'
    },
    sections: {
      first: {
        order: 2
      },
      about: {
        order: 1
      },
      reviews: {
        oreder: 3
      },
      partners: {
        oreder: 4
      }
    },
    info: {
      title: '',
      org_inn: '',
      org_phone: '',
      org_email_sales: '',
      org_email_support: '',
      site_name: 'JMsession',
      year_of_foundation: '',
      phone: ''
    }
  },
  routes: {
    home: [
      { _id: 'services', name: 'Услуги' },
      { _id: 'gallery', name: 'Галерея' },
      { _id: 'portfolio', name: 'Портфолио' },
      { _id: 'contacts', name: 'Контакты' }
      // { _id: 'contacts', name: 'Контакты' }
      // { path: 'partners', name: 'Партнерам' },
      // { path: 'faq', name: 'FAQ' },
      // { path: 'reg', name: 'Регистрация' }
    ],
    account: []
  }
}
