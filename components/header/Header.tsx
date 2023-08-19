'use client';

import { signOut, useSession } from 'next-auth/react';
import WeekToolbar from '../week/WeekToolbar';
import Button from '../ui/Button';

export default function Header() {
  const { data: session } = useSession();

  return (
    <header className="sticky top-0 z-50 w-full border bg-white p-2 lg:p-4">
      <div className="grid gap-y-4 lg:grid-cols-4">
        <div className="flex flex-wrap items-end justify-center lg:justify-start">
          <h1 className="w-full border-t-4 border-riptide-500 pt-2 text-center text-4xl text-fuchsia-blue-700 lg:text-left">
            Week Planner
          </h1>
          <p>Plan your life week by week.</p>
        </div>
        {session && (
          <div className="lg:col-span-3">
            <div className="mb-4 flex items-center justify-center gap-2 text-xs lg:justify-end">
              <p>Logged in as {session.user?.name}</p>
              <Button size="small" onClick={() => signOut()}>
                <div className="text-sm">Sign Out</div>
              </Button>
            </div>
            <WeekToolbar />
          </div>
        )}
      </div>
    </header>
  );
}
