export interface Product {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  image: string;
  features: string[];
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
}