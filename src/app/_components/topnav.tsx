import { SignInButton, SignOutButton, SignedIn, SignedOut } from "@clerk/nextjs";

export function TopNav() {
    return (
    <nav className="flex w-full items-center justify-between border-b text-xl font-semibold p-5">
        <div>Zorro</div>

        <div>
            <SignedOut>
                <SignInButton>Sign In</SignInButton>
            </SignedOut>
            <SignedIn>
                <SignOutButton>Sign Out</SignOutButton>
            </SignedIn>
        </div>
    </nav>
    );
  }

