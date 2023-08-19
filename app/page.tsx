'use client';

import Login from '@/components/user/Login';
import WeekWrapper from '@/components/week/WeekWrapper';
import { useSession } from 'next-auth/react';

export default function Home() {
  const { data: session } = useSession();

  return (
    <>
      {session ? (
        <WeekWrapper />
      ) : (
        <div className="flex w-full items-center justify-center">
          <Login />
        </div>
      )}
    </>
  );
}
