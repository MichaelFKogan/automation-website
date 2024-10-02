'use client';
import { useState } from 'react';
import PricingCardStyle2 from './PricingCardStyle2';

export default function PricingSectionStyle2({ variant2 }) {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="section-content">


      {/* <div className={`pricing-toggle-wrap mb-5 ${toggle ? 'pricing-yearly' : ''}`}>
        <div className="h5 mb-0 pricing-toggle-text monthly">Monthly</div>
        <div className="mx-3">
          <button className="pricing-toggle" onClick={() => setToggle(!toggle)}>
            <span className="pricing-toggle-ball" />
          </button>
        </div>
        <div className="h5 mb-0 pricing-toggle-text yearly position-relative">
          Yearly
          <span className="badge text-bg-success-soft fw-normal text-uppercase smaller rounded-pill position-absolute ms-n5 mb-2 mb-sm-0 ms-sm-3 translate-middle-sm-y start-100 bottom-100 bottom-sm-auto top-sm-50">
            Save 12%
          </span>
        </div>
      </div> */}




      <div className="row g-gs">
        <div className="col-xxl-4 col-xl-4">
          <PricingCardStyle2
            featured
            title="Pro"
            price={toggle ? '190' : '1500'}
            duration={toggle ? 'yearly' : 'month'}
            mainFeature="Incorporates AI into your workflow. Good for larger scale projects like social media and content automation."
            alertMessage="Try out all features to determine what works best for you"
            btnText={toggle ? 'Get Committed' : 'Get Started'}
            btnUrl="/"
            featureTitle="Everything in Basic, plus"
            featureList={[
              'Persomalized Email Outreach At Scale',
              'Generating Content Using AI',
              'Social Media Automation',
              'Content Creation Automation',
              // 'Automating Email Responses (pre-approval before sending)',
            ]}
            variant2={variant2}
          />
        </div>



        <div className="col-xxl-4 col-xl-4 col-md-6 order-xl-first">
          <PricingCardStyle2
            title="Basic"
            price="1000"
            duration="month"
            mainFeature="Minimal setup, plug and play. Plugs into your current system. No AI needed."
            alertMessage="Try out all features to determine what works best for you"
            btnText="Get Started"
            btnUrl="/"
            featureTitle="Give a try"
            featureList={[
              'Automating Unpaid Invoices',
              'Automating Email Responses (pre-approve before sending)',
              'Automating Invoice Creation',
            ]}
            variant2={variant2}
          />
        </div>



        <div className="col-xxl-4 col-xl-4 col-md-6">
          <PricingCardStyle2
            title="Custom"
            price="2000+"
            duration="month"
            mainFeature="For large scale web applications. Custom front end views and backend data management."
            alertMessage="Take your business to the another level with custom package and support."
            btnText="Get Started"
            btnUrl="contact"
            featureTitle="Everything in Pro, plus"
            featureList={[
              "AI Customer ChatBot Trained To your Company's Data",
              "AI Staff Training Chatbot",
              'AI Article Writer',
              'AI Content Creation; Blog writer',

            ]}
            variant2={variant2}
          />
        </div>
      </div>
    </div>
  );
}
