'use client';

import { signIn } from 'next-auth/react';
import Button from '../ui/Button';

export default function Login() {
  return (
    <div className="m-8 flex w-2/3 flex-col items-center gap-4 rounded-xl border-4 border-fuchsia-blue-500 bg-fuchsia-blue-400 p-4">
      <h2 className="text-xl">Sign In</h2>
      <Button size="full" variant="secondary" onClick={() => signIn('github')}>
        Sign In with GitHub
      </Button>
      <Button size="full" variant="secondary" onClick={() => signIn('github')}>
        Sign In with Google
      </Button>
      <Button size="full" variant="secondary" onClick={() => signIn('github')}>
        Sign In with Facebook
      </Button>
    </div>
  );
}
