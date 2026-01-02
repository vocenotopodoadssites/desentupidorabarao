
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

// Always initialize with the direct process.env.API_KEY variable as per guidelines.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getGeminiResponse = async (history: ChatMessage[]) => {
  // Using gemini-3-flash-preview for basic text and conversational tasks.
  const model = "gemini-3-flash-preview";
  
  const systemInstruction = `
    Você é o assistente virtual da "Desentupidora Barão", uma empresa líder em desentupimento em São Paulo.
    Seu objetivo é ajudar os clientes a identificarem seus problemas e encaminhá-los para o atendimento humano.
    Serviços oferecidos: Desentupimento de pia, vaso, ralo, fossa, esgoto e calhas.
    Diferenciais: Sem quebra-quebra, atendimento rápido, garantia, atendimento em São Paulo e Grande SP.
    Instruções:
    1. Seja cordial, profissional e empático.
    2. Se o cliente descrever um problema, dê dicas rápidas do que NÃO fazer (como não jogar produtos corrosivos) e diga que um técnico da Barão resolve sem quebrar nada.
    3. Sempre termine encorajando o cliente a ligar para o número (11) 99999-9999 ou clicar no botão de WhatsApp para um orçamento gratuito.
    4. Mantenha as respostas curtas e focadas.
  `;

  // Map history to the parts format expected by the model's generateContent method.
  const contents = history.map(msg => ({
    role: msg.role === 'user' ? 'user' : 'model',
    parts: [{ text: msg.text }]
  }));

  try {
    // Generate content using the model name and structured contents.
    const response = await ai.models.generateContent({
      model,
      contents,
      config: {
        systemInstruction,
        temperature: 0.7,
        // Avoid setting maxOutputTokens unless explicitly required to prevent truncated responses.
      }
    });

    // Access generated text directly from the response.text property (not a method call).
    return response.text || "Desculpe, tive um problema técnico. Por favor, ligue para (11) 99999-9999 para atendimento imediato.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Estou com dificuldades de conexão, mas nossa equipe está pronta para te atender no telefone (11) 99999-9999.";
  }
};
