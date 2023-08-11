import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import {
	QueryClient,
	QueryClientProvider,
} from "react-query";

import ThemeProvider from "store/ThemeProvider";
import router from "./router";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: false,
		},
	},
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<QueryClientProvider client={queryClient}>
		<ThemeProvider>
			<RouterProvider router={router} />
		</ThemeProvider>
	</QueryClientProvider>
);
