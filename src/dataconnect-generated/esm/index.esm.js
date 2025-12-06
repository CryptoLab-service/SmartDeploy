import { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } from 'firebase/data-connect';

export const connectorConfig = {
  connector: 'example',
  service: 'studio',
  location: 'us-east4'
};

export const createNewUserRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateNewUser', inputVars);
}
createNewUserRef.operationName = 'CreateNewUser';

export function createNewUser(dcOrVars, vars) {
  return executeMutation(createNewUserRef(dcOrVars, vars));
}

export const getDeploymentLocationsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetDeploymentLocations');
}
getDeploymentLocationsRef.operationName = 'GetDeploymentLocations';

export function getDeploymentLocations(dc) {
  return executeQuery(getDeploymentLocationsRef(dc));
}

export const updatePcmProfileRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdatePCMProfile', inputVars);
}
updatePcmProfileRef.operationName = 'UpdatePCMProfile';

export function updatePcmProfile(dcOrVars, vars) {
  return executeMutation(updatePcmProfileRef(dcOrVars, vars));
}

export const getAssignmentsForPcmProfileRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetAssignmentsForPCMProfile', inputVars);
}
getAssignmentsForPcmProfileRef.operationName = 'GetAssignmentsForPCMProfile';

export function getAssignmentsForPcmProfile(dcOrVars, vars) {
  return executeQuery(getAssignmentsForPcmProfileRef(dcOrVars, vars));
}

