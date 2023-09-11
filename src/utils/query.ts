import {QueryClient} from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: Number.MAX_SAFE_INTEGER,
      staleTime: Number.MAX_SAFE_INTEGER,
    },
  },
});
