export const phoneView = (phone: string) => {
  const callPhone = phone.split(" ").join("");
  const viewPhone = callPhone.replace(
    /(\d{2})(\d{3})(\d{3})(\d{4})/,
    "$1 ($2) $3-$4"
  );
  return { viewPhone, callPhone };
};
