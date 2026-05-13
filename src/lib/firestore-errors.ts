import { auth } from "./firebase";

export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

export interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
    tenantId?: string | null;
    providerInfo?: {
      providerId?: string | null;
      email?: string | null;
    }[];
  };
}

export function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  let errorMessage: string;
  if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === 'object' && error !== null && 'message' in error) {
      errorMessage = String((error as any).message);
  } else {
    errorMessage = String(error);
  }

  const errInfo: FirestoreErrorInfo = {
    error: errorMessage,
    authInfo: {
      userId: auth.currentUser?.uid || 'unknown',
      email: auth.currentUser?.email || 'unknown',
      emailVerified: auth.currentUser?.emailVerified || false,
      isAnonymous: auth.currentUser?.isAnonymous || false,
      tenantId: auth.currentUser?.tenantId || 'unknown',
      providerInfo: auth.currentUser?.providerData?.map(provider => ({
        providerId: provider.providerId || 'unknown',
        email: provider.email || 'unknown',
      })) || []
    },
    operationType,
    path
  };
  
  // Log a very safe version of the error to avoid circularity issues
  console.error('Firestore Error:', {
    message: errInfo.error,
    operationType: errInfo.operationType,
    path: errInfo.path,
    userId: errInfo.authInfo.userId
  });
  
  throw new Error(`Firestore operation ${operationType} on ${path || 'unknown path'} failed: ${errorMessage}`);
}
