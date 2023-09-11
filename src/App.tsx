import {QueryClientProvider} from "@tanstack/react-query";
import {queryClient} from "@utils/query";
import {MainLayout} from "layouts/MainLayout";

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <MainLayout />
    </QueryClientProvider>
  );
};
