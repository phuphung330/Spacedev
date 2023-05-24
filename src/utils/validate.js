// rules = {
//     name: [{ required: true }],
//     email: [
//         { required: true, message: "xin vui lòng điền email " },
//         { regexp: "email", message: "xin vui lòng nhập đúng định dạng" },
//     ],
// };

// form = {
//     name: "Phùng Lê Phú",
//     email: "teamwrcm97@gmail.com",
// };

// errorObj = {
//     email:"xin vui lòng nhập đúng địa chỉ email"
// }

//input : rules and form
//output : a plan object - errorObj

const REGEXP = {
    email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    link: /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/,
    number: /(84|0[3|5|7|8|9])+([0-9]{8})/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,16}$/,
};

const ERROR_MESSAGE = {
    required: "This is a required field",
    regexp: "The format of this field seems wrong, please try again",
    confirmPassword: "password does not match ",
    minMax: (min, max) => `Please type from ${min}-${max} characters`,
};

export const validate = (rules, forms) => {
    const errorObj = {};
    for (let name in rules) {
        for (let rule of rules[name]) {
            if (rule.required) {
                if (
                    (typeof forms[name] === "boolean" && !forms[name]) ||
                    (typeof forms[name] !== "boolean" && !forms[name]?.trim())
                ) {
                    errorObj[name] = rule.message || ERROR_MESSAGE.required;
                }
            }

            if (rule.regexp && forms[name]) {
                let regexp = rule.regexp;
                if (regexp in REGEXP) {
                    regexp = REGEXP[regexp];
                } else if (!(regexp instanceof RegExp)) {
                    regexp = new RegExp();
                }

                if (!regexp.test(forms[name])) {
                    errorObj[name] = rule.message || ERROR_MESSAGE.regexp;
                }
            }
            if (rule.confirmPassword && forms[name]) {
                if (forms[name] !== forms[rule.confirmPassword]) {
                    errorObj[name] =
                        rule.message || ERROR_MESSAGE.confirmPassword;
                }
            }

            if (rule.min || rule.max) {
                if (
                    !errorObj[name] &&
                    (forms[name]?.length < rule.min ||
                        forms[name]?.length > rule.max)
                ) {
                    errorObj[name] =
                        rule.message ||
                        ERROR_MESSAGE.minMax(rule.min, rule.max);
                }
            }
        }
    }

    return errorObj;
};

export const required = (message) => ({
    message,
    required: true,
});

export const regexp = (pattern, message) => ({
    regexp: pattern,
    message,
});

export const confirmPassword = (fieldToCompare, message) => ({
    message,
    confirmPassword: fieldToCompare,
});

export const minMax = (min, max, message) => ({
    min: min,
    max: max,
    message,
});
