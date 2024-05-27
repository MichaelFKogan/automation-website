// Ensure to include 'use client' at the top for client components in Next.js
'use client';
import React, { useState, useEffect } from 'react';

export default function ChatAssistant() {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');
  const [runId, setRunId] = useState('');

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const submitQuestion = async () => {
    const response = await fetch(`/api/ask-question?runId=${runId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        assistantId: 'asst_27ZcNLI5sjrltjfGTiBs9L3s', // Replace with your actual assistant ID
        question: question,
      }),
    });
  
    const data = await response.json();
    console.log(data); // Log to see the structure
    if (data && data.id) {
      setRunId(data.id); // Save the run ID to poll for status later
    } else {
      setResponse("Failed to submit question. Please try again.");
    }
    setQuestion('');
  };
  

  useEffect(() => {
    if (!runId) return;

    const intervalId = setInterval(async () => {
      // Replace `/api/check-run-status` with the actual API endpoint to check the run's status
      const response = await fetch(`/api/check-run-status/${runId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      
      if (data.status === 'completed') {
        clearInterval(intervalId); // Stop polling
        // Assuming the final response is in a field named 'result'. Adjust according to actual structure.
        setResponse(data.result || "Response completed without a result.");
      }
    }, 5000); // Check every 5 seconds

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [runId]); // Effect runs whenever `runId` changes

  return (
    <>
    <div>
      <textarea value={question} onChange={handleQuestionChange} placeholder="Ask a question..." ></textarea>
      <button onClick={submitQuestion}>Submit</button>
      <div>
        <p>Response: <pre>{response}</pre> </p>
      </div>
    </div>
  </>
  );
};