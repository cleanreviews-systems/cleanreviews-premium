const businessModule = require("../modules/business.module");

module.exports = {
  createBusiness: async (data) => {
    return await businessModule.createBusiness(data);
  },

  getBusinesses: async () => {
    return await businessModule.getBusinesses();
  }
};

