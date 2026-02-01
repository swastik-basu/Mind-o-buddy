const extractDominantEmotion = (emotionArray) => {
  let dominant = emotionArray[0];
  const scores = {};

  for (const e of emotionArray) {
    scores[e.label] = e.score;
    if (e.score > dominant.score) {
      dominant = e;
    }
  }

  return {
    emotion: dominant.label,
    scores
  };
};

module.exports = { extractDominantEmotion };
