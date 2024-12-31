import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
dangerouslyAllowBrowser:true
});

const image = await openai.images.generate({ 
  model: "dall-e-2",
  prompt: "A tiny, curious hedgehog with quills shimmering in the sunlight, exploring a lush garden",
  response_format: "b64_json",
  size: "256x256"
});
console.log(image.data);

document.body.innerHTML = `<img src="data:image/png;base64,${image.data[0].b64_json}" alt="A curious hedgehog exploring a garden">`;