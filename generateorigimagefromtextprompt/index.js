import OpenAI from "openai";
import { config } from "dotenv";

config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
});

const image = await openai.images.generate({
  prompt: "An astronaut riding a bicycle on the moon"
});
console.log(image.data);

/**
 * output:[
  {
    url: 'https://oaidalleapiprodscus.blob.core.windows.net/private/org-pkRn3GAJ07lqe8XFAMlInswu/user-BfSykidzbGt3tIJ0ILWQTGtj/img-vtYstSrVey3qRMREJ6jFA3GK.png?st=2024-12-29T20%3A04%3A27Z&se=2024-12-29T22%3A04%3A27Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-12-29T21%3A01%3A09Z&ske=2024-12-30T21%3A01%3A09Z&sks=b&skv=2024-08-04&sig=eAuNyJb%2BeRVWbGuNBNSRPXN4SGhw5GhfD4E4BvIayu8%3D'
  }
 */