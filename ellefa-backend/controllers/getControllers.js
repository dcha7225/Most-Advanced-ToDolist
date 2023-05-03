const Get = require("../models/get");

exports.getById = async (req, res, next) => {
    try{
        let getId = req.params.id;
        let [get,_] = await Get.findById(getId);
        res.status(200).json({get});
    } catch (error){
        if (error.errno === 1054) {
            // Row not found error
            res.status(200).json(null)
          } else {
            console.error(error);
            next(error);
          }
    }
};
  