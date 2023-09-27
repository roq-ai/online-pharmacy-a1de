import * as yup from 'yup';

export const orderValidationSchema = yup.object().shape({
  total_price: yup.number().integer().nullable(),
  status: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
  pharmacy_id: yup.string().nullable().required(),
});
