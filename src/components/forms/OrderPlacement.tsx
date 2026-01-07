import { Formik, useFormik } from "formik";
import { ProfileDetailsSchema } from "./schema";
import { initialValuesProfile } from "./initialValues";

const OrderPlacement = () => {
  const validationSchema = ProfileDetailsSchema;

  const {
    errors,
    values,
    handleBlur,
    handleSubmit,
    setFieldValue,
    isSubmitting,
    touched,
  } = useFormik({
    initialValues: initialValuesProfile,
    validationSchema,
    onSubmit: () => {},
  });
  return (
    <div>
      <h2>Select Your diet dish</h2>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValuesProfile}
        onSubmit={handleSubmit}
      ></Formik>
    </div>
  );
};

export default OrderPlacement;
