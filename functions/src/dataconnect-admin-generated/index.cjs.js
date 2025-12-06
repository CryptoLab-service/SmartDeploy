const { validateAdminArgs } = require('firebase-admin/data-connect');

const connectorConfig = {
  connector: 'example',
  serviceId: 'studio',
  location: 'us-east4'
};
exports.connectorConfig = connectorConfig;

function createNewUser(dcOrVarsOrOptions, varsOrOptions, options) {
  const { dc: dcInstance, vars: inputVars, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrVarsOrOptions, varsOrOptions, options, true, true);
  dcInstance.useGen(true);
  return dcInstance.executeMutation('CreateNewUser', inputVars, inputOpts);
}
exports.createNewUser = createNewUser;

function getDeploymentLocations(dcOrOptions, options) {
  const { dc: dcInstance, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrOptions, options, undefined);
  dcInstance.useGen(true);
  return dcInstance.executeQuery('GetDeploymentLocations', undefined, inputOpts);
}
exports.getDeploymentLocations = getDeploymentLocations;

function updatePcmProfile(dcOrVarsOrOptions, varsOrOptions, options) {
  const { dc: dcInstance, vars: inputVars, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrVarsOrOptions, varsOrOptions, options, true, true);
  dcInstance.useGen(true);
  return dcInstance.executeMutation('UpdatePCMProfile', inputVars, inputOpts);
}
exports.updatePcmProfile = updatePcmProfile;

function getAssignmentsForPcmProfile(dcOrVarsOrOptions, varsOrOptions, options) {
  const { dc: dcInstance, vars: inputVars, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrVarsOrOptions, varsOrOptions, options, true, true);
  dcInstance.useGen(true);
  return dcInstance.executeQuery('GetAssignmentsForPCMProfile', inputVars, inputOpts);
}
exports.getAssignmentsForPcmProfile = getAssignmentsForPcmProfile;

