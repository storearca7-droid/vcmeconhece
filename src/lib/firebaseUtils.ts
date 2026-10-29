import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db, auth } from './firebase';
import { ContactLead } from '../types';

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
  };
}

export function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
    },
    operationType,
    path,
  };
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

export async function saveCommercialLead(lead: Omit<ContactLead, 'id' | 'createdAt'>) {
  const pathForWrite = 'commercialLeads';
  try {
    const docRef = await addDoc(collection(db, pathForWrite), {
      name: lead.name,
      company: lead.company || '',
      whatsapp: lead.whatsapp,
      email: lead.email,
      segment: lead.segment,
      interestType: lead.interestType,
      message: lead.message || '',
      createdAt: serverTimestamp(),
    });
    return docRef.id;
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, pathForWrite);
  }
}
