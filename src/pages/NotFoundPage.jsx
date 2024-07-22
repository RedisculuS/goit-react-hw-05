import { Link, Outlet } from "react-router-dom";
import { Suspense } from "react";


export default function NotFoundPage() {
    return (<main>
        <h3>Not Found</h3>
        <p>
            <Link to='/'>Go Home</Link>
        </p>
        <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </main>);
}