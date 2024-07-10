import { Alert } from "react-bootstrap";

function NotFound() {
    return (
        <main>
            <Alert variant="danger" className="mt-2 text-center">ERROR 404 NOT FOUND</Alert>
        </main>
    );
}

export default NotFound;