# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

**If you're looking for the `React README`, you can find it at [`dataconnect-generated/react/README.md`](./react/README.md)**

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*GetDeploymentLocations*](#getdeploymentlocations)
  - [*GetAssignmentsForPCMProfile*](#getassignmentsforpcmprofile)
- [**Mutations**](#mutations)
  - [*CreateNewUser*](#createnewuser)
  - [*UpdatePCMProfile*](#updatepcmprofile)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `example`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## GetDeploymentLocations
You can execute the `GetDeploymentLocations` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getDeploymentLocations(): QueryPromise<GetDeploymentLocationsData, undefined>;

interface GetDeploymentLocationsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetDeploymentLocationsData, undefined>;
}
export const getDeploymentLocationsRef: GetDeploymentLocationsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getDeploymentLocations(dc: DataConnect): QueryPromise<GetDeploymentLocationsData, undefined>;

interface GetDeploymentLocationsRef {
  ...
  (dc: DataConnect): QueryRef<GetDeploymentLocationsData, undefined>;
}
export const getDeploymentLocationsRef: GetDeploymentLocationsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getDeploymentLocationsRef:
```typescript
const name = getDeploymentLocationsRef.operationName;
console.log(name);
```

### Variables
The `GetDeploymentLocations` query has no variables.
### Return Type
Recall that executing the `GetDeploymentLocations` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetDeploymentLocationsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `GetDeploymentLocations`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getDeploymentLocations } from '@dataconnect/generated';


// Call the `getDeploymentLocations()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getDeploymentLocations();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getDeploymentLocations(dataConnect);

console.log(data.deploymentLocations);

// Or, you can use the `Promise` API.
getDeploymentLocations().then((response) => {
  const data = response.data;
  console.log(data.deploymentLocations);
});
```

### Using `GetDeploymentLocations`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getDeploymentLocationsRef } from '@dataconnect/generated';


// Call the `getDeploymentLocationsRef()` function to get a reference to the query.
const ref = getDeploymentLocationsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getDeploymentLocationsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.deploymentLocations);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.deploymentLocations);
});
```

## GetAssignmentsForPCMProfile
You can execute the `GetAssignmentsForPCMProfile` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getAssignmentsForPcmProfile(vars: GetAssignmentsForPcmProfileVariables): QueryPromise<GetAssignmentsForPcmProfileData, GetAssignmentsForPcmProfileVariables>;

interface GetAssignmentsForPcmProfileRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetAssignmentsForPcmProfileVariables): QueryRef<GetAssignmentsForPcmProfileData, GetAssignmentsForPcmProfileVariables>;
}
export const getAssignmentsForPcmProfileRef: GetAssignmentsForPcmProfileRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getAssignmentsForPcmProfile(dc: DataConnect, vars: GetAssignmentsForPcmProfileVariables): QueryPromise<GetAssignmentsForPcmProfileData, GetAssignmentsForPcmProfileVariables>;

interface GetAssignmentsForPcmProfileRef {
  ...
  (dc: DataConnect, vars: GetAssignmentsForPcmProfileVariables): QueryRef<GetAssignmentsForPcmProfileData, GetAssignmentsForPcmProfileVariables>;
}
export const getAssignmentsForPcmProfileRef: GetAssignmentsForPcmProfileRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getAssignmentsForPcmProfileRef:
```typescript
const name = getAssignmentsForPcmProfileRef.operationName;
console.log(name);
```

### Variables
The `GetAssignmentsForPCMProfile` query requires an argument of type `GetAssignmentsForPcmProfileVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetAssignmentsForPcmProfileVariables {
  pcmProfileId: UUIDString;
}
```
### Return Type
Recall that executing the `GetAssignmentsForPCMProfile` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetAssignmentsForPcmProfileData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `GetAssignmentsForPCMProfile`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getAssignmentsForPcmProfile, GetAssignmentsForPcmProfileVariables } from '@dataconnect/generated';

