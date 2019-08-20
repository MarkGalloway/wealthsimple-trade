type AccountSignature = {
  custodian_account_number: string;
  deleted_at: string | null;
  external_account_id: string;
  external_esignature_id: string;
  opened_at: string;
};

type User = {
  account_signatures: AccountSignature[];
  attempted_existing_bank_account_import: boolean;
  attempted_existing_document_import: boolean;
  canonical_id: string;
  created_at: string;
  email_subscription_token: string;
  email: string;
  external_hw_esignature_id: string;
  external_hw_person_id: string;
  external_hw_user_id: string;
  external_ws_user_id: string;
  feature_flags: string[];
  first_name: string;
  id: string;
  last_name: string;
  object: 'user';
  updated_at: string;
};

type ErrorResponse = {
  error: string;
};

type LoginRequest = {
  email: string;
  password: string;
};

type LoginResponse = User;

type MeResponse = User & { email_confirmed: boolean };
