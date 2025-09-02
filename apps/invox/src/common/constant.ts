export const NavigationRoutes = {
  Home: "/",
  SetPassword: "/set-password",
  SignIn: "/sign-in",
  SignUp: "/sign-up",
  ForgotPassword: "/forgot-password",
  Dashboard: "/dashboard",
  Invoices: "/invoices",
  InvoiceDetail: "/invoices/:id",
  Settings: "/settings",
  Profile: "/profile",
  Help: "/help",
  Clarifier: "/clarifier",
  Logs: "/logs",
  Indexer: "/indexer",
  Verifier: "/verifier",
  pdfpage: "/pdfpage"
} as const;

export const CacheKey = {
  User: 'users',
  PreferSidebarOpen: 'prefer-sidebar-open',
  LanguagePreference: 'language-preference',
  Theme: 'vite-ui-theme',
} as const;

export const ReactQueryKey = {
  Users: 'users',
  Roles: 'roles',
} as const;
