import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { GetInvoiceResponse, GetLogResponse } from '../_api';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const UserReadOnly = {
  readOnly: 'Read only',
};

export enum InvoxUserType {
  organisationAdmin = 'organisationAdmin',
  indexer = 'indexer',
  verifier = 'verifier',
  clarifier = 'clarifier',
  organisationUser = 'organisationUser'
}
export type InvoxRoles = `${InvoxUserType}`;

export type RoleType = InvoxUserType;

export const RoleTypeName: Record<RoleType, string> = {
  [InvoxUserType.organisationAdmin]: 'Organisation Admin',
  [InvoxUserType.indexer]: 'Indexer',
  [InvoxUserType.verifier]: 'Verifier',
  [InvoxUserType.clarifier]: 'Clarifier',
  [InvoxUserType.organisationUser]: 'User'
};

export const CurrentUserRole: InvoxUserType | undefined = localStorage.getItem('currentRole') as InvoxUserType | undefined;

export const sampleUserJson = () => {
  function generateUsers(count = 40) {
    const data = [];

    const roleId = "29be54cd-0a96-4ec8-aba5-be7e92b1ad95";
    const role = { id: roleId, name: "inveritaxAdmin" };
    const createdBy = "0c60d49a-5b9d-4f0a-94d5-40ddf7b7a52c";
    const updatedBy = "ef24ad23-968e-4f6f-b30b-4cf2ed456d7a";

    const sampleLogos = [
      "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80",
      "https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80",
    ];

    for (let i = 1; i <= count; i++) {
      const pictureId = crypto.randomUUID();
      const logoUrl = sampleLogos[Math.floor(Math.random() * sampleLogos.length)];

      data.push({
        id: crypto.randomUUID(),
        firstName: `User${i}`,
        lastName: `Test${i}`,
        email: `user${i}@example.com`,
        countryCode: null,
        phoneNumber: null,
        roleId,
        delinquentAlert: false,
        escrowAlert: false,
        status: true,
        isReadOnly: false,
        userType: "inveriTax",
        isPrimary: false,
        createdBy,
        updatedBy,
        deletedBy: null,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        deletedAt: null,
        role,
        lastLoginAt: new Date().toISOString(),
        profilePictureId: pictureId,
        profilePicture: {
          id: pictureId,
          url: logoUrl
        }
      });
    }

    return data;
  }

  return generateUsers();

}

export const sampleInvoiceJson = () => {
  function generateInvoices(count = 40): GetInvoiceResponse[] {
    const data: GetInvoiceResponse[] = [];

    const locations = [
      "New York, NY",
      "Austin, TX",
      "San Francisco, CA",
      "Seattle, WA",
      "Chicago, IL",
      "Miami, FL",
    ];

    const sources = [
      "Email",
      "SFTP",
      "Manual Upload",
      "API",
      "Dropbox",
      "Google Drive",
    ];

    const reviewers = [
      "Alice Johnson",
      "Bob Smith",
      "Carlos Diaz",
      "Devika Patel",
      "Emily Chen",
      "Fatima Noor",
    ];

    const details = [
      "Sales Tax Filing",
      "Income Tax Return",
      "W-9 Forms",
      "Invoices Batch",
      "Payroll Reports",
      "Bank Statements",
    ];

    const filePrefixes = ["INV", "TAX", "RPT", "DOC", "FILE"];

    // Using the statuses from your earlier list (excluding "All")
    const statuses = [
      "Pending",
      "Indexing",
      "Verify",
      "Verify(Client)",
      "Shipped"
    ] as const;

    for (let i = 1; i <= count; i++) {
      const id = crypto.randomUUID();

      const status = statuses[Math.floor(Math.random() * statuses.length)];

      // Dates
      const receivedDate = new Date();
      receivedDate.setDate(receivedDate.getDate() - Math.floor(Math.random() * 10));

      const dueDate = new Date(receivedDate);
      dueDate.setDate(receivedDate.getDate() + 7 + Math.floor(Math.random() * 14));

      const isProcessed =
        status !== "Pending" &&
        status !== "Verify" &&
        status !== "Verify(Client)" &&
        status !== "Shipped";

      const processedDate = isProcessed
        ? new Date(receivedDate.getTime() + (1 + Math.floor(Math.random() * 5)) * 24 * 60 * 60 * 1000)
        : null;

      const fileName = `${filePrefixes[Math.floor(Math.random() * filePrefixes.length)]}_${String(
        1000 + i
      )}.pdf`;

      data.push({
        id,
        checkbox: false,
        fileName,
        location: locations[Math.floor(Math.random() * locations.length)],
        source: sources[Math.floor(Math.random() * sources.length)],
        receivedon: receivedDate.toISOString(),
        dueon: dueDate.toISOString(),
        processedon: processedDate ? processedDate.toISOString() : "",
        reviewedby: processedDate
          ? reviewers[Math.floor(Math.random() * reviewers.length)]
          : "",
        filedetails: details[Math.floor(Math.random() * details.length)],
        status,
      });
    }

    return data;
  }

  return generateInvoices();
};

export const sampleLogsJson = () => {
  function generateLogs(count = 6): GetLogResponse[] {
    const data: GetLogResponse[] = [];

    for (let i = 1; i <= count; i++) {
      data.push({
        id: crypto.randomUUID(),
        firstName: `user${i}`,
        lastName: `LastName${i}`,
        email: `user${i}@example.com`,
        phoneNumber: `123-456-7890`,
        role: {
          id: crypto.randomUUID(),
          name: `Role${i}`,
        },
        action: `Action${i}`,
        timestamp: '08/01/2025 - 10:44 am',
        actionType: 'User logged out',
        type: 'Session',
        description: 'User logged out of the system',
        securityLevel: 'High',
        source: 'Web',
        host: 'ubuntu'
      });
    }

    return data;
  }

  return generateLogs();
};
