import { QueryClientProvider } from '@tanstack/react-query';
import { Router } from './router';
// import { ModeToggle } from '@shared/components/mode-toggle';
import { ThemeProvider } from '@shared/components/theme-provider';
import { CacheKey } from './common/constant';
import { queryClient } from 'shared';
import { reactQueryDebugging } from './config/env';
// import { LanguageToggle } from '@/components/language-toggle';
import { Toaster } from '@shared/components/ui/sonner';
import { LanguageProvider } from '@shared/providers/LanguageProvider';
import ReactQueryDevtoolsProduction from '@shared/hooks/rq/rq-dev-tools';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider
        defaultLanguage="en"
        storageKey={CacheKey.LanguagePreference}>
        <ThemeProvider defaultTheme="light" storageKey={CacheKey.Theme}>
          <Router />

          {/* <span className="absolute right-8 top-8 space-x-2">
            <ModeToggle />
            <LanguageToggle />
          </span> */}

          <Toaster
            richColors
            expand={false}
            closeButton={true}
            position="top-right"
            visibleToasts={10}
            toastOptions={{
              duration: 5000, // 5 seconds
              closeButton: true,
              className: 'text-sm',
            }}
          />
        </ThemeProvider>

        <ReactQueryDevtoolsProduction enabled={reactQueryDebugging} />
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
