'use client';

import { useEffect } from 'react';
import { deleteCookieAndRedirect } from '../../lib/actions'; // Adjust the import path

export default function YourPage() {
  useEffect(() => {
    async function deleteCookieAndRedirectAutomatically() {
      await deleteCookieAndRedirect('token', '/');
    }

    deleteCookieAndRedirectAutomatically(); // Call the async function
  }, []); // Run only once on component mount

  return (
    <div>
      {/* Your page content */}
      <p>Deleting cookie and redirecting...</p>
    </div>
  );
}