const addressRepository = require("../repositories/addressRepository");

exports.getAddressesByUserId = async (userId) => {
    const addresses = await addressRepository.findAddressesByUserId(userId);

    return addresses;
}

exports.createAddress = async (addressData) => {
  return addressRepository.createAddress(addressData);
};