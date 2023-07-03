export default function (errorCode) {
    switch (errorCode) {
        case "auth/invalid-email":
            return "Invalid email address"
        case "auth/email-already-exists":
            return "User is already exists"
        case "auth/user-not-found":
            return "User not found"
        case "auth/weak-password":
            return "Password is too weak"
        case "auth/wrong-password":
            return "Wrong password"
        default:
            return errorCode
    }
}