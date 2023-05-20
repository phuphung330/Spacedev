export const color = (detail, type) => {
    if (detail !== undefined) {
        if (type === "banner") {
            if (
                detail.template_color_banner !== null &&
                detail.template_color_banner !== undefined
            ) {
                return detail.template_color_banner;
            }
            return "#cde6fb";
        }
        if (type === "btn") {
            if (
                detail.template_color_btn !== null &&
                detail.template_color_btn !== undefined
            ) {
                return detail.template_color_btn;
            }
            return "#70b6f1";
        }
    }
};
