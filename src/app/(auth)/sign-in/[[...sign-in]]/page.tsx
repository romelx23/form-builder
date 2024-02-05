import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
    return (
        <div className="h-screen">
            <SignIn path="/sign-in" routing="path" />
        </div>
    )
}