const shouldSuggestMeditation = (emotion, scores) => {
  if (!scores) return false;

  const negativeEmotions = ["sadness", "fear", "anger"];

  if (negativeEmotions.includes(emotion) && scores[emotion] > 0.5) {
    return true;
  }

  return false;
};

module.exports = { shouldSuggestMeditation };