// The `GetAssignmentsForPCMProfile` query requires an argument of type `GetAssignmentsForPcmProfileVariables`:
const getAssignmentsForPcmProfileVars: GetAssignmentsForPcmProfileVariables = {
  pcmProfileId: ..., 
};

// Call the `getAssignmentsForPcmProfile()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getAssignmentsForPcmProfile(getAssignmentsForPcmProfileVars);
// Variables can be defined inline as well.
const { data } = await getAssignmentsForPcmProfile({ pcmProfileId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getAssignmentsForPcmProfile(dataConnect, getAssignmentsForPcmProfileVars);

console.log(data.assignments);

// Or, you can use the `Promise` API.
getAssignmentsForPcmProfile(getAssignmentsForPcmProfileVars).then((response) => {
  const data = response.data;
  console.log(data.assignments);
});
```

### Using `GetAssignmentsForPCMProfile`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getAssignmentsForPcmProfileRef, GetAssignmentsForPcmProfileVariables } from '@dataconnect/generated';

// The `GetAssignmentsForPCMProfile` query requires an argument of type `GetAssignmentsForPcmProfileVariables`:
const getAssignmentsForPcmProfileVars: GetAssignmentsForPcmProfileVariables = {
  pcmProfileId: ..., 
};

// Call the `getAssignmentsForPcmProfileRef()` function to get a reference to the query.
const ref = getAssignmentsForPcmProfileRef(getAssignmentsForPcmProfileVars);
// Variables can be defined inline as well.
const ref = getAssignmentsForPcmProfileRef({ pcmProfileId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getAssignmentsForPcmProfileRef(dataConnect, getAssignmentsForPcmProfileVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.assignments);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.assignments);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## CreateNewUser
You can execute the `CreateNewUser` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createNewUser(vars: CreateNewUserVariables): MutationPromise<CreateNewUserData, CreateNewUserVariables>;

interface CreateNewUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateNewUserVariables): MutationRef<CreateNewUserData, CreateNewUserVariables>;
}
export const createNewUserRef: CreateNewUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createNewUser(dc: DataConnect, vars: CreateNewUserVariables): MutationPromise<CreateNewUserData, CreateNewUserVariables>;

interface CreateNewUserRef {
  ...
  (dc: DataConnect, vars: CreateNewUserVariables): MutationRef<CreateNewUserData, CreateNewUserVariables>;
}
export const createNewUserRef: CreateNewUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createNewUserRef:
```typescript
const name = createNewUserRef.operationName;
console.log(name);
```

### Variables
The `CreateNewUser` mutation requires an argument of type `CreateNewUserVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateNewUserVariables {
  email: string;
  passwordHash: string;
  role: string;
}
```
### Return Type
Recall that executing the `CreateNewUser` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateNewUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateNewUserData {
  user_insert: User_Key;
}
```
### Using `CreateNewUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createNewUser, CreateNewUserVariables } from '@dataconnect/generated';

// The `CreateNewUser` mutation requires an argument of type `CreateNewUserVariables`:
const createNewUserVars: CreateNewUserVariables = {
  email: ..., 
  passwordHash: ..., 
  role: ..., 
};

// Call the `createNewUser()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createNewUser(createNewUserVars);
// Variables can be defined inline as well.
const { data } = await createNewUser({ email: ..., passwordHash: ..., role: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createNewUser(dataConnect, createNewUserVars);

console.log(data.user_insert);

// Or, you can use the `Promise` API.
createNewUser(createNewUserVars).then((response) => {
  const data = response.data;
  console.log(data.user_insert);
});
```

### Using `CreateNewUser`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createNewUserRef, CreateNewUserVariables } from '@dataconnect/generated';

// The `CreateNewUser` mutation requires an argument of type `CreateNewUserVariables`:
const createNewUserVars: CreateNewUserVariables = {
  email: ..., 
  passwordHash: ..., 
  role: ..., 
};

// Call the `createNewUserRef()` function to get a reference to the mutation.
const ref = createNewUserRef(createNewUserVars);
// Variables can be defined inline as well.
const ref = createNewUserRef({ email: ..., passwordHash: ..., role: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createNewUserRef(dataConnect, createNewUserVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.user_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.user_insert);
});
```

## UpdatePCMProfile
You can execute the `UpdatePCMProfile` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updatePcmProfile(vars: UpdatePcmProfileVariables): MutationPromise<UpdatePcmProfileData, UpdatePcmProfileVariables>;

interface UpdatePcmProfileRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdatePcmProfileVariables): MutationRef<UpdatePcmProfileData, UpdatePcmProfileVariables>;
}
export const updatePcmProfileRef: UpdatePcmProfileRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updatePcmProfile(dc: DataConnect, vars: UpdatePcmProfileVariables): MutationPromise<UpdatePcmProfileData, UpdatePcmProfileVariables>;

interface UpdatePcmProfileRef {
  ...
  (dc: DataConnect, vars: UpdatePcmProfileVariables): MutationRef<UpdatePcmProfileData, UpdatePcmProfileVariables>;
}
export const updatePcmProfileRef: UpdatePcmProfileRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updatePcmProfileRef:
```typescript
const name = updatePcmProfileRef.operationName;
console.log(name);
```

### Variables
The `UpdatePCMProfile` mutation requires an argument of type `UpdatePcmProfileVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
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
```
### Return Type
Recall that executing the `UpdatePCMProfile` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdatePcmProfileData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdatePcmProfileData {
  pCMProfile_update?: PCMProfile_Key | null;
}
```
### Using `UpdatePCMProfile`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updatePcmProfile, UpdatePcmProfileVariables } from '@dataconnect/generated';

// The `UpdatePCMProfile` mutation requires an argument of type `UpdatePcmProfileVariables`:
const updatePcmProfileVars: UpdatePcmProfileVariables = {
  id: ..., 
  academicQualification: ..., // optional
  courseOfStudy: ..., // optional
  dateOfBirth: ..., // optional
  emergencyContactName: ..., // optional
  emergencyContactNumber: ..., // optional
  gender: ..., // optional
  institutionAttended: ..., // optional
  medicalHistory: ..., // optional
};

// Call the `updatePcmProfile()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updatePcmProfile(updatePcmProfileVars);
// Variables can be defined inline as well.
const { data } = await updatePcmProfile({ id: ..., academicQualification: ..., courseOfStudy: ..., dateOfBirth: ..., emergencyContactName: ..., emergencyContactNumber: ..., gender: ..., institutionAttended: ..., medicalHistory: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updatePcmProfile(dataConnect, updatePcmProfileVars);

console.log(data.pCMProfile_update);

// Or, you can use the `Promise` API.
updatePcmProfile(updatePcmProfileVars).then((response) => {
  const data = response.data;
  console.log(data.pCMProfile_update);
});
```

### Using `UpdatePCMProfile`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updatePcmProfileRef, UpdatePcmProfileVariables } from '@dataconnect/generated';

// The `UpdatePCMProfile` mutation requires an argument of type `UpdatePcmProfileVariables`:
const updatePcmProfileVars: UpdatePcmProfileVariables = {
  id: ..., 
  academicQualification: ..., // optional
  courseOfStudy: ..., // optional
  dateOfBirth: ..., // optional
  emergencyContactName: ..., // optional
  emergencyContactNumber: ..., // optional
  gender: ..., // optional
  institutionAttended: ..., // optional
  medicalHistory: ..., // optional
};

// Call the `updatePcmProfileRef()` function to get a reference to the mutation.
const ref = updatePcmProfileRef(updatePcmProfileVars);
// Variables can be defined inline as well.
const ref = updatePcmProfileRef({ id: ..., academicQualification: ..., courseOfStudy: ..., dateOfBirth: ..., emergencyContactName: ..., emergencyContactNumber: ..., gender: ..., institutionAttended: ..., medicalHistory: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updatePcmProfileRef(dataConnect, updatePcmProfileVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.pCMProfile_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.pCMProfile_update);
});
```

