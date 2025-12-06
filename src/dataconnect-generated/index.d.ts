import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

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

interface CreateNewUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateNewUserVariables): MutationRef<CreateNewUserData, CreateNewUserVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateNewUserVariables): MutationRef<CreateNewUserData, CreateNewUserVariables>;
  operationName: string;
}
export const createNewUserRef: CreateNewUserRef;

export function createNewUser(vars: CreateNewUserVariables): MutationPromise<CreateNewUserData, CreateNewUserVariables>;
export function createNewUser(dc: DataConnect, vars: CreateNewUserVariables): MutationPromise<CreateNewUserData, CreateNewUserVariables>;

interface GetDeploymentLocationsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetDeploymentLocationsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetDeploymentLocationsData, undefined>;
  operationName: string;
}
export const getDeploymentLocationsRef: GetDeploymentLocationsRef;

export function getDeploymentLocations(): QueryPromise<GetDeploymentLocationsData, undefined>;
export function getDeploymentLocations(dc: DataConnect): QueryPromise<GetDeploymentLocationsData, undefined>;

interface UpdatePcmProfileRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdatePcmProfileVariables): MutationRef<UpdatePcmProfileData, UpdatePcmProfileVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdatePcmProfileVariables): MutationRef<UpdatePcmProfileData, UpdatePcmProfileVariables>;
  operationName: string;
}
export const updatePcmProfileRef: UpdatePcmProfileRef;

export function updatePcmProfile(vars: UpdatePcmProfileVariables): MutationPromise<UpdatePcmProfileData, UpdatePcmProfileVariables>;
export function updatePcmProfile(dc: DataConnect, vars: UpdatePcmProfileVariables): MutationPromise<UpdatePcmProfileData, UpdatePcmProfileVariables>;

interface GetAssignmentsForPcmProfileRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetAssignmentsForPcmProfileVariables): QueryRef<GetAssignmentsForPcmProfileData, GetAssignmentsForPcmProfileVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetAssignmentsForPcmProfileVariables): QueryRef<GetAssignmentsForPcmProfileData, GetAssignmentsForPcmProfileVariables>;
  operationName: string;
}
export const getAssignmentsForPcmProfileRef: GetAssignmentsForPcmProfileRef;

export function getAssignmentsForPcmProfile(vars: GetAssignmentsForPcmProfileVariables): QueryPromise<GetAssignmentsForPcmProfileData, GetAssignmentsForPcmProfileVariables>;
export function getAssignmentsForPcmProfile(dc: DataConnect, vars: GetAssignmentsForPcmProfileVariables): QueryPromise<GetAssignmentsForPcmProfileData, GetAssignmentsForPcmProfileVariables>;

