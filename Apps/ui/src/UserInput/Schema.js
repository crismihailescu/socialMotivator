import { useCallback } from "react";
import * as yup from "yup";

export const useYupValidationResolver = (validationSchema) =>
    useCallback(
        async (data) => {
            try {
                const values = await validationSchema.validate(data, {
                    abortEarly: false
                });

                return {
                    values,
                    errors: {}
                };
            } catch (errors) {
                return {
                    values: {},
                    errors: errors.inner.reduce(
                        (allErrors, currentError) => ({
                            ...allErrors,
                            [currentError.path]: {
                                type: currentError.type ?? "validation",
                                message: currentError.message
                            }
                        }),
                        {}
                    )
                };
            }
        },
        [validationSchema]
    );

export const signUpSchema =
    yup.object({
        firstname: yup.string().required(),
        lastname: yup.string().required(),
        username: yup.string().required(),
        password: yup
            .string()
            .required()
            .matches(
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
            ),
        email: yup.string().email().required(),
        type: yup.string(),
    })


export const signInSchema =
    yup.object({
        username: yup.string().required(),
        password: yup.string().required(),
    })