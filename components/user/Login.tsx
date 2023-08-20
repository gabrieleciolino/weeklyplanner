'use client';

import { signIn } from 'next-auth/react';
import Button from '../ui/Button';
import Icons from '../ui/Icons';

export default function Login() {
  return (
    <div className="mx-8 my-32 flex w-2/3 max-w-[350px] flex-col items-center gap-4 rounded-xl  p-4">
      <h2 className="text-xl text-fuchsia-blue-700">Sign In</h2>
      <Button size="full" variant="secondary" onClick={() => signIn('github')}>
        <div className="flex items-center gap-1 text-3xl">
          <span className="border-b-2 border-white text-sm">Sign In with</span>
          <Icons name="github" variant="secondary" />
        </div>
      </Button>
      <Button size="full" variant="secondary" onClick={() => signIn('google')}>
        <div className="flex items-center gap-1 text-3xl">
          <span className="border-b-2 border-white text-sm">Sign In with</span>
          <Icons name="google" variant="secondary" />
        </div>
      </Button>
      <Button size="full" variant="secondary" onClick={() => signIn('github')}>
        Sign In with Facebook
      </Button>
    </div>
  );
}
