import { Formik } from "formik";
import { ProfileDetailsSchema } from "./schema";
import { initialValuesProfile } from "./initialValues";

const OrderPlacement = () => {
  const validationSchema = ProfileDetailsSchema;
  return (
    <div>
      <h2>Select Your diet dish</h2>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValuesProfile}
        onSubmit={() => {}}
      ></Formik>
    </div>
  );
};

export default OrderPlacement;
