export enum PUBLIC_ROUTES {
  SIGN_IN = "SignIn",
  SIGN_UP = "SignUp",
}

export enum PRIVATE_ROUTES {
  HOME = "Home",
}

export type PublicRoutesParams = {
  [PUBLIC_ROUTES.SIGN_IN]: undefined;
  [PUBLIC_ROUTES.SIGN_UP]: undefined;
};

export type PrivateRoutesParams = {
  [PRIVATE_ROUTES.HOME]: undefined;
};
