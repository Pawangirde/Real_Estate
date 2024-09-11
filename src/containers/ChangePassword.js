import { useState } from "react";
import { Helmet } from "react-helmet";

const ChangePassword = () => {
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement password change logic here
        console.log("Password changed");
    };

    return (
        <>
            <Helmet>
                <title>Change Password</title>
                <meta name="description" content="Change your password" />
            </Helmet>
            <div className="min-h-screen py-10 bg-gray-100">
                <div className="max-w-md mx-auto px-6 py-8 bg-white rounded-xl shadow-lg">
                    <h1 className="text-3xl font-bold text-gray-800 mb-6">Change Password</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="current-password" className="block text-lg font-medium text-gray-600 mb-2">Current Password</label>
                            <input
                                type="password"
                                id="current-password"
                                value={currentPassword}
                                onChange={(e) => setCurrentPassword(e.target.value)}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="new-password" className="block text-lg font-medium text-gray-600 mb-2">New Password</label>
                            <input
                                type="password"
                                id="new-password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="confirm-password" className="block text-lg font-medium text-gray-600 mb-2">Confirm New Password</label>
                            <input
                                type="password"
                                id="confirm-password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-purple-400 text-white font-semibold rounded-lg shadow-md hover:from-purple-500 hover:to-purple-300 transition-colors duration-200"
                        >
                            Change Password
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ChangePassword;
