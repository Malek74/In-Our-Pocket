import type { AppProps } from "next/app";

import { Button, NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import { fontSans, fontMono } from "@/config/fonts";
import {useRouter} from 'next/router';
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
	return (
			<NextThemesProvider>
				<Component {...pageProps} />
			</NextThemesProvider>
			);
	}

export const fonts = {
	sans: fontSans.style.fontFamily,
	mono: fontMono.style.fontFamily,
};
