export const phoneView = (phone: string) => {
  const callPhone = phone.replace(/ /g, "");
  const viewPhone = callPhone.replace(
    /(\d{2})(\d{3})(\d{3})(\d{4})/,
    "$1 ($2) $3-$4"
  );
  return { viewPhone, callPhone };
};
