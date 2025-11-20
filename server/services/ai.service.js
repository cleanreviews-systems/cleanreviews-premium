const aiModule = require("../modules/ai.module");

module.exports = {
  analyzeText: async (text) => {
    return await aiModule.analyze(text);
  }
};

