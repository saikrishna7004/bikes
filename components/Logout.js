'use client';
const { signOut } = require("next-auth/react");

const Logout = () => {
    return (
        <button onClick={() => signOut()} className="bg-red-500 text-white px-4 py-2 rounded">
            Logout
        </button>
    );
}

export default Logout;