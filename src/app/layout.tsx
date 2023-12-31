"use client";

import React, { Fragment, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Toaster } from "react-hot-toast";

import "@/app/globals.css";
import { Footer, Header } from "@/components";

// redux ----------------
import StoreProvider from "@/providers/StoreProvider";
import { loadUser } from "@/redux/slices/authSlice";
import { useAppDispatch } from "@/redux/hook";

// Skeleton styles
import "react-loading-skeleton/dist/skeleton.css";
import "react-vertical-timeline-component/style.min.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

const toastOptions = {
  // Define default options
  className: "",
  duration: 5000,
  style: {
    background: "#363636",
    color: "#fff",
  },

  // Default options for specific types
  success: {
    duration: 5000,
    theme: {
      primary: "green",
      secondary: "black",
    },
  },
};

function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <html>
      <head />

      <body>
        <StoreProvider>
          {pathname?.match(/^\/userAuth/) ||
          pathname?.match(/^\/user/) ||
          pathname?.match(/^\/cms/) ? (
            <App>{children}</App>
          ) : (
            <>
              <Header />
              <App>{children}</App>
              <Footer />
            </>
          )}
        </StoreProvider>
      </body>
    </html>
  );
}

export default RootLayout;

const App = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <Fragment>
      {children}
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        toastOptions={toastOptions}
      />
    </Fragment>
  );
};
