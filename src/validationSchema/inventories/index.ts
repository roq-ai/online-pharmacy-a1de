import * as yup from 'yup';

export const inventoryValidationSchema = yup.object().shape({
  quantity: yup.number().integer().nullable(),
  product_id: yup.string().nullable().required(),
  pharmacy_id: yup.string().nullable().required(),
});
