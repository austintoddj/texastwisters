import nextVitals from 'eslint-config-next/core-web-vitals'
import { defineConfig, globalIgnores } from 'eslint/config'

const eslintConfig = defineConfig([
  ...nextVitals,
  {
    rules: {
      // Re-enable with warning first, will upgrade to error later
      'react/no-unescaped-entities': 'error',
      'react/jsx-key': 'error',
      '@next/next/no-img-element': 'error',
      // Phase 2: Higher-value rules
      '@next/next/no-html-link-for-pages': 'error',
      'react/jsx-no-useless-fragment': 'error',
      'react/self-closing-comp': 'error',
      'react/jsx-boolean-value': 'error',
      'react-hooks/static-components': 'off'
    }
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
    'playwright-report/**'
  ])
])

export default eslintConfig
