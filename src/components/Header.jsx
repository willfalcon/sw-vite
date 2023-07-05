export default function Header({ title, children }) {
  return (
    <header aria-label="Page Header">
      <div className="mx-auto max-w-screen-xl pt-8 pb-2">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="text-center sm:text-left">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">{title}</h1>
          </div>
        </div>
      </div>
      {children}
    </header>
  );
}
