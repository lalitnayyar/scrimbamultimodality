import OpenAI from "openai";
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
});

const image = await openai.images.generate({ 
  model: "dall-e-3", 
  prompt: "A photograph of a rich, golden-brown espresso shot topped with perfect crema in a classic ceramic cup",
  size: "1792x1024",
  quality: "hd",
  style: "natural"
})
console.log(image.data);

document.body.innerHTML = `<img src="${image.data[0].url}" alt="AI-generated image">`;