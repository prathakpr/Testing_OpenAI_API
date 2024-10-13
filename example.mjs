import OpenAI from "openai";
const openai = new OpenAI({ apiKey: 'My_OpenAI_API_Key' })
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