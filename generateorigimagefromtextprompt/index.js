import OpenAI from "openai";
import { config } from "dotenv";

config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
});

const image = await openai.images.generate({
  model: "dall-e-3",
  prompt: "A robot astronaut riding a bicycle on the moon"
});
console.log(image.data);

/** output: [
  {
    revised_prompt: "A scene on the chalky, celestial surface of the moon. Vast expanses of moon dust lead to distant, looming craters under the orb's minimal gravity. The ethereal glow of the earth can be seen from the sky. In the foreground, an advanced mechanical astronaut, its metallic surfaces gleaming under the sun's light, is riding a sturdy explorer bicycle with thick, durable tires suitable for lunar terrain. The astronaut's artificial eyes focus on the lunar horizon as it pedals forward with a sense of determination and exploration.",
    url: 'https://oaidalleapiprodscus.blob.core.windows.net/private/org-pkRn3GAJ07lqe8XFAMlInswu/user-BfSykidzbGt3tIJ0ILWQTGtj/img-gsAk1151y5bWdeWDwkESv4b1.png?st=2024-12-29T20%3A08%3A59Z&se=2024-12-29T22%3A08%3A59Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-12-29T20%3A52%3A06Z&ske=2024-12-30T20%3A52%3A06Z&sks=b&skv=2024-08-04&sig=7oP6sG5/Ce5HQl0XZGTKatDsihEsCrpSPC4tScfgnvA%3D'
  }
] */