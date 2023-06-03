import { avatarDefault } from "../config";
export const AvatarConfig = (user) => {
    if (user === null) {
        return avatarDefault;
    }
    if (user.avatar === null) {
        user.avatar = avatarDefault;
    }
    return user.avatar;
};
