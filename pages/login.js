import { Section, AboutContainer } from "../styles/globalstyles";
import { signIn, signOut, useSession } from 'next-auth/client'

export default function login() {
  const [ session, loading ] = useSession()

  return <Section>
    <AboutContainer>
    {!session && <>
      <p>Not signed in </p><br/>
      <p>A the moment, we only support Google OAuth Authentication</p>
      <button onClick={() => signIn()}>Sign in</button>
    </>}
    {session && <>
      <p>Signed in as {session.user.email}</p> <br/>
      <button onClick={() => signOut()}>Sign out</button>
    </>}
    </AboutContainer>
  </Section>
}