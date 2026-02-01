const parseMeditationResponse = (text) => {
  const typeMatch = text.match(/Meditation Type:\s*(.*)/i);
  const meditationMatch = text.match(/Meditation:\s*([\s\S]*)/i);

  return {
    meditationType: typeMatch ? typeMatch[1].trim() : "breathing",
    meditationText: meditationMatch ? meditationMatch[1].trim() : text
  };
};

module.exports = { parseMeditationResponse };
