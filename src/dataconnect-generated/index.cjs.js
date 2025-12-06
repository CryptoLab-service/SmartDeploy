const { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'example',
  service: 'studio',
  location: 'us-east4'
};
exports.connectorConfig = connectorConfig;

const createNewUserRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateNewUser', inputVars);
}
createNewUserRef.operationName = 'CreateNewUser';
exports.createNewUserRef = createNewUserRef;

exports.createNewUser = function createNewUser(dcOrVars, vars) {
  return executeMutation(createNewUserRef(dcOrVars, vars));
};

const getDeploymentLocationsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetDeploymentLocations');
}
getDeploymentLocationsRef.operationName = 'GetDeploymentLocations';
exports.getDeploymentLocationsRef = getDeploymentLocationsRef;

exports.getDeploymentLocations = function getDeploymentLocations(dc) {
  return executeQuery(getDeploymentLocationsRef(dc));
};

const updatePcmProfileRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdatePCMProfile', inputVars);
}
updatePcmProfileRef.operationName = 'UpdatePCMProfile';
exports.updatePcmProfileRef = updatePcmProfileRef;

exports.updatePcmProfile = function updatePcmProfile(dcOrVars, vars) {
  return executeMutation(updatePcmProfileRef(dcOrVars, vars));
};

const getAssignmentsForPcmProfileRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetAssignmentsForPCMProfile', inputVars);
}
getAssignmentsForPcmProfileRef.operationName = 'GetAssignmentsForPCMProfile';
exports.getAssignmentsForPcmProfileRef = getAssignmentsForPcmProfileRef;

exports.getAssignmentsForPcmProfile = function getAssignmentsForPcmProfile(dcOrVars, vars) {
  return executeQuery(getAssignmentsForPcmProfileRef(dcOrVars, vars));
};
