import { FieldArray, useFormik } from "formik";
import { ProfileDetailsSchema } from "./schema";
import { initialValuesProfile } from "./initialValues";
import DatePicker from "react-datepicker";

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
    handleChange,
  } = useFormik({
    initialValues: initialValuesProfile,
    validationSchema,
    onSubmit: () => {},
  });

  return (
    <div>
      <h2>Select Your diet dish</h2>
      <form>
        <div>
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={values?.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.firstName && errors.firstName && (
            <p style={{ color: "orange" }}>{errors.firstName}</p>
          )}
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={values?.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.lastName && errors.lastName && (
            <p style={{ color: "orange" }}>{errors.lastName}</p>
          )}
        </div>
        <div>
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={values?.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.email && errors.email && (
            <p style={{ color: "orange" }}>{errors.email}</p>
          )}
        </div>
        <div>
          <label>Age</label>
          <input
            type="number"
            name="age"
            value={values?.age}
            onChange={(e) =>
              setFieldValue("age", parseInt(e.target.value) || 0)
            }
            onBlur={handleBlur}
          />
          {touched.age && errors.age && (
            <p style={{ color: "orange" }}>{errors.age}</p>
          )}
        </div>

        <div>
          <label>Address</label>
          <input
            type="text"
            name="city"
            value={values?.address?.city}
            onChange={(e) =>
              setFieldValue("age", parseInt(e.target.value) || 0)
            }
            onBlur={handleBlur}
          />
          {touched.address?.city && errors.address?.city && (
            <p style={{ color: "orange" }}>{errors.address?.city}</p>
          )}

          <input
            type="text"
            name="state"
            value={values?.address?.state}
            onChange={(e) =>
              setFieldValue("age", parseInt(e.target.value) || 0)
            }
            onBlur={handleBlur}
          />
          {touched.address?.state && errors.address?.state && (
            <p style={{ color: "orange" }}>{errors.address?.state}</p>
          )}
        </div>
        <div>
          <label htmlFor="startDate">Start Date</label>
          <DatePicker
            Select={values.startDate}
            onChange={(date: Date | null) =>
              setFieldValue("startDate", date | new Date())
            }
          />
        </div>
        <div>
          <FieldArray name="hobbies">
            {({ push, remove }) => {
              return (
                <div>
                  {values.hobbies?.map((hobby, index) => (
                    <div key={index}>
                      <input
                        type="text"
                        name="hobby"
                        value={hobby.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Hobby name"
                      />
                      {touched?.hobbies?.[index]?.name &&
                        errors?.hobbies?.[index] &&
                        typeof errors.hobbies?.[index] === "object" &&
                        (errors.hobbies[index] as any)?.name && (
                          <p>{(errors.hobbies[index] as any)?.name}</p>
                        )}
                      {values?.hobbies?.length > 1 && (
                        <button type="button" onClick={() => remove(index)}>
                          Remove Hobby
                        </button>
                      )}
                    </div>
                  ))}
                  <button type="button" onClick={push}>
                    Add Hobby
                  </button>
                </div>
              );
            }}
          </FieldArray>
        </div>

        <div>
          <label htmlFor="subscribe">Subscribe</label>
          <input
            type="checkbox"
            id="sub"
            name="subscribe"
            checked={values?.subscribe}
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
};

export default OrderPlacement;
