import React, { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { ContactFormData } from '../../types';

export default function ContactForm() {
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [status, setStatus] = useState<{
        type: 'idle' | 'loading' | 'success' | 'error';
        message: string;
    }>({
        type: 'idle',
        message: '',
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus({ type: 'loading', message: 'Sending message...' });

        const formBody = new URLSearchParams();
        formBody.append('name', formData.name);
        formBody.append('email', formData.email);
        formBody.append('subject', formData.subject);
        formBody.append('message', formData.message);

        try {
            const response = await fetch(
                'https://script.google.com/macros/s/AKfycbyPIcX2hv2ojNZ5rRcX5feWxkrsA0VhF7SUYdgc7Qgu_bfLwlByHESNa1OhxqsGVCL-/exec',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: formBody.toString(),
                }
            );

            if (response.ok) {
                setStatus({
                    type: 'success',
                    message: 'Message sent successfully! We will get back to you soon.',
                });
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                setStatus({
                    type: 'error',
                    message: 'Failed to send message. Please try again later.',
                });
            }
        } catch (error) {
            setStatus({
                type: 'error',
                message: 'An error occurred while sending your message. Please try again.',
            });
            console.error('Form submission error:', error);
        }
    };


    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    disabled={status.type === 'loading'}
                />
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    disabled={status.type === 'loading'}
                />
            </div>

            <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                    Subject
                </label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    disabled={status.type === 'loading'}
                />
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    disabled={status.type === 'loading'}
                />
            </div>

            {status.message && (
                <div
                    className={`p-4 rounded-md ${
                        status.type === 'success'
                            ? 'bg-green-50 text-green-700'
                            : status.type === 'error'
                                ? 'bg-red-50 text-red-700'
                                : 'bg-gray-50 text-gray-700'
                    }`}
                >
                    {status.message}
                </div>
            )}

            <button
                type="submit"
                disabled={status.type === 'loading'}
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
                {status.type === 'loading' ? (
                    <>
                        <Loader2 className="animate-spin h-5 w-5 mr-2" />
                        Sending...
                    </>
                ) : (
                    'Send Message'
                )}
            </button>
        </form>
    );
}