import React from 'react'
import Layout from '../components/layout/layout';
import { BiMailSend, BiPhoneCall, BiSupport} from 'react-icons/bi';

const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="row contactus">
        <div className="col-md-6">
          <img
            src="/images/contact.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>

        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center mt-5">CONTACT US</h1>
          <p className="text-justify mt-2">
            any query and info product feel free to call anytime we 24X7
            available
          </p>

          <p className="mt-3">
            <BiMailSend /> : www.help@haveableecommerce.com
          </p>
          <p className="mt-3">
            <BiPhoneCall/> : 088-333-555-666
          </p>
          <p className='mt-3'>
            <BiSupport/> : 1800-0000-0000 (tollfree)
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default Contact
