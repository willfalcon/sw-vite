import classNames from 'classnames';

export default function Button({ onClick, children, className }) {
  return (
    <button
      className={classNames(
        className,
        'rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500'
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
