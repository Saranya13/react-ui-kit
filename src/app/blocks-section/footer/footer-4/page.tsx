'use client';

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Footer4() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'footer-4' && blockData.theme) {
                    setTheme(blockData.theme);
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
    
    useEffect(() => {
        /* SB Code - Start */
        window.addEventListener('message', handleMessageEvent);

        return () => {
            window.removeEventListener('message', handleMessageEvent);
        };
        /* SB Code - End */
    }, []);

    const getContent = () => {
        switch (theme) {
            case 'tailwind':
                return (
                    <section className="bg-gray-50 dark:bg-gray-900">
                        <footer className="px-4 py-6 space-y-6 sm:px-6 sm:space-y-4 xl:px-10">
                            <div className="flex flex-col justify-between gap-8 sm:py-4 xl:flex-row">
                                <div className="space-y-3 text-sm text-gray-900 dark:text-gray-50 xl:w-72">
                                    <div className="flex items-center gap-2.5 py-2">
                                        <Image src="/assets/images/common/brand-logos/png/shopnezt.png" width={28} height={28} alt="company logo" />
                                        <h2 className="font-semibold text-xl">ShopNezt</h2>
                                    </div>
                                    <p>Our fashion portal offers styles that make you look good and feel great.</p>
                                    <p className="text-gray-500 dark:text-gray-400">© 2024 ShopNezt. All rights reserved.</p>
                                </div>
                                <div className="grid grid-cols-2 gap-y-8 sm:gap-x-12 sm:grid-cols-3 lg:grid-cols-5">
                                    <div>
                                        <h3 className="text-gray-500 dark:text-gray-400 font-semibold text-sm">Product</h3>
                                        <ul className="mt-3 space-y-2 sm:text-nowrap">
                                            <li><a href="javascript:void(0);" className="text-base font-medium py-1 text-primary-600 hover:underline dark:text-primary-400" aria-label="go to watch demo">Watch demo</a></li>
                                            <li><a href="javascript:void(0);" className="text-base font-medium py-1 text-primary-600 hover:underline dark:text-primary-400" aria-label="go to pricing">Pricing</a></li>
                                            <li><a href="javascript:void(0);" className="text-base font-medium py-1 text-primary-600 hover:underline dark:text-primary-400" aria-label="go to paid vs free">Paid vs Free</a></li>
                                            <li><a href="javascript:void(0);" className="text-base font-medium py-1 text-primary-600 hover:underline dark:text-primary-400" aria-label="go to accessibility">Accessibility</a></li>
                                            <li><a href="javascript:void(0);" className="text-base font-medium py-1 text-primary-600 hover:underline dark:text-primary-400" aria-label="go to change log">Change log</a></li>
                                            <li><a href="javascript:void(0);" className="text-base font-medium py-1 text-primary-600 hover:underline dark:text-primary-400" aria-label="go to status">Status</a></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-gray-500 dark:text-gray-400 font-semibold text-sm">Features</h3>
                                        <ul className="mt-3 space-y-2 sm:text-nowrap">
                                            <li><a href="javascript:void(0);" className="text-base font-medium py-1 text-primary-600 hover:underline dark:text-primary-400" aria-label="go to channels">Channels</a></li>
                                            <li><a href="javascript:void(0);" className="text-base font-medium py-1 text-primary-600 hover:underline dark:text-primary-400" aria-label="go to search">Search</a></li>
                                            <li><a href="javascript:void(0);" className="text-base font-medium py-1 text-primary-600 hover:underline dark:text-primary-400" aria-label="go to app and integrations">App & Integrations</a></li>
                                            <li><a href="javascript:void(0);" className="text-base font-medium py-1 text-primary-600 hover:underline dark:text-primary-400" aria-label="go to security">Security</a></li>
                                            <li><a href="javascript:void(0);" className="text-base font-medium py-1 text-primary-600 hover:underline dark:text-primary-400" aria-label="go to enterprise key">Enterprise key</a></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-gray-500 dark:text-gray-400 font-semibold text-sm">Solutions</h3>
                                        <ul className="mt-3 space-y-2 sm:text-nowrap">
                                            <li><a href="javascript:void(0);" className="text-base font-medium py-1 text-primary-600 hover:underline dark:text-primary-400" aria-label="go to customer service">Customer service</a></li>
                                            <li><a href="javascript:void(0);" className="text-base font-medium py-1 text-primary-600 hover:underline dark:text-primary-400" aria-label="go to sales">Sales</a></li>
                                            <li><a href="javascript:void(0);" className="text-base font-medium py-1 text-primary-600 hover:underline dark:text-primary-400" aria-label="go to project management">Project management</a></li>
                                            <li><a href="javascript:void(0);" className="text-base font-medium py-1 text-primary-600 hover:underline dark:text-primary-400" aria-label="go to marketing">Marketing</a></li>
                                            <li><a href="javascript:void(0);" className="text-base font-medium py-1 text-primary-600 hover:underline dark:text-primary-400" aria-label="go to security">Security</a></li>
                                            <li><a href="javascript:void(0);" className="text-base font-medium py-1 text-primary-600 hover:underline dark:text-primary-400" aria-label="go to media">Media</a></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-gray-500 dark:text-gray-400 font-semibold text-sm">Resources</h3>
                                        <ul className="mt-3 space-y-2 sm:text-nowrap">
                                            <li><a href="javascript:void(0);" className="text-base font-medium py-1 text-primary-600 hover:underline dark:text-primary-400" aria-label="go to help center">Help center</a></li>
                                            <li><a href="javascript:void(0);" className="text-base font-medium py-1 text-primary-600 hover:underline dark:text-primary-400" aria-label="go to what's new">What's new</a></li>
                                            <li><a href="javascript:void(0);" className="text-base font-medium py-1 text-primary-600 hover:underline dark:text-primary-400" aria-label="go to resource library">Resource library</a></li>
                                            <li><a href="javascript:void(0);" className="text-base font-medium py-1 text-primary-600 hover:underline dark:text-primary-400" aria-label="go to community">Community</a></li>
                                            <li><a href="javascript:void(0);" className="text-base font-medium py-1 text-primary-600 hover:underline dark:text-primary-400" aria-label="go to events">Events</a></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-gray-500 dark:text-gray-400 font-semibold text-sm">Company</h3>
                                        <ul className="mt-3 space-y-2 sm:text-nowrap">
                                            <li><a href="javascript:void(0);" className="text-base font-medium py-1 text-primary-600 hover:underline dark:text-primary-400" aria-label="go to about us">About us</a></li>
                                            <li><a href="javascript:void(0);" className="text-base font-medium py-1 text-primary-600 hover:underline dark:text-primary-400" aria-label="go to news">News</a></li>
                                            <li><a href="javascript:void(0);" className="text-base font-medium py-1 text-primary-600 hover:underline dark:text-primary-400" aria-label="go to media kit">Media kit</a></li>
                                            <li><a href="javascript:void(0);" className="text-base font-medium py-1 text-primary-600 hover:underline dark:text-primary-400" aria-label="go to career">Career</a></li>
                                            <li><a href="javascript:void(0);" className="text-base font-medium py-1 text-primary-600 hover:underline dark:text-primary-400" aria-label="go to contact us">Contact us</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="border-t pt-4 flex flex-col gap-6 lg:flex-row justify-between items-center text-gray-500 dark:border-gray-600 sm:py-4">
                                <ul className="flex flex-col items-center gap-4 text-sm font-medium text-gray-700 dark:text-gray-300 sm:flex-row sm:gap-6">
                                    <li className="flex items-center space-x-2">
                                        <i className="e-icons e-location text-gray-500 dark:text-gray-400 text-base"></i>
                                        <span>1 E 2nd St, New York, NY 10003, USA</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <i className="sf-icon-mail-02 text-gray-500 dark:text-gray-400 text-base"></i>
                                        <a href="javascript:void(0);" aria-label="email shopnezt">contact&#64;shopnezt.com</a>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <i className="sf-icon-phone-01 text-gray-500 dark:text-gray-400 text-base"></i>
                                        <a href="javascript:void(0);" aria-label="contact shopnezt">(123) 456-7890</a>
                                    </li>
                                </ul>
                                <div className="flex gap-4">
                                    <a href="javascript:void(0);" className="sf-icon-twitter text-2xl text-gray-500 dark:text-gray-400" aria-label="go to twitter"></a>
                                    <a href="javascript:void(0);" className="sf-icon-facebook text-2xl text-gray-500 dark:text-gray-400" aria-label="go to facebook"></a>
                                    <a href="javascript:void(0);" className="sf-icon-linkedin text-2xl text-gray-500 dark:text-gray-400" aria-label="go to linkedin"></a>
                                </div>
                            </div>
                        </footer>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body">
                        <footer className="py-4 px-3 px-sm-4 px-xl-5">
                            <div className="d-flex flex-column gap-4 flex-xl-row mb-4">
                                <div className="d-flex flex-column gap-2 col col-xl-3 pe-xl-4">
                                    <div className="d-flex align-items-center gap-2 mb-1">
                                        <Image src="/assets/images/common/brand-logos/png/shopnezt.png" width={30} height={30} alt="company logo" />
                                        <h5 className="mb-0 text-body">ShopNezt</h5>
                                    </div>
                                    <p className="mb-0 small text-body">Our fashion portal offers styles that make you look good and feel great.</p>
                                    <p className="mb-2 small text-body-secondary">© 2024 ShopNezt. All rights reserved.</p>
                                </div>
                                <div className="row justify-content-lg-between flex-grow-1 g-0 row-gap-4 text-body-secondary">
                                    <div className="col-6 col-sm-4 col-lg-2 px-0">
                                        <p className="small fw-bold mb-2 pb-1">Product</p>
                                        <ul className="d-flex flex-column gap-2 list-unstyled mb-0">
                                            <li><a href="javascript:void(0);" className="link-underline link-underline-opacity-0 link-underline-opacity-100-hover fw-medium small" aria-label="go to watch demo">Watch demo</a></li>
                                            <li><a href="javascript:void(0);" className="link-underline link-underline-opacity-0 link-underline-opacity-100-hover fw-medium small" aria-label="go to pricing">Pricing</a></li>
                                            <li><a href="javascript:void(0);" className="link-underline link-underline-opacity-0 link-underline-opacity-100-hover fw-medium small" aria-label="go to paid vs free">Paid vs Free</a></li>
                                            <li><a href="javascript:void(0);" className="link-underline link-underline-opacity-0 link-underline-opacity-100-hover fw-medium small" aria-label="go to accessibility">Accessibility</a></li>
                                            <li><a href="javascript:void(0);" className="link-underline link-underline-opacity-0 link-underline-opacity-100-hover fw-medium small" aria-label="go to change log">Change log</a></li>
                                            <li><a href="javascript:void(0);" className="link-underline link-underline-opacity-0 link-underline-opacity-100-hover fw-medium small" aria-label="go to status">Status</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-6 col-sm-4 col-lg-2 px-0">
                                        <p className="small fw-bold mb-2 pb-1">Features</p>
                                        <ul className="d-flex flex-column gap-2 list-unstyled mb-0">
                                            <li><a href="javascript:void(0);" className="link-underline link-underline-opacity-0 link-underline-opacity-100-hover fw-medium small" aria-label="go to channels">Channels</a></li>
                                            <li><a href="javascript:void(0);" className="link-underline link-underline-opacity-0 link-underline-opacity-100-hover fw-medium small" aria-label="go to search">Search</a></li>
                                            <li><a href="javascript:void(0);" className="link-underline link-underline-opacity-0 link-underline-opacity-100-hover fw-medium small" aria-label="go to app and integrations">App & Integrations</a></li>
                                            <li><a href="javascript:void(0);" className="link-underline link-underline-opacity-0 link-underline-opacity-100-hover fw-medium small" aria-label="go to security">Security</a></li>
                                            <li><a href="javascript:void(0);" className="link-underline link-underline-opacity-0 link-underline-opacity-100-hover fw-medium small" aria-label="go to enterprise key">Enterprise key</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-6 col-sm-4 col-lg-2 px-0">
                                        <p className="small fw-bold mb-2 pb-1">Solutions</p>
                                        <ul className="d-flex flex-column gap-2 list-unstyled mb-0">
                                            <li><a href="javascript:void(0);" className="link-underline link-underline-opacity-0 link-underline-opacity-100-hover fw-medium small" aria-label="go to customer service">Customer service</a></li>
                                            <li><a href="javascript:void(0);" className="link-underline link-underline-opacity-0 link-underline-opacity-100-hover fw-medium small" aria-label="go to sales">Sales</a></li>
                                            <li><a href="javascript:void(0);" className="link-underline link-underline-opacity-0 link-underline-opacity-100-hover fw-medium small" aria-label="go to project management">Project management</a></li>
                                            <li><a href="javascript:void(0);" className="link-underline link-underline-opacity-0 link-underline-opacity-100-hover fw-medium small" aria-label="go to marketing">Marketing</a></li>
                                            <li><a href="javascript:void(0);" className="link-underline link-underline-opacity-0 link-underline-opacity-100-hover fw-medium small" aria-label="go to security">Security</a></li>
                                            <li><a href="javascript:void(0);" className="link-underline link-underline-opacity-0 link-underline-opacity-100-hover fw-medium small" aria-label="go to media">Media</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-6 col-sm-4 col-lg-2 px-0">
                                        <p className="small fw-bold mb-2 pb-1">Resources</p>
                                        <ul className="d-flex flex-column gap-2 list-unstyled mb-0">
                                            <li><a href="javascript:void(0);" className="link-underline link-underline-opacity-0 link-underline-opacity-100-hover fw-medium small" aria-label="go to help center">Help center</a></li>
                                            <li><a href="javascript:void(0);" className="link-underline link-underline-opacity-0 link-underline-opacity-100-hover fw-medium small" aria-label="go to what's new">What's new</a></li>
                                            <li><a href="javascript:void(0);" className="link-underline link-underline-opacity-0 link-underline-opacity-100-hover fw-medium small" aria-label="go to resource library">Resource library</a></li>
                                            <li><a href="javascript:void(0);" className="link-underline link-underline-opacity-0 link-underline-opacity-100-hover fw-medium small" aria-label="go to community">Community</a></li>
                                            <li><a href="javascript:void(0);" className="link-underline link-underline-opacity-0 link-underline-opacity-100-hover fw-medium small" aria-label="go to events">Events</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-6 col-sm-4 col-lg-2 px-0">
                                        <p className="small fw-bold mb-2 pb-1">Company</p>
                                        <ul className="d-flex flex-column gap-2 list-unstyled mb-0">
                                            <li><a href="javascript:void(0);" className="link-underline link-underline-opacity-0 link-underline-opacity-100-hover fw-medium small" aria-label="go to about us">About us</a></li>
                                            <li><a href="javascript:void(0);" className="link-underline link-underline-opacity-0 link-underline-opacity-100-hover fw-medium small" aria-label="go to news">News</a></li>
                                            <li><a href="javascript:void(0);" className="link-underline link-underline-opacity-0 link-underline-opacity-100-hover fw-medium small" aria-label="go to media kit">Media kit</a></li>
                                            <li><a href="javascript:void(0);" className="link-underline link-underline-opacity-0 link-underline-opacity-100-hover fw-medium small" aria-label="go to career">Career</a></li>
                                            <li><a href="javascript:void(0);" className="link-underline link-underline-opacity-0 link-underline-opacity-100-hover fw-medium small" aria-label="go to contact us">Contact us</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="border-top border-light-subtle pt-3 pb-sm-3 d-flex flex-column gap-4 flex-lg-row justify-content-between align-items-center">
                                <ul className="d-flex flex-column align-items-center mb-0 small fw-medium text-body-secondary gap-3 gap-sm-4 list-unstyled d-sm-flex flex-md-row">
                                    <li className="d-flex align-items-center gap-2">
                                        <i className="e-icons e-location fs-6"></i>
                                        <span>1 E 2nd St, New York, NY 10003, USA</span>
                                    </li>
                                    <li className="d-flex align-items-center gap-2">
                                        <i className="sf-icon-mail-02 small fs-6"></i>
                                        <a className="text-decoration-none text-body-secondary" href="javascript:void(0);" aria-label="email shopnezt">contact&#64;shopnezt.com</a>
                                    </li>
                                    <li className="d-flex align-items-center gap-2">
                                        <i className="sf-icon-phone-01 fs-6"></i>
                                        <a className="text-decoration-none text-body-secondary" href="javascript:void(0);" aria-label="contact shopnezt">(123) 456-7890</a>
                                    </li>
                                </ul>
                                <div className="d-flex gap-3">
                                    <a href="javascript:void(0);" className="sf-icon-twitter text-body-secondary fs-4 text-decoration-none" aria-label="go to twitter"></a>
                                    <a href="javascript:void(0);" className="sf-icon-facebook text-body-secondary fs-4 text-decoration-none" aria-label="go to facebook"></a>
                                    <a href="javascript:void(0);" className="sf-icon-linkedin text-body-secondary fs-4 text-decoration-none" aria-label="go to linkedin"></a>
                                </div>
                            </div>
                        </footer>
                    </section>
                );
        }
    };

    return getContent();
}
