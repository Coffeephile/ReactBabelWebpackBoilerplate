import AppComponent from './components/app';
import IndexComponent from './components/index';
import BooksComponent from './components/books';
import AboutComponent from './components/about';

const routes = {
  path: '',
  component: AppComponent,
  childRoutes: [
    {
      path: '/',
      component: IndexComponent
    },
    {
      path: '/books',
      component: BooksComponent
    },
    {
      path: '/about',
      component: AboutComponent
    }
  ]
}

export { routes };
