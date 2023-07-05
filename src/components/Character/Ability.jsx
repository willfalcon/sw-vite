import { useState } from 'react';
import { DocumentRenderer } from '@keystone-6/document-renderer';

export default function Ability(props) {
  console.log(props);
  const { name, description } = props;
  const [modal, setModal] = useState(false);
  return (
    <>
      <button
        onClick={() => setModal(!modal)}
        className="group relative inline-block text-sm font-medium text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 my-3"
      >
        <span className="absolute inset-0 translate-x-0 translate-y-0 bg-indigo-600 transition-transform group-hover:translate-y-0.5 group-hover:translate-x-0.5"></span>
        <span className="relative block border border-current bg-white px-8 py-3">{name}</span>
      </button>
      {modal && (
        <>
          <div
            className="absolute w-full h-full bg-gray-600 bg-opacity-80 transition z-10 top-0 left-0"
            onClick={() => setModal(false)}
          ></div>
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-screen max-w-sm border border-gray-600 bg-white px-4 py-8 sm:px-6 lg:px-8 z-10"
            aria-modal="true"
            role="dialog"
          >
            <div className="mt-4 space-y-6">
              <h2 className="text-lg font-bold text-gray-900">{name}</h2>
              <DocumentRenderer document={description.document} />
            </div>
          </div>
        </>
      )}
    </>
  );
}
