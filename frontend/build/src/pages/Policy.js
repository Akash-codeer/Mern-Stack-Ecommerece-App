import React from 'react'
import Layout from '../components/layout/layout'

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row policy">
        <div className="col-md-6">
          <img 
          src="/images/contact.jpg" 
          alt="policy" 
          style={{width:"100%"}}
          />
        </div>

        <div className="col-md-4">
              <p>Add Privacy policy</p>
              <p>Add Privacy policy</p>
              <p>Add Privacy policy</p>
              <p>Add Privacy policy</p>
              <p>Add Privacy policy</p>
              <p>Add Privacy policy</p>
        </div>
      </div>
    </Layout>
  );
}

export default Policy;