const mongoose = require("mongoose");

const JobOrdersSchema = new mongoose.Schema({
  // Tracking
  createdAt: {
    type: Date,
    default: Date.now,
  },
  jobOrderNo: {
    type: Number,
  },

  emailStatus: {
    type: String,
    default: "Pending",
  },
  customerNo: {
    type: Number,
  },
  vendor: {
    name: {
      type: String,
    },
    _id: {
      type: String,
    },
  },
  // Personal Details
  fName: {
    type: String,
  },
  lName: {
    type: String,
  },
  cName: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  fax: {
    type: String,
  },

  // Address Details
  streetAddress: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  zip: {
    type: String,
  },
  country: {
    type: String,
    default: "USA",
  },

  // Onsite Details
  usageType: {
    type: String,
  },
  products: {
    type: Array,
  },
  deliveryDate: {
    type: String,
  },
  pickupDate: {
    type: String,
  },
  contactPersonName: {
    type: String,
  },
  contactPersonPhone: {
    type: String,
  },
  instructions: {
    type: String,
  },

  // Official Details
  note: {
    type: String,
  },
});

module.exports =
  mongoose.models.JobOrders || mongoose.model("JobOrders", JobOrdersSchema);
