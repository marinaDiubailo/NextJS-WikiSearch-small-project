'use client'; // Error components must be Client components

import { useEffect } from 'react';
import Link from 'next/link';
import cls from './page.module.scss';

export default function Error({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <main className={cls['error-container']}>
            <h2 className={cls['error-title']}>Something went wrong!</h2>
            <button
                className={cls['error-button']}
                onClick={
                    // Attempt to recover by trying to re-render the segment
                    () => reset()
                }
            >
                Try again
            </button>
            <p className={cls['error-text']}>
                Or go back to{' '}
                <Link href="/" className={cls['error-link']}>
                    Home 🏠
                </Link>
            </p>
        </main>
    );
}
