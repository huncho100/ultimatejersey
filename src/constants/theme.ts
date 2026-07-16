// src/constants/theme.ts

export const theme = {
  colors: {
    primary: 'blue-600',
    primaryHover: 'blue-700',

    secondary: 'slate-900',
    secondaryHover: 'slate-800',

    accent: 'orange-500',

    background: 'gray-50',
    surface: 'white',

    text: {
      primary: 'gray-900',
      secondary: 'gray-600',
      muted: 'gray-400',
    },

    border: 'gray-200',

    success: 'green-600',
    warning: 'amber-500',
    danger: 'red-600',
  },

  spacing: {
    section: 'py-16',
    container: 'px-4 md:px-6 lg:px-8',
  },

  borderRadius: {
    sm: 'rounded-md',
    md: 'rounded-lg',
    lg: 'rounded-xl',
  },
} as const;