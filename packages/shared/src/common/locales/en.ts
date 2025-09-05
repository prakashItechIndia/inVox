import { FlattenKeys } from "shared";

const en = {
  EXAMPLES: {
    TITLE: "Examples",
    PARENT_TRIGGER_BUTTON: "Show Examples",
    DESCRIPTION: "Showcase custom examples",
    CLOSE: "Close",
    COLOR_TEST: "Custom Background and Text Colors",
  },
  DIALOG: {
    ACCOUNT_DELETE: {
      TITLE: "Are you absolutely sure?",
      PARENT_TRIGGER_BUTTON: "Delete account",
      CANCEL_ACTION: "Cancel",
      DELETE_ACTION: "Delete account",
      TOAST: {
        SUCCESS: "Account Deleted!",
      },
      DESCRIPTION:
        "This action cannot be undone. This will permanently delete your account and remove your data from our servers.",
    },

    LOGOUT: {
      TITLE: "Would you like to logout?",
      PARENT_TRIGGER_BUTTON: "Sign Out",
      CANCEL_ACTION: "Cancel",
      LOGOUT_ACTION: "Logout",
      TOAST: {
        SUCCESS: `You've been logged out`,
      },
      DESCRIPTION: "This will terminate your current session. Are you sure?",
    },

    TAX_COMPLETE: {
      TITLE: "Are you sure you want to mark this tax authority complete?",
      DESCRIPTION:
        "Notification emails will be sent out to each lender with a loan in that tax authority.",
      COMPLETE_ACTION: "Yes, Complete",
      TOAST: {
        SUCCESS: "Tax Authority marked as completed!",
      },
    },
  },
  COMMON: {
    LOADING: {
      PLEASE_WAIT: "Please wait...",
    },
    TOAST: {
      SUBMIT_SUCCESS: "Submitted successfully!",
      ERROR_PREFIX: "Error",
    },
    Invox: "Invox",
    TERMS: "Terms",
    PRIVACY: "Privacy",
    RESULTS: "Results",
    ADD_NEW: "Add New",
    FILTER: "Filter",
    SEARCH: "Search",
    EDIT: "Edit",
    DELETE: "Delete",
    EXPORT: "Export",
    DOWNLOAD_TEMPLATE: "Download Template",
    SAVE: "Save",
    VIEW_RESEARCH: "View Research",
    MARK_TAX_AUTHOTITY_COMPLETE: "Mark Tax Authority Complete",
    ADD: "Add",
    CANCEL: "Cancel",
    VIEW: "View",
    DETAILS: "Details",
    SELECT: "Select",
    ERRORS: "Errors",
    CONTINUE: "Continue",
  },
  LANDING: {
    WELCOME: "Welcome to",
    PORTAL: "Admin Portal",
    GET_STARTED: "Get Started",
    PORTAL_NOT_FOUND: "Portal Not Found",
  },
  SET_PASSWORD: {
    TOAST: {
      SUCCESS: "Password created successfully!",
    },
    TITLE: "Create New Password",
    DESCRIPTION: "Please enter a new password for your account.",
    NEW_PASSWORD: "New Password",
    CONFIRM_PASSWORD: "Retype New Password",
    SUBMIT: "Set New Password",
    PASSWORD: "Password",
    BACK_TO_LOGIN: "Back to Login",
    PASSWORD_VALIDATION: {
      TITLE: "Password must contain ",
      AT_LEAST_8_CHARACTERS: "at least 8 characters long",
      AT_LEAST_1_UPPERCASE: "at least one uppercase letter",
      AT_LEAST_1_LOWERCASE: "at least one lowercase letter",
      AT_LEAST_1_NUMBER: "at least one digit",
      AT_LEAST_1_SPECIAL_CHARACTER:
        "at least one special character like @$!%*?&",
    },
  },
  SIGNUP: {
    TOAST: {
      SUCCESS: "Signed up and Logged in!",
    },
    TITLE: "Sign Up",
    NAME: "Name",
    EMAIL: "Email",
    PASSWORD: "Password",
    CONFIRM_PASSWORD: "Confirm Password",
    SUBMIT: "Submit",
    SIGN_IN: "Login",
    ALREADY_HAVE_AN_ACCOUNT: "Already have an account?",
  },
  LOGIN: {
    TOAST: {
      SUCCESS: `You're now logged in`,
    },
    TITLE: "Streamline Invoice Processing with AI-Driven Automation.",
    SUB_TITLE:
      "Automate your document workflow with AI. Instantly extract, structure, and access critical data— so your team can focus on what matters most.",
    USERNAME: "Username",
    PASSWORD: "Password",
    LOGIN: "Login",
    FORGOT_PASSWORD: "Forgot Password",
    SEND_RESET_LINK: "Send me a reset link",
    BANNER_TITLE: "Welcome to iNvox",
    BANNER_DESCRIPTION:
      "Sign in to access intelligent document processing, enhanced security, and seamless workflow automation.",
    BANNER_IMAGE_ALT: "Banner Image Alt Text",
    LOGO_ALT: "Logo Alt Text",
    BRAND: "iNvox",
    CONTINUE_AGREE: "By continuing, you agree to our",
    TERMS: "Terms of Service",
    AND: "and",
    PRIVACY: "Privacy Policy",
    FORGOT_PASSWORD_QUESTION: "Forgot your password?",
    NEED_HELP: "Need Help?",
    CONTACT_SUPPORT: "Contact Support",
    ALL_RIGHTS_RESERVED: "All Rights Reserved",
    POWERED_BY: "Powered By",
    POWERED_BY_ALT: "Powered By Alt Text",
  },
  BANNER: {
    INTELLIGENT: "Intelligent",
    VERIFIED: "Verified",
    TAX_Simplified: "Tax Simplified.",
  },
  FORGOT_PASSWORD: {
    TITLE: "Forgot Password",
    DESCRIPTION:
      "Enter your registered email to receive a link to reset password",
    EMAIL: "Email Address",
    SUBMIT: "Send Reset Password",
    BACK_TO_LOGIN: "Back to Login",
    TOAST: {
      SUCCESS: "Password reset link sent to your email.",
    },
  },
  NAVBAR: {
    DASHBOARD: "Dashboard",
    USERS: "Users",
    ORGANISATIONS: "Organisation",
    INVOICES: "Invoices",
    CLARIFY: "Clarify",
    LOGS: "Logs",
    INDEXER: "Indexing",
    VERIFIER: "Verifier",
    CLARIFIER: "Clarifier",
  },
  TOP_NAVBAR: {
    DASHBOARD: "Dashboard",
    USERS: "Users",
    SETTINGS: "Settings",
    HELP: "Help",
  },
  SETTINGS: {
    TITLE: "Settings",
    PROFILE: "Profile",
    LOGOUT: "Logout",
    DELETE_ACCOUNT: "Delete Account",
    TOAST: {
      UPDATE_SUCCESS: "Profile updated successfully!",
    },
    NAVBAR: {
      MANAGER_USERS: "Manager Users",
      ROLES_PERMISSION: "Roles & Permissions",
      REPORTS: "Reports",
      CONFIGURATIONS: "Configurations",
    },
    ROLES_PERMISSIONS: {
      TITLE: "Roles & Permissions",
      ADD_ROLE: {
        TITLE: "Add Role",
        NAME: "Role Name",
        PERMISSIONS: "Permissions",
        SUBMIT: "Create Role",
      },
      EDIT_ROLE: {
        TITLE: "Edit Role",
        NAME: "Role Name",
        PERMISSIONS: "Permissions",
        SUBMIT: "Save Changes",
      },
      NO_DATA_TITLE: "No roles and permissions found",
    },
    EMAIL: {
      ADD_BUTTON: "Configure New Email",
      TITLE: "Email Server",
      DESCRIPTION:
        "Lorem ipsum dolor sit amet consectetur. Orci amet massa aliquam volutpat. Dignissim sit eu mi donec quam massa amet.",
      HOST: "SMTP Server (Host)",
      URL: "https://smtp.example.com",
    },
    FTP: {
      ADD_BUTTON: "Configure New FTP",
      TITLE: "FTP Server",
      DESCRIPTION:
        "Lorem ipsum dolor sit amet consectetur. Orci amet massa aliquam volutpat. Dignissim sit eu mi donec quam massa amet.",
      HOST: "ftp.example.com",
      URL: "https://ftp.example.com",
    },
    ONE_DRIVE: {
      ADD_BUTTON: "Configure New OneDrive",
      TITLE: "OneDrive",
      DESCRIPTION:
        "Lorem ipsum dolor sit amet consectetur. Orci amet massa aliquam volutpat. Dignissim sit eu mi donec quam massa amet.",
      HOST: "FTP Server (Host)",
      URL: "https://onedrive.example.com",
    },
    WEBHOOK: {
      ADD_BUTTON: "Configure New Webhook",
      TITLE: "Webhook",
      DESCRIPTION:
        "Lorem ipsum dolor sit amet consectetur. Orci amet massa aliquam volutpat. Dignissim sit eu mi donec quam massa amet.",
      HOST: "webhook.example.com",
      URL: "https://webhook.example.com",
    },
  },
  LOGS: {
    TITLE: "Logs",
    DESCRIPTION: "View the logs for all user activities",
  },
  USERS: {
    TOAST: {
      ADD_SUCCESS: "User registered successfully!",
      UPDATE_SUCCESS: "User updated successfully!",
    },
    TITLE: "Manage Users",
    ADD_USER_TITLE: "Add User",
    FETCH_NEXT_PAGE: "CLICK OR SCROLL DOWN to Load More",
    NO_MORE: "No More",
    SEARCH_PLACEHOLDER: "Search by name, email, or phone number",
    USER: "User",
    ADD_USER: {
      FIRST_NAME: "First Name",
      LAST_NAME: "Last Name",
      EMAIL_ADDRESS: "Email Address",
      PHONE_NUMBER: "Phone #",
      USER_TYPE: "User Type",
      READ_ONLY: "Read Only",
      SUBMIT: "Add",
      EDIT_SUBMIT: "Save Changes",
      CANCEL: "Cancel",
    },
    NO_DATA_TITLE: "No users found",
  },
  ORGANISATIONS: {
    TOAST: {
      ADD_SUCCESS: "Organisation registered successfully!",
      UPDATE_SUCCESS: "Organisation updated successfully!",
    },
    TITLE: "Manage Organisations",
    FETCH_NEXT_PAGE: "CLICK OR SCROLL DOWN to Load More",
    NO_MORE: "No More",
    SEARCH_PLACEHOLDER: "Search Organisations",
    ORGANISATION: "Organisation",
    ADD_ORGANISATION: {
      FIRST_NAME: "First Name",
      LAST_NAME: "Last Name",
      EMAIL_ADDRESS: "Email Address",
      PHONE_NUMBER: "Phone #",
      USER_TYPE: "User Type",
      READ_ONLY: "Read Only",
      SUBMIT: "Add",
      EDIT_SUBMIT: "Save Changes",
    },
    OVERVIEW: {
      BASIC_DETAILS: "Basic Details",
      LOCATION: "Location",
      PRIMARY_CONTACT: "Primary Contact",
    },
  },
  INVOICES: {
    TITLE: "Invoices",
  },
  VERIFIER: {
    TITLE: "Verify",
  },
  CLARIFIER: {
    TITLE: "Clarify",
    CLARIFICATION_ADD: {
      TITLE: "Clarification",
      DESCRIPTION: "Share any queries you may have",
      SELECT_QUERY: "Select Your Query",
      NOTES: "Notes",
      SAVE_ACTION: "Move to Clarification",
    },
    TOAST: {
      ADD_SUCCESS: "Your queries added successfully!",
    },
    REJECT_ADD: {
      TITLE: "Reject",
      DESCRIPTION: "Let us know the reason for rejection",
      SELECT_QUERY: "Select Your Reason",
      SAVE_ACTION: "Move to Rejection",
    },
    SKIP_ADD: {
      TITLE: "Skip",
      SELECT_QUERY: "Select Your Skipping",
      DESCRIPTION: "Let us know the reason for skipping",
      SAVE_ACTION: "Skip",
    },
  },
  INDEXER: {
    TITLE: "Indexing",
  },
  DASHBOARD: {
    TITLE: "Dashboard",
  },
  DELETE: {
    TITLE: "Delete",
    DESCRIPTION: "Are you sure you want to delete this",
    CANCEL_ACTION: "No, Cancel",
    DELETE_ACTION: "Yes, Delete",
  },
  CONTACT: {
    TITLE: "Contact/Help",
    NAME: "Invox Client Services",
    EMAIL: "info@Invox.com",
    PHONE: "000-111-000",
  },
  FAQ: {
    TITLE: "FAQ’s",
  },
};

export type TranslationType = typeof en;
export type TranslationTypeKeys = FlattenKeys<TranslationType>;
export default en;
