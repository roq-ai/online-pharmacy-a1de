interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Pharmacist'],
  customerRoles: [],
  tenantRoles: ['Business Owner', 'Pharmacy Manager', 'Pharmacist'],
  tenantName: 'Pharmacy',
  applicationName: 'Online Pharmacy App v1',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage pharmacy information',
    'Manage products in pharmacy',
    'View orders from users',
    'Manage inventory',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/11b3ef02-fe4f-453b-b975-aea9c4e4b803',
};
