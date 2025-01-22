'use client';

import { useEffect, useState, useRef } from 'react';
import { SidebarComponent, AccordionComponent, AccordionItemsDirective, AccordionItemDirective } from '@syncfusion/ej2-react-navigations';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ListViewComponent } from '@syncfusion/ej2-react-lists';
import Image from 'next/image';
import styles from './page.module.css';

export default function Sidebar1() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    const accordion = useRef<AccordionComponent | null>(null);
    /* SB Code - End */ 
    const sidebar = useRef<SidebarComponent | null>(null);

    const data: any[] = [
        {
            id: 1,
            field: 'Home',
            fontIcon: 'e-home'
        },
        {
            id: 2,
            field: 'My Dashboard',
            fontIcon: 'e-grid-view'
        },
        {
            id: 3,
            field: 'Notifications',
            fontIcon: 'sf-icon-notification-bell-01'
        }
    ];
    
    /* SB Code - Start */
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'sidebar-1' && blockData.theme) {
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
        setTimeout(() => {
            accordion.current?.refresh();
        }, 500);

        return () => {
            window.removeEventListener('message', handleMessageEvent);
        };
        /* SB Code - End */
    }, []);
    
    const getContent = () => {
        switch (theme) {
            case 'tailwind':
                return (
                    <section className="bg-white dark:bg-gray-950">
                        <div id={styles["simple-sidebar"]} style={{ height: '710px' }}>
                            <SidebarComponent key={"sidebar-1-tw"} className="bg-gray-50 dark:bg-gray-900 !border-r !border-gray-200 dark:!border-gray-700" width="256px" ref={sidebar} isOpen={true} style={{ display: 'block' }}>
                                <div className="h-screen">
                                    <div className="flex items-center py-4 px-3">
                                        <Image src="/react/essential-ui-kit/blocks/assets/images/common/brand-logos/svg/vector.svg" width={32} height={32} alt="company logo" />
                                        <span className="text-lg font-bold text-gray-900 dark:text-white ml-3">Company Name</span>
                                    </div>
                                    <div className="mt-1">
                                        <ListViewComponent cssClass="border-0" dataSource={data} template={(data: any) => (
                                            <div className="e-list-wrapper flex items-center justify-between pr-2">
                                                <span className="flex items-center">
                                                    <span className={`e-icons ${data.fontIcon} text-base`}></span>
                                                    <span className="text-base font-normal pl-4">{data.field}</span>
                                                </span>
                                                {data.field === 'Notifications' && (<span className="e-badge e-badge-info e-badge-pill e-bigger !px-1.5">99+</span>)}
                                            </div>)}
                                        ></ListViewComponent>
                                    </div>
                                    <hr className="border-gray-200 dark:border-gray-700 m-4" />
                                    <AccordionComponent className="bg-transparent !border-0" ref={accordion} expandMode="Single">
                                        <AccordionItemsDirective>
                                            <AccordionItemDirective iconCss="e-icons e-notes e-medium" cssClass="!border-0" header={() => <div className="text-base font-normal pl-2">News</div>}></AccordionItemDirective>
                                            <AccordionItemDirective iconCss="e-icons sf-icon-announcement-01 text-base" cssClass="!border-0" header={() => <div className="text-base font-normal pl-2">Events</div>}></AccordionItemDirective>
                                            <AccordionItemDirective iconCss="e-icons e-user e-medium" cssClass="!border-0" header={() => <div className="text-base font-normal pl-2">People</div>} content={() => <div></div>}></AccordionItemDirective>
                                            <AccordionItemDirective iconCss="e-icons e-people e-medium" cssClass="!border-0" header={() => <div className="text-base font-normal pl-2">Groups</div>} content={() => <div></div>}></AccordionItemDirective>
                                            <AccordionItemDirective expanded={true} iconCss="e-icons sf-icon-sandglass text-base" cssClass="!border-0" header={() => <div className="text-base font-normal pl-2">Resources</div>} content={() => (
                                                <div>
                                                    <ul>
                                                        <li className="text-base pb-3 pl-8">Cards</li>
                                                        <li className="text-base pb-3 pl-8">Widgets</li>
                                                        <li className="text-base pl-8">Components</li>
                                                    </ul>
                                                </div>)}
                                            ></AccordionItemDirective>
                                            <AccordionItemDirective iconCss="e-icons sf-icon-laptop-01 text-base" cssClass="!border-0" header={() => <div className="text-base font-normal pl-2">Office</div>} content={() => <div></div>}></AccordionItemDirective>
                                        </AccordionItemsDirective>
                                    </AccordionComponent>
                                </div>
                            </SidebarComponent>
                        </div>
                        {/* SB Code - Start */}
                        <div className="p-3 absolute top-0 left-0">
                            <ButtonComponent cssClass="e-large e-icons e-chevron-right e-round" type="button" onClick={() => sidebar.current?.show()}></ButtonComponent>
                        </div>
                        {/* SB Code - End */}
                    </section>
                );        
            case 'bootstrap5':
                return (
                    <section className="bg-body">
                        <div id={styles["simple-sidebar"]} style={{ height: '710px' }}>
                            <SidebarComponent key={"sidebar-1-bs"} width="256px" ref={sidebar} isOpen={true} style={{ display: 'block' }}>
                                <div className="min-vh-100">
                                    <div className="d-flex align-items-center p-3">
                                        <Image src="/react/essential-ui-kit/blocks/assets/images/common/brand-logos/svg/vector.svg" width={32} height={32} alt="company logo" />
                                        <span className="fs-5 ms-2 fw-bold text-body lh-sm">Company Name</span>
                                    </div>
                                    <div className="mt-1">
                                        <ListViewComponent cssClass="border-0 e-bigger" dataSource={data} template={(data: any) => (
                                            <div className="e-list-wrapper px-1 d-flex justify-content-between align-items-center">
                                                <span className="d-flex align-items-center">
                                                    <span className={`e-icons ${data.fontIcon} fs-6`}></span>
                                                    <span className="fs-6 fw-normal ps-2 ms-1">{data.field}</span>
                                                </span>
                                                {data.field === 'Notifications' && (
                                                    <span className="e-badge e-badge-info e-badge-pill">99+</span>
                                                )}
                                            </div>)}
                                        ></ListViewComponent>
                                    </div>
                                    <p className="m-3 fs-6 text-body-secondary">Others</p>
                                    <AccordionComponent className="bg-transparent border-0" ref={accordion} expandMode="Single">
                                        <AccordionItemsDirective>
                                            <AccordionItemDirective iconCss="e-icons e-notes e-medium" cssClass="border-0" header={() => <div className="fs-6 fw-normal ps-1">News</div>}></AccordionItemDirective>
                                            <AccordionItemDirective iconCss="e-icons sf-icon-announcement-01 fs-6" cssClass="border-0" header={() => <div className="fs-6 fw-normal ps-1">Events</div>}></AccordionItemDirective>
                                            <AccordionItemDirective iconCss="e-icons e-user e-medium" cssClass="border-0" header={() => <div className="fs-6 fw-normal ps-1">People</div>} content={() => <div></div>}></AccordionItemDirective>
                                            <AccordionItemDirective iconCss="e-icons e-people e-medium" cssClass="border-0" header={() => <div className="fs-6 fw-normal ps-1">Groups</div>} content={() => <div></div>}></AccordionItemDirective>
                                            <AccordionItemDirective expanded={true} iconCss="e-icons sf-icon-sandglass fs-6" cssClass="border-0" header={() => <div className="fs-6 fw-normal ps-1">Resources</div>} content={() => (
                                                <div>
                                                    <ul className="list-unstyled" style={{ marginBottom: 0 }}>
                                                        <li className="fs-6 ps-4 ms-2 pb-3">Cards</li>
                                                        <li className="fs-6 ps-4 ms-2 pb-3">Widgets</li>
                                                        <li className="fs-6 ps-4 ms-2">Components</li>
                                                    </ul>
                                                </div>)}
                                            ></AccordionItemDirective>
                                            <AccordionItemDirective iconCss="e-icons sf-icon-laptop-01 fs-6" cssClass="border-0" header={() => <div className="fs-6 fw-normal ps-1">Office</div>} content={() => <div></div>}></AccordionItemDirective>
                                        </AccordionItemsDirective>
                                    </AccordionComponent>
                                </div>
                            </SidebarComponent>
                        </div>
                        {/* SB Code - Start */}
                        <div className="py-3 px-1 position-absolute top-0 start-0">
                            <ButtonComponent cssClass="e-large e-icons e-chevron-right e-round" type="button" onClick={() => sidebar.current?.show()}></ButtonComponent>
                        </div>
                        {/* SB Code - End */}
                    </section>
                );           
        }
    };

    return getContent();
}
