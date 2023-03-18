import React, { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthRoutesProps, routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader/index';
import { RequireAuth } from 'app/providers/Router/ui/RequireAuth';

const AppRouter = () => {
  const renderWithWrapper = useCallback((route: AuthRoutesProps) => {
    const element = (
      <Suspense fallback={<PageLoader />}>
        <div className="page-wrapper">
          {route.element}
        </div>
      </Suspense>
    );

    return (
      <Route
        key={route.path}
        path={route.path}
        element={
          route.authOnly
            ? <RequireAuth>{element}</RequireAuth>
            : element
        }
      />
    );
  }, []);

  return (
    <Routes>
      {Object.values(routeConfig).map(renderWithWrapper)}
    </Routes>
  );
};

export default memo(AppRouter);
