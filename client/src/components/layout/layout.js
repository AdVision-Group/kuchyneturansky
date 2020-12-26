/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"

import 'bootstrap/dist/css/bootstrap.min.css';
import AdminProvider from '../../context/admin/admin.context'
import Header from "../header/header.component"
import Footer from '../footer/footer.component'

import {GlobalStyles} from './layout.styles'



const Layout = ({ children }) => {

  return (
    <React.Fragment>
      <GlobalStyles/>
      <AdminProvider>
        <Header />
        <main>
            {children}
        </main>
        <Footer/>
      </AdminProvider>
    </React.Fragment>
  )
}

export default Layout
