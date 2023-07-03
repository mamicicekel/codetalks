export default function (errorCode) {
    switch (errorCode) {
        case "auth/invalid-email":
            return "Invalid email address"
        case "auth/email-already-exists":
            return "User is already registered"
        case "auth/email-already-in-use":
            return "User is already registered"
        case "auth/user-not-found":
            return "User not found"
        case "auth/weak-password":
            return "Password is too weak"
        case "auth/wrong-password":
            return "Invalid password"
        default:
            return errorCode
    }
}