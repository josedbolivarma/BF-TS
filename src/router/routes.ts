import { lazy, LazyExoticComponent } from "react";

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}

const lazy1 = lazy(() => import(/* webpackChunkName: "LazyHomePage" */'../buona/pages/HomePage/HomePage'));
const lazy2 = lazy(() => import(/* webpackChunkName: "LazyDetailPage" */'../buona/pages/DetailPage/DetailPage'));
const lazy3 = lazy(() => import(/* webpackChunkName: "LazyProductsPage" */'../buona/pages/ProductsPage/ProductsPage'));
const lazy4 = lazy(() => import(/* webpackChunkName: "LazyProductsPage" */'../buona/pages/Competition/Competition'));
const lazy5 = lazy(() => import(/* webpackChunkName: "LazyProductsPage" */'../buona/pages/Funcional/Funcional'));
const lazy6 = lazy(() => import(/* webpackChunkName: "LazyProductsPage" */'../buona/pages/Gain/Gain'));
const lazy7 = lazy(() => import(/* webpackChunkName: "LazyProductsPage" */'../buona/pages/Burn/Burn'));
const lazy8 = lazy(() => import(/* webpackChunkName: "LazyProductsPage" */'../buona/pages/Cart/Cart'));
const lazy9 = lazy(() => import(/* webpackChunkName: "LazyProductsPage" */'../buona/pages/BuonaTest/BuonaTest'));
const lazy10 = lazy(() => import(/* webpackChunkName: "LazyTrainingsPage" */'../buona/pages/Trainings/Trainings'));
const lazy11 = lazy(() => import(/* webpackChunkName: "LazyExercisePage" */'../buona/pages/Exercise/Exercise'));
const lazy12 = lazy(() => import(/* webpackChunkName: "LazyLoginPage" */'../auth/pages/Login/Login'));
const lazy13 = lazy(() => import(/* webpackChunkName: "LazyRegisterPage" */'../auth/pages/Register/Register'));

export const routes: Route[] = [
    {
        to: '/',
        path: '/',
        Component: lazy1,
        name: 'Home'
    },
    {
        to: '/detalle',
        path: '/detalle',
        Component: lazy2,
        name: 'Detail Page'
    },
    {
        to: '/products',
        path: '/products',
        Component: lazy3,
        name: 'Products Page'
    },
    {
        to: '/competition',
        path: '/competition',
        Component: lazy4,
        name: 'Competition Page'
    },
    {
        to: '/functional',
        path: '/functional',
        Component: lazy5,
        name: 'Functional Page'
    },
    {
        to: '/gain',
        path: '/gain',
        Component: lazy6,
        name: 'Gain Page'
    },
    {
        to: '/burn',
        path: '/burn',
        Component: lazy7,
        name: 'Burn Page'
    },
    {
        to: '/cart',
        path: '/cart',
        Component: lazy8,
        name: 'Cart Page'
    },
    {
        to: '/test',
        path: '/test',
        Component: lazy9,
        name: 'BuonaTest Page'
    },
    {
        to: '/trainning',
        path: '/trainning',
        Component: lazy10,
        name: 'Trainning Page'
    },
    {
        to: '/exercise/:id',
        path: '/exercise/:id',
        Component: lazy11,
        name: 'Exercise Page'
    }
];