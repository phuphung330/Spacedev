// rules
// return => values,errors,Register,validate

import { useState } from "react";
import { validate } from "../utils/validate";
export const useForm = (rules, initialValue = {}) => {
    const [values, setValues] = useState(initialValue);
    const [errors, setErrors] = useState({});
    const Register = (name) => {
        return {
            error: errors[name],
            value: values[name] || "",
            onChange: (ev) => {
                let _values = { ...values, [name]: ev.target.value };
                if (rules[name]) {
                    const error = validate(
                        {
                            [name]: rules[name],
                        },
                        _values
                    );
                    setErrors((prev) => ({
                        ...prev,
                        [name]: error[name] || "",
                    }));
                }
                setValues((prev) => ({ ...prev, [name]: ev.target.value }));
            },
        };
    };
    const reset = () => {
        setValues({});
    };
    const _validate = () => {
        const errorObj = validate(rules, values);
        setErrors(errorObj);
        return Object.keys(errorObj).length === 0;
    };
    return {
        reset,
        values,
        errors,
        Register,
        validate: _validate,
    };
};
