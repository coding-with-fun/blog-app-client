import { toast } from "react-toastify";

/**
 * Types
 *      - info
 *      - success
 *      - warn
 *      - error
 */
export const ToastNotification = (type, message) => {
    toast[type](message);
};
