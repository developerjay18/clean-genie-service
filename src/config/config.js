const config = {
  serviceID: String(import.meta.env.VITE_EMAILJS_SERVICEID),
  templateID: String(import.meta.env.VITE_EMAILJS_TEMPLATEID),
  publicKey: String(import.meta.env.VITE_EMAILJS_PUBLICKEY),
};

export default config;
