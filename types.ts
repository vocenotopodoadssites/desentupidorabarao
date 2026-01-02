
// Import React to ensure the React namespace is available for React.ReactNode
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  content: string;
  rating: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
