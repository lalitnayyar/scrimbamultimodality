import OpenAI from "openai";
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
});

const image = await openai.images.edit({ 
  image: await fetch("images/building.png"),
  mask: await fetch("images/mask.png"),
  prompt: "A modern building with an eco-friendly entrance consisting of plants, flowers, and palm trees",
  response_format: "b64_json",
  size: "256x256"
});

document.body.innerHTML = `<img src="data:image/png;base64,${image.data[0].b64_json}" alt="AI-generated image">`;