import { useUser } from "@auth0/nextjs-auth0";
import { useRouter } from "next/router";
import { Section, AuthContainer } from "../styles/globalstyles";

export default function loginuser() {
  const { user, error, isLoading } = useUser();
  const router = useRouter();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <Section>
        <AuthContainer>
          <h3>Welcome {user.name}!</h3>
          <button onClick={() => router.push(`/api/auth/logout`)}>
            Logout
          </button>
        </AuthContainer>
      </Section>
    );
  }

  return (
    <Section>
      <AuthContainer>
        <button onClick={() => router.push(`/api/auth/login`)}>Login</button>
      </AuthContainer>
    </Section>
  );
}
