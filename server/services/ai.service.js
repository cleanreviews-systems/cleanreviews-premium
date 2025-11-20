async function generateReply(reviewText) {
  // Version simple pour l’instant, on branchera l’IA OpenAI plus tard
  return `Merci pour votre avis : "${reviewText}". Nous apprécions vraiment votre retour et nous ferons le maximum pour continuer à nous améliorer.`;
}

module.exports = {
  generateReply,
};

