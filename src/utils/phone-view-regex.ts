export const phoneView = (string: string) => {
  const phone = `+38${string}`;
  return phone.replace(/(\d{2})(\d{3})(\d{3})(\d{4})/, "$1 ($2) $3-$4");
};
