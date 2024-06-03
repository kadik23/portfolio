'use client'
function ErrorBoundary({ error, reset }: { error: Error, reset: () => void }) {
    return (
        <>
            <div>error: {error.message}</div>
            <button onClick={reset} className='py-1 px-2 bg-green text-dark-gray rounded-lg'>try again</button>
        </>
    )
}

export default ErrorBoundary