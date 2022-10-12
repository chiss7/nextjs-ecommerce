import Head from "next/head";
import Link from "next/link";

const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title ? title + " - Ecommerce" : "Ecommerce"}</title>
        <meta name="description" content="Ecommerce website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-12 items-center justify-between shadow-md px-4">
            <Link href="/">
              <a className="text-lg font-bold">Ecommerce</a>
            </Link>
            <div>
              <Link href="/cart">
                <a className="p-2">Cart</a>
              </Link>
              <Link href="/cart">
                <a className="p-2">Login</a>
              </Link>
            </div>
          </nav>
        </header>
        <main className="container">{children}</main>
        <footer className="flex justify-center items-center h-10 shadow-inner">
          <p>Copyright © 2022 Ecommerce</p>
        </footer>
      </div>
    </>
  );
};

export default Layout;
