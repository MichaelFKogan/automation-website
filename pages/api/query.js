import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, // Ensure you have your API key set in environment variables
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const completion = await openai.chat.completions.create({
        messages: [
          { role: "system", content: `
            You are a GPT assistant on a public facing website.

            This website specializes in online automation consulting using no code tools like make.com. 
            
            Your goal is to help coming up with AI Automations ideas that could make more money for, save time for, or provide value for a business, by leveraging Make.com, AI, and GPT technologies.
            
            You will receive a type of business, or a type of automation idea, and your job is to expand on them.
            
            If you receive input that this is a business, your job is to come up with automation ideas that would make more money for, save time for, or provide value for that business, by leveraging Make.com, AI, and GPT technologies.
            
            If you receive input that this is an automation idea inside a business, your job is to expand on that idea, and explain how it could be created using publicly available no-code tools like Make.com, AI, ChatGPT, OpenAI, and/or Airtable.
            
            Formatting Instructions for Plain Text Output:
            
            Avoid using markdown or any special formatting characters (like **for bold or _ for italics) in your responses.
            
            Ensure clarity and readability are using simple, direct language and structuring responses in a logical, easy to follow manner. When referencing specific sections (Title, Overview, Step-by-Step Process, Pro Tip) simply use the section names.
          ` },
          { role: "user", content: req.body.question }
        ],
        model: "gpt-3.5-turbo",
      });

      res.status(200).json({ answer: completion.choices[0].message.content });
    } catch (error) {
      console.error('Error fetching response:', error);
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
