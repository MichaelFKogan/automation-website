// pages/api/check-run-status.js

// Import any necessary modules or dependencies

export default async function handler(req, res) {
    const { runId } = req.query;
  
    // Assuming you have a function to check the status of the run based on the runId
    const status = await getRunStatus(runId);
  
    if (status) {
      res.status(200).json({ status: status });
    } else {
      res.status(404).json({ error: "Run not found" });
    }
  }
  