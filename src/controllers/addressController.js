const addressService = require("../services/addressService");

exports.getAddresses = async (req, res) => {
    try{
        const {userId} = req.query;

        if (!userId) {
            return res.status(200).json({
                success: true,
                message: "Addresses fetched successfully",
                data: [],
            });
        }

        const addresses = await addressService.getAddressesByUserId(userId);

        res.status(200).json({
            success: true,
            message: "Addresses fetched succesfully",
            data: addresses,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch addresses",
            error: error.message,
        })
    }
}

// {
//   "userId": 1,
//   "fullName": "Hemanth Kumar",
//   "phone": "9876543210",
//   "street": "Main Road, Tiptur",
//   "city": "Tiptur",
//   "state": "Karnataka",
//   "country": "India",
//   "pincode": "572201",
//   "isDefault": true
// }

exports.createAddress = async (req,res) => {
    try{
        const {
            userId,
            fullName,
            phone,
            street,
            city,
            state,
            country,
            pincode,
            isDefault,
        } = req.body;

    const address = await addressService.createAddress({
      userId,
      fullName,
      phone,
      street,
      city,
      state,
      country,
      pincode,
      isDefault: isDefault || false,
    });

    res.status(201).json({
        success: true,
        message: "Address created sucessfully",
        data: address,
    });
    } catch(error) {
        res.status(500).json({
            success: false,
            message: "Failed to create address",
            error: error.message,
        });
    }
};