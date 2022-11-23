import {BaseButton , GoogleSignInButton , InvertedButton}  from "./button.styles.js";

 export const BUTTON_TYPE_CLASSES = {
  base : 'base',
  google: "google-sign-in",
  inverted: "inverted",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base)=>(
  {
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,

  }[buttonType]
)

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButtom  = getButton(buttonType);
  return (
    <CustomButtom
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </CustomButtom>
  );
};
export default Button;
