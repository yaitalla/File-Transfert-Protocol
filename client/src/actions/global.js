export const IS_PHONE = 'IS/PHONE';

export const isPhone = (data) => ({
  type: IS_PHONE,
  payload: { data }
});
