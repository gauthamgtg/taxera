import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';

const HomePage = lazy(() =>
  import('./pages/HomePage').then((module) => ({ default: module.HomePage }))
);
const ServiceCategoryPage = lazy(() =>
  import('./pages/ServiceCategoryPage').then((module) => ({ default: module.ServiceCategoryPage }))
);
const ServiceDetailPage = lazy(() =>
  import('./pages/ServiceDetailPage').then((module) => ({ default: module.ServiceDetailPage }))
);
const ToolsHubPage = lazy(() =>
  import('./pages/ToolsHubPage').then((module) => ({ default: module.ToolsHubPage }))
);
const ToolDetailPage = lazy(() =>
  import('./pages/ToolDetailPage').then((module) => ({ default: module.ToolDetailPage }))
);
const NotFoundPage = lazy(() =>
  import('./pages/NotFoundPage').then((module) => ({ default: module.NotFoundPage }))
);

function RouteFallback() {
  return (
    <div className="min-h-[50vh] px-4 pt-28 pb-16 md:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl animate-pulse">
        <div className="h-4 w-32 rounded bg-blue-100" />
        <div className="mt-6 h-12 max-w-3xl rounded bg-blue-100" />
        <div className="mt-4 h-6 max-w-2xl rounded bg-blue-100" />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          path="/"
          element={
            <Suspense fallback={<RouteFallback />}>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path="/services/:categoryId"
          element={
            <Suspense fallback={<RouteFallback />}>
              <ServiceCategoryPage />
            </Suspense>
          }
        />
        <Route
          path="/services/:categoryId/:serviceSlug"
          element={
            <Suspense fallback={<RouteFallback />}>
              <ServiceDetailPage />
            </Suspense>
          }
        />
        <Route
          path="/tools"
          element={
            <Suspense fallback={<RouteFallback />}>
              <ToolsHubPage />
            </Suspense>
          }
        />
        <Route
          path="/tools/:toolSlug"
          element={
            <Suspense fallback={<RouteFallback />}>
              <ToolDetailPage />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<RouteFallback />}>
              <NotFoundPage />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}
