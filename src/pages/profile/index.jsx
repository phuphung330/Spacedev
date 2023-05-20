import React from "react";
import { useAsync } from "@/hooks/useAsync";
import Button from "@/components/Button";
import { userService } from "@/services/user";
import { useAuth } from "@/components/AuthContext";
import { useForm } from "@/hooks/useForm";
import Field from "@/components/Field";

import { regexp, required } from "@/utils/validate";
import { message } from "antd";
import { handleError } from "@/utils/handleError";

function Profile() {
    const { user, setUser } = useAuth();
    const { loading, excute: UpdateUserService } = useAsync(
        userService.updateInfo
    );
    const { Register, validate, values } = useForm(
        {
            name: [required()],
            phone: [required(), regexp("number")],
            fb: [
                required(),
                regexp(
                    /(?:https?:\/\/)?(?:www\.)?(mbasic.facebook|m\.facebook|facebook|fb)\.(com|me)\/(?:(?:\w\.)*#!\/)?(?:pages\/)?(?:[\w\-\.]*\/)*([\w\-\.]*)/,
                    "field only accept facebook url, please try again."
                ),
            ],
        },
        user
    );

    const onSubmit = async () => {
        try {
            if (validate()) {
                const res = await UpdateUserService(values);
                if (res) {
                    setUser(res.data);
                    message.success("update success");
                }
            }
        } catch (err) {
            handleError(err);
        }
    };
    return (
        <div
            className='tab1'
            // style={{ display: "none" }}
        >
            <Field
                label='Họ và Tên'
                placeholder={user.name}
                {...Register("name")}
                required
            />

            <Field
                label='Số Điện Thoại'
                placeholder={user.phone}
                {...Register("phone")}
                required
            />
            <Field
                label='Email'
                placeholder={user.username}
                disabled
                {...Register("username")}
            />
            <Field
                label='Facebook Url'
                placeholder={user.fb}
                {...Register("fb")}
                required
            />

            {/* <label>
                    <p />
                    <div className='checkcontainer'>
                        Thay đổi mật khẩu
                        Giảm giá còn <span><strong>5.800.000 VND</strong>, còn lại 100 COIN</span>
                        Cần ít nhất 200 COIN để giảm giá
                        <input type='checkbox' defaultChecked='checked' />
                        <span className='checkmark' />
                    </div>
                </label>
                <label>
                    <p>
                        Mật khẩu cũ<span>*</span>
                    </p>
                    <input type='password' placeholder='Mật khẩu cũ' />
                </label>
                <label>
                    <p>
                        Mật khẩu mới<span>*</span>
                    </p>
                    <input type='password' placeholder='Mật khẩu mới' />
                </label>
                <label>
                    <p>
                        Xác nhận<span>*</span>
                    </p>
                    <input type='password' placeholder='Xác nhận mật khẩu' />
                </label> */}
            <Button onClick={onSubmit} loading={loading}>
                {" "}
                Lưu lại
            </Button>
        </div>
    );
}

export default Profile;
