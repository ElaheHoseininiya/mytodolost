'use client';
import React, { Suspense } from 'react';
import ErrorBoundary from './ErrorBoundary';
import Header from './layout/header';

type ClientLayoutProps = {
  children: React.ReactNode;
};

const ClientLayout: React.FC<ClientLayoutProps> = ({ children }) => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<div className="p-4">در حال بارگذاری...</div>}>
        <Header />
      </Suspense>
      <ErrorBoundary>{children}</ErrorBoundary>
    </ErrorBoundary>
  );
};

export default ClientLayout;

