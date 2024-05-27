'use client';
import { useState } from 'react';

export default function Accordion({
  variant,
  accordionItemVariant,
  plusMinus,
  data,
}) {
  const [selected, setSelected] = useState(0);
  const handelToggle = index => {
    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index);
  };
  return (
    <div className="section-content" id="faq">
      <div className="row g-gs justify-content-center">
        <div className="col-xl-9 col-xxl-8">
          <div
            className={`accordion ${plusMinus ? 'accordion-plus-minus' : ''} ${
              variant ? variant : 'accordion-flush'
            } ${variant ? variant : 'accordion-icon-accent'}`}
          >
            {data?.map((item, index) => (
              <div
                className={`accordion-item ${
                  accordionItemVariant ? accordionItemVariant : ''
                }`}
                key={index}
              >
                <h2 className="accordion-header">
                  <button
                    className={`accordion-button ${
                      selected === index ? '' : 'collapsed'
                    }`}
                    onClick={() => handelToggle(index)}
                  >
                    {item.question}
                  </button>
                </h2>
                <div
                  className={`accordion-collapse collapse ${
                    selected === index ? 'show' : ''
                  }`}
                >
                  <div className="accordion-body">{item.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
