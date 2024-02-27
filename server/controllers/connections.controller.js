const { connectionService } = require("../services");

exports.sendConnectionRequest = async (req, res) => {
  try {
    const response = await connectionService.sendConnectionRequest(req);
   
    return res.status(201).json(response);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
exports.getConnectionsRequest = async (req, res) => {
  try {
    const response = await connectionService.getConnectionsRequest(req);
    return res.status(201).json(response);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
exports.setConnectionFlag = async (req, res) => {
  try {
    const response = await connectionService.setConnectionFlag(req);
    return res.status(201).json(response);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
exports.getConnection = async(req,res)=>{
  try{
      const userId = req.user._id;
      const response = await connectionService.getConnection(userId);
      return res.status(200).json(response)
  }
  catch(error){
      return res.status(500).json({
        success:false,
        message:error.message
      })
  }
};
exports.getSuggestion = async(req,res)=>{
  try{
      
          const userId = req.user._id;
      const response = await connectionService.getSuggestion(userId);
      return res.status(200).json(response)
  }
  catch(error){
      return res.status(500).json({
        success:false,
        message:error.message })
  }
};
