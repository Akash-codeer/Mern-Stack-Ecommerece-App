import React from 'react'
import Header from './Header'
import Footer from './Footer'
import {Helmet} from 'react-helmet';
import { Toaster } from "react-hot-toast";

const layout = ({children, title, description, keywords, author}) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>

      <Header />
      <main style={{ minHeight: "80vh" }}>
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          toastOptions={{
            success: {
              style: {
                background: "green",
              },
              duration: 5000,
            },
            error: {
              style: {
                background: "red",
              },
              duration: 4000,
            },
          }}
        />
        {children}
      </main>
      <Footer />
    </div>
  );
}

layout.defaultProps = {
  title: "Ecommerce app - Shop now",
  description: "Mern stack Project",
  keywords: "mern, react, node, mongodb",
  author: "Akash Dash"
}

export default layout;
