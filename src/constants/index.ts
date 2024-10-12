import { AuthFormProps, SIGN_UP_FORM, SIGN_IN_FORM } from "./forms"
import { LANDING_PAGE_MENU, MenuProps } from "./menus"

type FeepayConstantsProps = {
    landingPageMenu: MenuProps[]
    signUpForm: AuthFormProps[]
    signInForm: AuthFormProps[]
}

export const FEEPAY_CONSTANTS: FeepayConstantsProps = {
    landingPageMenu: LANDING_PAGE_MENU,
    signUpForm: SIGN_UP_FORM,
    signInForm: SIGN_IN_FORM,
}
