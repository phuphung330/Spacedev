import { avatarDefault } from "@/config";
export const AvatarConfig = (user) => {
    if (user === null) {
        return avatarDefault;
    } else {
        if (user.avatar) {
            return user.avatar;
        } else {
            return avatarDefault;
        }
    }
};
