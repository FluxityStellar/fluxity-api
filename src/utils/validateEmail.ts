const validateEmail = (email: string): boolean => {
  const emailRegex = /.+\@.+\..+/;
  return emailRegex.test(email);
};

export default validateEmail;
