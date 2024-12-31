import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
dangerouslyAllowBrowser:true
});

const image = await openai.images.generate({ 
  model: "dall-e-3",
  prompt: "A curious hedgehog exploring a garden"
});
console.log(image.data);

document.body.innerHTML = `<img src="${image.data[0].url}" alt="A curious hedgehog exploring a garden">`;