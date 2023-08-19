import WeekToolbar from '../week/WeekToolbar';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 h-36 w-full border bg-white p-2 lg:h-16 lg:p-4">
      <div className="grid gap-y-4 lg:grid-cols-4">
        <div>
          <h1 className="text-fuchsia-blue-700">Week Planner</h1>
        </div>
        <div className="lg:col-span-3">
          <WeekToolbar />
        </div>
      </div>
    </header>
  );
}
