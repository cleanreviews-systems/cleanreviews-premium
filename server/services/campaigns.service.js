const campaignsModule = require("../modules/campaigns.module");

module.exports = {
  createCampaign: async (data) => {
    return await campaignsModule.createCampaign(data);
  },

  getCampaigns: async () => {
    return await campaignsModule.getCampaigns();
  }
};

