import { CreateNewUserData, CreateNewUserVariables, GetDeploymentLocationsData, UpdatePcmProfileData, UpdatePcmProfileVariables, GetAssignmentsForPcmProfileData, GetAssignmentsForPcmProfileVariables } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useCreateNewUser(options?: useDataConnectMutationOptions<CreateNewUserData, FirebaseError, CreateNewUserVariables>): UseDataConnectMutationResult<CreateNewUserData, CreateNewUserVariables>;
export function useCreateNewUser(dc: DataConnect, options?: useDataConnectMutationOptions<CreateNewUserData, FirebaseError, CreateNewUserVariables>): UseDataConnectMutationResult<CreateNewUserData, CreateNewUserVariables>;

export function useGetDeploymentLocations(options?: useDataConnectQueryOptions<GetDeploymentLocationsData>): UseDataConnectQueryResult<GetDeploymentLocationsData, undefined>;
export function useGetDeploymentLocations(dc: DataConnect, options?: useDataConnectQueryOptions<GetDeploymentLocationsData>): UseDataConnectQueryResult<GetDeploymentLocationsData, undefined>;

export function useUpdatePcmProfile(options?: useDataConnectMutationOptions<UpdatePcmProfileData, FirebaseError, UpdatePcmProfileVariables>): UseDataConnectMutationResult<UpdatePcmProfileData, UpdatePcmProfileVariables>;
export function useUpdatePcmProfile(dc: DataConnect, options?: useDataConnectMutationOptions<UpdatePcmProfileData, FirebaseError, UpdatePcmProfileVariables>): UseDataConnectMutationResult<UpdatePcmProfileData, UpdatePcmProfileVariables>;

export function useGetAssignmentsForPcmProfile(vars: GetAssignmentsForPcmProfileVariables, options?: useDataConnectQueryOptions<GetAssignmentsForPcmProfileData>): UseDataConnectQueryResult<GetAssignmentsForPcmProfileData, GetAssignmentsForPcmProfileVariables>;
export function useGetAssignmentsForPcmProfile(dc: DataConnect, vars: GetAssignmentsForPcmProfileVariables, options?: useDataConnectQueryOptions<GetAssignmentsForPcmProfileData>): UseDataConnectQueryResult<GetAssignmentsForPcmProfileData, GetAssignmentsForPcmProfileVariables>;
