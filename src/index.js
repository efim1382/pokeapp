import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";

import {
	QueryClient,
	QueryClientProvider,
} from "react-query";

import ThemeProvider from "store/ThemeProvider";
import Router from "./router";

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
			<HashRouter>
				<Router />
			</HashRouter>
		</ThemeProvider>
	</QueryClientProvider>
);
