import OpenAI from "openai";
const openai = new OpenAI({ apiKey: 'My_OpenAI_API_Key' }) // renamed my api key for safety issues, also have used key via user system envirnment PATH
async function getText() {
const completion = await openai.chat.completions.create({
    messages: [
        { role: "system", content: "You are a helpful assistant." },
        {
            role: "user",
            content: "Write about nodejs.",
        }
    ],
    model: "gpt-4o-mini"
});

console.log(completion.choices[0].message);
}

getText();