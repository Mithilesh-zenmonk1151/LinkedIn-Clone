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
