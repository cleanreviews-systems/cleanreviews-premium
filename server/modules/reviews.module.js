module.exports = {
  saveReview: async (data) => {
    return { success: true, review: data };
  },

  getReviews: async () => {
    return [
      { id: 1, message: "Great service!", rating: 5 },
      { id: 2, message: "Fast and efficient", rating: 4 }
    ];
  }
};

