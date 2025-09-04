import { type TranslationType } from "./en.js";

export default {
  EXAMPLES: {
    TITLE: "Beispiele",
    PARENT_TRIGGER_BUTTON: "Beispiele anzeigen",
    DESCRIPTION: "Benutzerdefinierte Beispiele anzeigen",
    CLOSE: "Schließen",
    COLOR_TEST: "Benutzerdefinierte Hintergrund- und Textfarben",
  },
  DIALOG: {
    ACCOUNT_DELETE: {
      TITLE: "Sind Sie absolut sicher?",
      PARENT_TRIGGER_BUTTON: "Konto löschen",
      CANCEL_ACTION: "Abbrechen",
      DELETE_ACTION: "Konto löschen",
      TOAST: {
        SUCCESS: "Konto gelöscht!",
      },
      DESCRIPTION:
        "Dieser Vorgang kann nicht rückgängig gemacht werden. Dies wird Ihr Konto und alle Ihre Daten auf unseren Servern dauerhaft löschen.",
    },
    LOGOUT: {
      TITLE: "Möchten Sie sich ausloggen?",
      PARENT_TRIGGER_BUTTON: "Ausloggen",
      CANCEL_ACTION: "Abbrechen",
      LOGOUT_ACTION: "Ausloggen",
      TOAST: {
        SUCCESS: "Erfolgreich ausgeloggt!",
      },
      DESCRIPTION: "Dies beendet Ihre aktuelle Sitzung. Sind Sie sicher?",
    },
    TAX_COMPLETE: {
      TITLE:
        "Sind Sie sicher, dass Sie diese Steuerbehörde als abgeschlossen markieren möchten?",
      DESCRIPTION:
        "Benachrichtigungs-E-Mails werden an jeden Kreditgeber mit einem Darlehen in dieser Steuerbehörde gesendet.",
      COMPLETE_ACTION: "Ja, abschließen",
      TOAST: {
        SUCCESS: "Steuerbehörde als abgeschlossen markiert!",
      },
    },
  },
  COMMON: {
    LOADING: {
      PLEASE_WAIT: "Bitte warten...",
    },
    TOAST: {
      SUBMIT_SUCCESS: "Erfolgreich gesendet!",
      ERROR_PREFIX: "Fehler",
    },
    Invox: "Invox",
    TERMS: "Bedingungen",
    PRIVACY: "Datenschutz",
    RESULTS: "Ergebnisse",
    ADD_NEW: "Neu hinzufügen",
    FILTER: "Filter",
    SEARCH: "Suche",
    EDIT: "Bearbeiten",
    DELETE: "Löschen",
    EXPORT: "Exportieren",
    DOWNLOAD_TEMPLATE: "Vorlage herunterladen",
    SAVE: "speichern",
    VIEW_RESEARCH: "Forschung anzeigen",
    MARK_TAX_AUTHOTITY_COMPLETE: "Steuerbehörde als abgeschlossen markieren",
    ADD: "Hinzufügen",
    CANCEL: "Abbrechen",
    VIEW: "Ansehen",
    DETAILS: "Details",
    SELECT: "Wählen",
    ERRORS: "Fehler",
    CONTINUE: "Weiter",
  },
  LANDING: {
    WELCOME: "Willkommen zu",
    PORTAL: "Admin-Portal",
    GET_STARTED: "Loslegen",
    PORTAL_NOT_FOUND: "Portal nicht gefunden",
  },
  SET_PASSWORD: {
    TOAST: {
      SUCCESS: "Passwort erfolgreich zurückgesetzt!",
    },
    TITLE: "Neues Passwort erstellen",
    DESCRIPTION: "Please enter a new password for your account.",
    NEW_PASSWORD: "Neues Passwort",
    CONFIRM_PASSWORD: "Neues Passwort erneut eingeben",
    SUBMIT: "Neues Passwort setzen",
    PASSWORD: "Passwort",
    BACK_TO_LOGIN: "Zurück zum Anmelden",
    PASSWORD_VALIDATION: {
      TITLE: "Das Passwort muss enthalten:",
      AT_LEAST_8_CHARACTERS: "mindestens 8 Zeichen lang",
      AT_LEAST_1_UPPERCASE: "mindestens einen Großbuchstaben",
      AT_LEAST_1_LOWERCASE: "mindestens einen Kleinbuchstaben",
      AT_LEAST_1_NUMBER: "mindestens eine Ziffer",
      AT_LEAST_1_SPECIAL_CHARACTER: "mindestens ein Sonderzeichen wie @$!%*?&",
    },
  },
  SIGNUP: {
    TOAST: {
      SUCCESS: "Registriert und eingeloggt!",
    },
    TITLE: "Registrieren",
    NAME: "Name",
    EMAIL: "E-Mail",
    PASSWORD: "Passwort",
    CONFIRM_PASSWORD: "Passwort bestätigen",
    SUBMIT: "Senden",
    SIGN_IN: "Anmelden",
    ALREADY_HAVE_AN_ACCOUNT: "Haben Sie bereits ein Konto?",
  },
  LOGIN: {
    TOAST: {
      SUCCESS: "Erfolgreich eingeloggt!",
    },
    TITLE: "Willkommen zurück bei Invox",
    SUB_TITLE: "Bitte geben Sie unten Ihre Daten ein",
    USERNAME: "Benutzername",
    PASSWORD: "Passwort",
    LOGIN: "Anmelden",
    FORGOT_PASSWORD: "Passwort vergessen",
    SEND_RESET_LINK: "Send Reset Link",
    BANNER_TITLE: "Willkommen bei iNvox",
    BANNER_DESCRIPTION:
      "Melden Sie sich an, um Zugriff auf intelligente Dokumentenverarbeitung, erhöhte Sicherheit und nahtlose Workflow-Automatisierung zu erhalten.",
    BANNER_IMAGE_ALT: "Bannerbild Alternativtext",
    LOGO_ALT: "Logo Alternativtext",
    BRAND: "Markenname",
    CONTINUE_AGREE: "Indem Sie fortfahren, stimmen Sie unseren",
    TERMS: "Nutzungsbedingungen",
    AND: "und",
    PRIVACY: "Datenschutzrichtlinien",
    FORGOT_PASSWORD_QUESTION: "Passwort vergessen?",
    NEED_HELP: "Brauchen Sie Hilfe?",
    CONTACT_SUPPORT: "Support kontaktieren",
    ALL_RIGHTS_RESERVED: "Alle Rechte vorbehalten",
    POWERED_BY: "Bereitgestellt von",
    POWERED_BY_ALT: "Bereitgestellt von – Alternativtext",
  },
  BANNER: {
    INTELLIGENT: "Intelligent",
    VERIFIED: "Verifiziert",
    TAX_Simplified: "Steuer vereinfacht.",
  },
  FORGOT_PASSWORD: {
    TITLE: "Passwort vergessen",
    DESCRIPTION:
      "Geben Sie Ihre registrierte E-Mail-Adresse ein, um einen Link zum Zurücksetzen des Passworts zu erhalten",
    EMAIL: "E-Mail-Adresse",
    SUBMIT: "Link zum Zurücksetzen senden",
    BACK_TO_LOGIN: "Zurück zum Anmelden",
    TOAST: {
      SUCCESS:
        "Link zum Zurücksetzen des Passworts wurde an Ihre E-Mail gesendet.",
    },
  },
  NAVBAR: {
    DASHBOARD: "Dashboard",
    USERS: "Benutzer",
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
    USERS: "Benutzer",
    SETTINGS: "Einstellungen",
    HELP: "Hilfe",
  },
  SETTINGS: {
    TITLE: "Einstellungen",
    PROFILE: "Profil",
    LOGOUT: "Ausloggen",
    DELETE_ACCOUNT: "Konto löschen",
    TOAST: {
      UPDATE_SUCCESS: "Profil erfolgreich aktualisiert!",
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
      NO_DATA_TITLE: "Keine Rollen und Berechtigungen gefunden",
    },
    EMAIL: {
      ADD_BUTTON: "Neue E-Mail konfigurieren",
      TITLE: "-Mail-Server",
      DESCRIPTION:
        "Lorem ipsum dolor sit amet consectetur. Orci amet massa aliquam volutpat. Dignissim sit eu mi donec quam massa amet.",
      HOST: "smtp.example.com",
      URL: "https://smtp.example.com",
    },
    FTP: {
      ADD_BUTTON: "Neue FTP konfigurieren",
      TITLE: "FTP-Server",
      DESCRIPTION:
        "Lorem ipsum dolor sit amet consectetur. Orci amet massa aliquam volutpat. Dignissim sit eu mi donec quam massa amet.",
      HOST: "ftp.example.com",
      URL: "https://ftp.example.com",
    },
    ONE_DRIVE: {
      ADD_BUTTON: "Neue OneDrive konfigurieren",
      TITLE: "OneDrive",
      DESCRIPTION:
        "Lorem ipsum dolor sit amet consectetur. Orci amet massa aliquam volutpat. Dignissim sit eu mi donec quam massa amet.",
      HOST: "onedrive.example.com",
      URL: "https://onedrive.example.com",
    },
    WEBHOOK: {
      ADD_BUTTON: "Neue Webhook konfigurieren",
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
      ADD_SUCCESS: "Benutzer erfolgreich registriert!",
      UPDATE_SUCCESS: "Benutzer erfolgreich aktualisiert!",
    },
    TITLE: "Benutzer",
    ADD_USER_TITLE: "Add User",
    FETCH_NEXT_PAGE: "Klicken oder scrollen Sie nach unten, um mehr zu laden",
    NO_MORE: "Keine weiteren Einträge",
    SEARCH_PLACEHOLDER: "Benutzer suchen",
    USER: "Benutzer",
    ADD_USER: {
      FIRST_NAME: "Vorname",
      LAST_NAME: "Nachname",
      EMAIL_ADDRESS: "E-Mail-Adresse",
      PHONE_NUMBER: "Telefonnummer",
      USER_TYPE: "Benutzertyp",
      READ_ONLY: "Nur lesen",
      SUBMIT: "Hinzufügen",
      EDIT_SUBMIT: "Änderungen speichern",
      CANCEL: "Abbrechen",
    },
    NO_DATA_TITLE: "Keine Benutzer gefunden",
  },
  ORGANISATIONS: {
    TOAST: {
      ADD_SUCCESS: "Organisation registered successfully!",
      UPDATE_SUCCESS: "Organisation updated successfully!",
    },
    TITLE: "Organisations",
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
    TITLE: "Verifier",
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
      DESCRIPTION: "Let us know the reason for skipping",
      SELECT_QUERY: "Select Your Skipping",
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
    TITLE: "Löschen",
    DESCRIPTION: "Sind Sie sicher, dass Sie dies löschen möchten?",
    CANCEL_ACTION: "Nein, Abbrechen",
    DELETE_ACTION: "Ja, löschen",
  },
  CONTACT: {
    TITLE: "Kontakt/Hilfe",
    NAME: "Invox Kundendienst",
    EMAIL: "info@Invox.com",
    PHONE: "000-111-000",
  },
  FAQ: {
    TITLE: "Häufig gestellte Fragen",
  },
} satisfies TranslationType;
