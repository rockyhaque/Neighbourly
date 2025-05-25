const PrivacyPolicy = () => {
    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Privacy Policy for Neighbourly</h1>
            <p className="mb-4">Last Updated: <strong>26 May 2025</strong></p>
            
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
                <p className="mb-4">
                    Welcome to Neighbourly. We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform to connect residents with service providers in your community.
                </p>
                <p>
                    By accessing or using Neighbourly, you agree to the terms of this Privacy Policy. If you do not agree with our practices, please do not use our services.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
                <h3 className="text-xl font-medium mb-2">2.1 Personal Information</h3>
                <p className="mb-4">
                    We may collect the following personal information when you register or use our services:
                </p>
                <ul className="list-disc pl-6 mb-4">
                    <li className="mb-2">For Residents: Name, email address, phone number, residential address, and profile photo</li>
                    <li className="mb-2">For Service Providers: Name, email address, phone number, address, skills, experience, work history, and profile photo</li>
                    <li>Payment information (if applicable, though currently payments are handled in cash)</li>
                </ul>

                <h3 className="text-xl font-medium mb-2">2.2 Usage Data</h3>
                <p className="mb-4">
                    We automatically collect information about how you interact with our platform, including:
                </p>
                <ul className="list-disc pl-6 mb-4">
                    <li className="mb-2">IP address and device information</li>
                    <li className="mb-2">Browser type and version</li>
                    <li className="mb-2">Pages visited and time spent on our platform</li>
                    <li>Booking history and service requests</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
                <p className="mb-4">
                    We use the collected information for the following purposes:
                </p>
                <ul className="list-disc pl-6 mb-4">
                    <li className="mb-2">To provide and maintain our services</li>
                    <li className="mb-2">To facilitate connections between residents and service providers</li>
                    <li className="mb-2">To verify user identities and prevent fraud</li>
                    <li className="mb-2">To process service requests and bookings</li>
                    <li className="mb-2">To communicate with you about your account or services</li>
                    <li className="mb-2">To improve our platform and develop new features</li>
                    <li className="mb-2">To monitor usage patterns and analyze platform performance</li>
                    <li>To enforce our terms and conditions</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">4. Sharing of Information</h2>
                <p className="mb-4">
                    We may share your information in the following circumstances:
                </p>
                <ul className="list-disc pl-6 mb-4">
                    <li className="mb-2">
                        <strong>Between Users:</strong> Necessary contact and profile information is shared between residents and service providers to facilitate service arrangements
                    </li>
                    <li className="mb-2">
                        <strong>Service Providers:</strong> We may employ third-party companies to facilitate our service (e.g., hosting providers), who will have access only to perform these tasks
                    </li>
                    <li className="mb-2">
                        <strong>Legal Requirements:</strong> If required by law or in response to valid legal process
                    </li>
                    <li>
                        <strong>Business Transfers:</strong> In connection with any merger, sale of company assets, or acquisition
                    </li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
                <p className="mb-4">
                    We implement appropriate technical and organizational measures to protect your personal information:
                </p>
                <ul className="list-disc pl-6 mb-4">
                    <li className="mb-2">Secure authentication using JWT tokens</li>
                    <li className="mb-2">Encryption of sensitive data</li>
                    <li className="mb-2">Regular security assessments</li>
                    <li>Access controls to limit who can view user information</li>
                </ul>
                <p>
                    However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">6. Your Data Rights</h2>
                <p className="mb-4">
                    You have certain rights regarding your personal information:
                </p>
                <ul className="list-disc pl-6 mb-4">
                    <li className="mb-2">Access and review your information</li>
                    <li className="mb-2">Update or correct inaccurate information</li>
                    <li className="mb-2">Request deletion of your account and personal data</li>
                    <li className="mb-2">Opt-out of certain communications</li>
                    <li>Withdraw consent where processing is based on consent</li>
                </ul>
                <p>
                    To exercise these rights, please contact us using the information below.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">7. Cookies and Tracking</h2>
                <p className="mb-4">
                    We use cookies and similar tracking technologies to:
                </p>
                <ul className="list-disc pl-6 mb-4">
                    <li className="mb-2">Maintain your authenticated session</li>
                    <li className="mb-2">Remember your preferences</li>
                    <li className="mb-2">Analyze platform usage</li>
                    <li>Improve our services</li>
                </ul>
                <p>
                    You can control cookies through your browser settings, but this may affect platform functionality.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">8. Third-Party Services</h2>
                <p className="mb-4">
                    Our platform may contain links to third-party websites or services. We are not responsible for their privacy practices. This includes:
                </p>
                <ul className="list-disc pl-6 mb-4">
                    <li className="mb-2">Google Sign-In authentication</li>
                    <li className="mb-2">Any payment processors we may integrate in the future</li>
                    <li>Analytics providers</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">9. Children&apos;s Privacy</h2>
                <p className="mb-4">
                    Our services are not intended for users under 18 years of age. We do not knowingly collect personal information from children.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">10. Changes to This Policy</h2>
                <p className="mb-4">
                    We may update this Privacy Policy periodically. We will notify you of significant changes by posting the new policy on our platform and updating the <strong>Last Updated</strong> date.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">11. Contact Us</h2>
                <p className="mb-4">
                    If you have questions about this Privacy Policy or our data practices, please contact us at:
                </p>
                <p>
                    Email: support@neighbourly.com<br />
                    Address: Dhaka, Bangladesh
                </p>
            </section>
        </div>
    );
};

export default PrivacyPolicy;