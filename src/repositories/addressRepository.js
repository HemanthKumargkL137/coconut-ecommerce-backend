const Address = require("../models/address");

exports.findAddressesByUserId = async (userId) => {
    return Address.findAll({
        where: {userId},
        order: [["isDefault","Desc"],["createdAt", "Desc"]],
    })
}

exports.createAddress = async (addressData) => {
  return Address.create(addressData);
};