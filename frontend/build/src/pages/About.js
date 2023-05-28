import React from 'react'
import Layout from '../components/layout/layout'

const About = () => {
  return (
    <Layout title={"About Us- Ecommerce App"}>
      <div className="row aboutus">
        <div className="col-md-6">
          <img src="/images/about.jpg" alt="aboutus" />
        </div>

        <div className="col-md-4">
          <p className="text-justify m-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
            architecto pariatur, laborum eligendi quae ut ea numquam quisquam
            reiciendis exercitationem, quas perferendis, error minus
            perspiciatis corporis sit blanditiis dolores voluptate.x
          </p>
        </div>

      </div>
    </Layout>
  );
}

export default About
