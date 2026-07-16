import type { ReactNode } from 'react';

interface ContainerProps {
  /** Content to render inside the container */
  children: ReactNode;

  /** Additional Tailwind classes */
  className?: string;
}

/**
 * Container
 *
 * A reusable layout wrapper that provides consistent page width
 * and responsive horizontal padding across the application.
 */
const Container = ({
  children,
  className = '',
}: ContainerProps) => {
  return (
    <div
      className={`mx-auto max-w-7xl px-4 md:px-6 lg:px-8 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;