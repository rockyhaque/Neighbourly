const CookiePolicy = () => {
    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Cookie Policy for Neighbourly</h1>
            <p className="mb-6">Last Updated: <strong>26 May 2025</strong></p>
            
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
                <p className="mb-4">
                    This Cookie Policy explains how Neighbourly <strong>we</strong>, <strong>us</strong>,<strong>out</strong> uses cookies and similar tracking technologies when you use our platform to connect residents with service providers in your community.
                </p>
                <p>
                    By using our website and services, you consent to our use of cookies in accordance with this policy. If you do not agree to our use of cookies, you should adjust your browser settings accordingly or refrain from using our site.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">2. What Are Cookies?</h2>
                <p className="mb-4">
                    Cookies are small text files that are placed on your device (computer, smartphone, tablet) when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners.
                </p>
                <p>
                    Similar technologies include web beacons, pixels, and local storage, which we may also use for the purposes described in this policy.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">3. How We Use Cookies</h2>
                <p className="mb-4">
                    We use cookies for the following purposes:
                </p>
                <table className="w-full border-collapse mb-4">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="p-3 text-left border">Cookie Type</th>
                            <th className="p-3 text-left border">Purpose</th>
                            <th className="p-3 text-left border">Examples</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b">
                            <td className="p-3 border font-medium">Essential Cookies</td>
                            <td className="p-3 border">Required for basic site functionality</td>
                            <td className="p-3 border">
                                <ul className="list-disc pl-4">
                                    <li>User authentication (JWT tokens)</li>
                                    <li>Session maintenance</li>
                                    <li>Security features</li>
                                </ul>
                            </td>
                        </tr>
                        <tr className="border-b">
                            <td className="p-3 border font-medium">Preference Cookies</td>
                            <td className="p-3 border">Remember your choices and preferences</td>
                            <td className="p-3 border">
                                <ul className="list-disc pl-4">
                                    <li>Language settings</li>
                                    <li>Display preferences</li>
                                </ul>
                            </td>
                        </tr>
                        <tr className="border-b">
                            <td className="p-3 border font-medium">Analytics Cookies</td>
                            <td className="p-3 border">Help us understand how users interact with our platform</td>
                            <td className="p-3 border">
                                <ul className="list-disc pl-4">
                                    <li>Page visit tracking</li>
                                    <li>Feature usage statistics</li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">4. Third-Party Cookies</h2>
                <p className="mb-4">
                    We may also use cookies from trusted third parties, including:
                </p>
                <ul className="list-disc pl-6 mb-4">
                    <li className="mb-2">
                        <strong>Google Analytics:</strong> To help us analyze how users use our site
                    </li>
                    <li className="mb-2">
                        <strong>Google Sign-In:</strong> For authentication purposes
                    </li>
                    <li>
                        <strong>Social Media Platforms:</strong> For sharing functionality (if implemented)
                    </li>
                </ul>
                <p>
                    These third-party cookies are subject to the respective privacy policies of these organizations.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">5. Cookie Duration</h2>
                <p className="mb-4">
                    Cookies may be either <strong><u>session</u></strong> or <strong><u>persistent</u></strong> cookies:
                </p>
                <ul className="list-disc pl-6 mb-4">
                    <li className="mb-2">
                        <strong>Session Cookies:</strong> Temporary cookies that remain on your device until you close your browser
                    </li>
                    <li>
                        <strong>Persistent Cookies:</strong> Remain on your device for a set period or until manually deleted
                    </li>
                </ul>
                <p>
                    Our authentication cookies typically expire after [X hours/days] of inactivity.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">6. Managing Cookies</h2>
                <p className="mb-4">
                    You can control and/or delete cookies as you wish. Most web browsers allow some control of cookies through browser settings. However, disabling essential cookies may affect the functionality of our platform.
                </p>
                <h3 className="text-xl font-medium mb-2">Browser Controls:</h3>
                <p className="mb-4">
                    You can typically:
                </p>
                <ul className="list-disc pl-6 mb-4">
                    <li className="mb-2">Delete all cookies stored on your device</li>
                    <li className="mb-2">Block all cookies (though this may break site functionality)</li>
                    <li>Set preferences for specific websites</li>
                </ul>
                <p>
                    For more information about managing cookies in specific browsers, please consult your browser&apos;s help documentation.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">7. Changes to This Policy</h2>
                <p className="mb-4">
                    We may update this Cookie Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the <strong>Last Updated</strong> date.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
                <p className="mb-4">
                    If you have any questions about this Cookie Policy, please contact us:
                </p>
                <p>
                    Email: support@neighbourly.com<br />
                    Address: Dhaka, Bangladesh
                </p>
            </section>
        </div>
    );
};

export default CookiePolicy;