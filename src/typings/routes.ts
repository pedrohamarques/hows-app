export enum PUBLIC_ROUTES {
  SIGN_IN = "SignIn",
  SIGN_UP = "SignUp",
}

export type PublicRoutesParams = {
  [PUBLIC_ROUTES.SIGN_IN]: undefined;
  [PUBLIC_ROUTES.SIGN_UP]: undefined;
};
