import { Checkbox } from "@shared/components/ui/checkbox";
import { useLanguageTranslation } from "@shared/hooks/ui/useLanguageTranslation";

function usePasswordValidation(password: string) {
  return {
    minLength: password.length >= 8,
    hasLowercase: /[a-z]/.test(password),
    hasUppercase: /[A-Z]/.test(password),
    hasSpecial: /[@$!%*?&]/.test(password),
    hasNumber: /\d/.test(password),
  };
}
export const PasswordValidationCheckbox = ({
  password,
}: {
  password: string;
}) => {
  const { t } = useLanguageTranslation();

  const passwordValidation = usePasswordValidation(password);

  return (
    <div className="flex flex-col gap-2 pt-8">
      <div className="flex items-center gap-2">
        <Checkbox
          className="border-dividerColor  h-4 w-4 disabled:opacity-100"
          checked={passwordValidation.minLength}
          disabled
        />
        <span className="text-xs">
          {t("SET_PASSWORD.PASSWORD_VALIDATION.TITLE")}{" "}
          {t("SET_PASSWORD.PASSWORD_VALIDATION.AT_LEAST_8_CHARACTERS")}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox
          className="border-dividerColor  h-4 w-4 disabled:opacity-100"
          checked={passwordValidation.hasLowercase}
          disabled
        />
        <span className="text-xs">
          {t("SET_PASSWORD.PASSWORD_VALIDATION.TITLE")}{" "}
          {t("SET_PASSWORD.PASSWORD_VALIDATION.AT_LEAST_1_LOWERCASE")}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox
          className="border-dividerColor  h-4 w-4 disabled:opacity-100"
          checked={passwordValidation.hasUppercase}
          disabled
        />
        <span className="text-xs">
          {t("SET_PASSWORD.PASSWORD_VALIDATION.TITLE")}{" "}
          {t("SET_PASSWORD.PASSWORD_VALIDATION.AT_LEAST_1_UPPERCASE")}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox
          className="border-dividerColor  h-4 w-4 disabled:opacity-100"
          checked={passwordValidation.hasNumber}
          disabled
        />
        <span className="text-xs">
          {t("SET_PASSWORD.PASSWORD_VALIDATION.TITLE")}{" "}
          {t("SET_PASSWORD.PASSWORD_VALIDATION.AT_LEAST_1_NUMBER")}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox
          className="border-dividerColor  h-4 w-4 disabled:opacity-100"
          checked={passwordValidation.hasSpecial}
          disabled
        />
        <span className="text-xs">
          {t("SET_PASSWORD.PASSWORD_VALIDATION.TITLE")}{" "}
          {t("SET_PASSWORD.PASSWORD_VALIDATION.AT_LEAST_1_SPECIAL_CHARACTER")}
        </span>
      </div>
    </div>
  );
};
