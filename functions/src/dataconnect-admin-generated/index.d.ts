import { ConnectorConfig, DataConnect, OperationOptions, ExecuteOperationResponse } from 'firebase-admin/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;


export interface Assignment_Key {
  id: UUIDString;
  __typename?: 'Assignment_Key';
}

export interface CreateNewUserData {
  user_insert: User_Key;
}

export interface CreateNewUserVariables {
  email: string;
  passwordHash: string;
  role: string;
}

export interface DeploymentLocation_Key {
  id: UUIDString;
  __typename?: 'DeploymentLocation_Key';
}

export interface GetAssignmentsForPcmProfileData {
  assignments: ({
    id: UUIDString;
    deploymentLocation: {
      id: UUIDString;
      name: string;
      sector: string;
      state: string;
    } & DeploymentLocation_Key;
      assignmentDate: TimestampString;
      endDate?: DateString | null;
      organizationAssigned?: string | null;
      startDate?: DateString | null;
      status: string;
      adminNotes?: string | null;
  } & Assignment_Key)[];
}

export interface GetAssignmentsForPcmProfileVariables {
  pcmProfileId: UUIDString;
}

export interface GetDeploymentLocationsData {
  deploymentLocations: ({
    id: UUIDString;
    name: string;
    sector: string;
    state: string;
    capacity?: number | null;
    description?: string | null;
  } & DeploymentLocation_Key)[];
}

export interface PCMProfile_Key {
  id: UUIDString;
  __typename?: 'PCMProfile_Key';
}

export interface Preference_Key {
  id: UUIDString;
  __typename?: 'Preference_Key';
}

export interface UpdatePcmProfileData {
  pCMProfile_update?: PCMProfile_Key | null;
}

export interface UpdatePcmProfileVariables {
  id: UUIDString;
  academicQualification?: string | null;
  courseOfStudy?: string | null;
  dateOfBirth?: DateString | null;
  emergencyContactName?: string | null;
  emergencyContactNumber?: string | null;
  gender?: string | null;
  institutionAttended?: string | null;
  medicalHistory?: string | null;
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

/** Generated Node Admin SDK operation action function for the 'CreateNewUser' Mutation. Allow users to execute without passing in DataConnect. */
export function createNewUser(dc: DataConnect, vars: CreateNewUserVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateNewUserData>>;
/** Generated Node Admin SDK operation action function for the 'CreateNewUser' Mutation. Allow users to pass in custom DataConnect instances. */
export function createNewUser(vars: CreateNewUserVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateNewUserData>>;

/** Generated Node Admin SDK operation action function for the 'GetDeploymentLocations' Query. Allow users to execute without passing in DataConnect. */
export function getDeploymentLocations(dc: DataConnect, options?: OperationOptions): Promise<ExecuteOperationResponse<GetDeploymentLocationsData>>;
/** Generated Node Admin SDK operation action function for the 'GetDeploymentLocations' Query. Allow users to pass in custom DataConnect instances. */
export function getDeploymentLocations(options?: OperationOptions): Promise<ExecuteOperationResponse<GetDeploymentLocationsData>>;

/** Generated Node Admin SDK operation action function for the 'UpdatePcmProfile' Mutation. Allow users to execute without passing in DataConnect. */
export function updatePcmProfile(dc: DataConnect, vars: UpdatePcmProfileVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<UpdatePcmProfileData>>;
/** Generated Node Admin SDK operation action function for the 'UpdatePcmProfile' Mutation. Allow users to pass in custom DataConnect instances. */
export function updatePcmProfile(vars: UpdatePcmProfileVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<UpdatePcmProfileData>>;

/** Generated Node Admin SDK operation action function for the 'GetAssignmentsForPcmProfile' Query. Allow users to execute without passing in DataConnect. */
export function getAssignmentsForPcmProfile(dc: DataConnect, vars: GetAssignmentsForPcmProfileVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<GetAssignmentsForPcmProfileData>>;
/** Generated Node Admin SDK operation action function for the 'GetAssignmentsForPcmProfile' Query. Allow users to pass in custom DataConnect instances. */
export function getAssignmentsForPcmProfile(vars: GetAssignmentsForPcmProfileVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<GetAssignmentsForPcmProfileData>>;

