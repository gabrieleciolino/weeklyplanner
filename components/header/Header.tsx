'use client';

import { signOut, useSession } from 'next-auth/react';
import WeekToolbar from '../week/WeekToolbar';
import Button from '../ui/Button';

export default function Header() {
  const { data: session } = useSession();

  return (
    <header className="sticky top-0 z-50 w-full bg-white p-2 lg:p-4">
      <div className="flex flex-wrap items-center justify-between gap-y-6 lg:flex-row">
        <div
          className={`flex flex-wrap ${
            session?.user ? 'mx-0' : 'mx-auto'
          } items-end justify-center lg:justify-start`}
        >
          <h1 className="w-full border-b-4 border-riptide-500 pt-2 text-center text-3xl text-fuchsia-blue-700 lg:text-left lg:text-4xl">
            Week Planner
          </h1>
        </div>
        {session && (
          <div className="order-2 ml-4 w-full lg:order-1 lg:w-auto">
            <WeekToolbar />
          </div>
        )}
        {session && (
          <>
            <div className="order-1 mr-2 lg:order-2 lg:mr-0">
              <Button
                size="icon"
                variant="secondary"
                onClick={() => signOut()}
                label="Logout"
              >
                {session.user?.name?.charAt(0)}
              </Button>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
