// ChatAssistant.jsx
'use client'
import React, { useState } from 'react'; // Assuming you're using React
import ReactMarkdown from 'react-markdown';
import './chatassistant.css'

const ChatAssistant = () => {
  const [question, setQuestion] = useState('');
  const [responses, setResponses] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/query', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question }),
      });
      if (!res.ok) {
        console.error("Error fetching response:", res.status, res.statusText);
        setResponses(prev => [...prev, `Server responded with status: ${res.status} - ${res.statusText}`]);
      } else {
        const data = await res.json();
        setResponses(prev => [...prev, data.answer]); // Append new response
      }
    } catch (error) {
      console.error('Error fetching response:', error);
      setResponses(prev => [...prev, 'Failed to fetch response from the server.']);
    }
  };

  return (
    <>
    <section className="overflow-hidden">
      <div className="nk-hero pt-sm-5 pt-lg-5 pb-0 pb-sm-0 pb-lg-0">
        <div className="container">
          <div className="row align-items-center justify-content-center flex-lg-row-reverse g-gs">

            <div className="col-md-12 col-lg-12 col-xl-10 col-xxl-10">
              <div className="nk-hero-content text-center text-xl-start">
                <p className="lead mb-4 mb-lg-5 pe-xxl-6">I'm here and ready to assist you with online automation consulting. Just let me know if you have a specific type of business in mind, or if you're interested in a particular automation idea, and I can provide you with some suggestions. Feel free to give me a starting point, and I'll take it from there!</p>
                <div className="pt-2 pb-5">

                  <form onSubmit={handleSubmit}>
                    <div className="d-flex flex-column bg-white rounded-3 p-2 col-md-4 col-lg-4 col-xl-4 col-xxl-4" style={{margin: "auto"}}>
                      <div className="d-flex align-items-center flex-grow-1">
  
                        <div className="form-group flex-grow-1">
                          <div className="form-control-wrap">
                            <input
                              className="form-control form-control-lg"
                              type="text"
                              value={question}
                              onChange={(e) => setQuestion(e.target.value)}
                              placeholder="Enter your question"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-group mt-2 mt-sm-0">
                        <button className="btn btn-lg btn-primary w-100" type="submit">
                          Ask AI
                        </button>
                      </div>
                    </div>
                  </form>
                  
                  {responses.map((response, index) => (
                    <div key={index} className="response-container">
                      <p>Response from Chat Assistant:</p>
                      <ReactMarkdown>{response}</ReactMarkdown>
                    </div>
                  ))}

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    </>
  );
};

export default ChatAssistant;
