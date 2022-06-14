import React from 'react'
import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/Layout';
import Admin from '../../components/auth/Admin';
import Sidebar from '../../components/Sidebar';
import Dashboard from '../../components/Dashboard';
import StyleLinks from '../../components/StyleLinks';
import Header from '../../components/Header';


const AdminIndex = () => {
  return (
    <>

    <Layout>
      <Admin>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-12'>
                    <h1 className='text-center'>
                      <Dashboard/>
                    </h1>
                </div>
            </div>
            </div>
        
      </Admin>
    </Layout>
    <StyleLinks/>
    </>
    
  )
}
AdminIndex.displayName = 'AdminIndex'
export default AdminIndex;
