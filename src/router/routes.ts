
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
    }
];