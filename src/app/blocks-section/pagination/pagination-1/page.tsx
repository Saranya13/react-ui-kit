'use client';

import { useEffect, useState } from "react";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import { PagerComponent } from "@syncfusion/ej2-react-grids";

export default function Pagination1() {
    /* SB Code - Start */
    const [theme, setTheme] = useState('tailwind');
    
    const handleMessageEvent = (event: MessageEvent) => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'pagination-1' && blockData.theme) {
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
                    <section className="bg-white dark:bg-gray-900">
                        <div className="px-6">
                            <PagerComponent key={"separate-pagination1"} className="border-0 bg-transparent" template={() => (
                                <div className="!flex gap-5 xl:gap-3">
                                    <ButtonComponent className="sm:hidden" iconCss="e-icons e-chevron-left" type="button" aria-label="go to previous page" role="button"></ButtonComponent>
                                    <ButtonComponent className="hidden sm:inline-block" iconCss="e-icons e-chevron-left" content="PREVIOUS" type="button" aria-label="go to previous page" role="button"></ButtonComponent>
                                    <span className="e-btn-group">
                                        <ButtonComponent type="button" aria-label="go to page 1" role="button">1</ButtonComponent>
                                        <ButtonComponent className="e-secondary e-active" type="button" aria-label="go to page 2" role="button">2</ButtonComponent>
                                        <ButtonComponent className="hidden sm:inline-block" type="button" aria-label="go to page 3" role="button">3</ButtonComponent>
                                        <ButtonComponent type="button" aria-label="more pages" role="button">...</ButtonComponent>
                                        <ButtonComponent className="hidden sm:inline-block" type="button" aria-label="go to page 79" role="button">79</ButtonComponent>
                                        <ButtonComponent type="button" aria-label="go to page 80" role="button">80</ButtonComponent>
                                    </span>
                                    <ButtonComponent className="hidden sm:inline-block" iconCss="e-icons e-chevron-right" iconPosition="Right" content="NEXT" type="button" aria-label="go to next page" role="button"></ButtonComponent>
                                    <ButtonComponent className="sm:hidden" iconCss="e-icons e-chevron-right" iconPosition="Right" type="button" aria-label="go to next page" role="button"></ButtonComponent>
                                </div>)}
                            ></PagerComponent>
                        </div>
                    </section>
                );
            case 'bootstrap5':
                return (
                    <section className="bg-body">
                        <div className="px-4">
                            <PagerComponent key={"separate-pagination2"} className="border-0 px-0" template={() => (
                                <div className="d-flex gap-2">
                                    <ButtonComponent className="e-outline d-sm-none" iconCss="e-icons e-chevron-left" type="button" aria-label="go to previous page" role="button"></ButtonComponent>
                                    <ButtonComponent className="e-outline d-none d-sm-inline-block" iconCss="e-icons e-chevron-left" content="PREVIOUS" type="button" aria-label="go to previous page" role="button"></ButtonComponent>
                                    <span className="e-btn-group shadow-none mx-1">
                                        <ButtonComponent className="e-flat" type="button" aria-label="go to page 1" role="button">1</ButtonComponent>
                                        <ButtonComponent className="e-secondary" type="button" aria-label="go to page 2" role="button">2</ButtonComponent>
                                        <ButtonComponent className="e-flat d-none d-sm-inline-block" type="button" aria-label="go to page 3" role="button">3</ButtonComponent>
                                        <ButtonComponent className="e-flat" type="button" aria-label="more pages" role="button">...</ButtonComponent>
                                        <ButtonComponent className="e-flat d-none d-sm-inline-block" type="button" aria-label="go to page 79" role="button">79</ButtonComponent>
                                        <ButtonComponent className="e-flat" type="button" aria-label="go to page 80" role="button">80</ButtonComponent>
                                    </span>
                                    <ButtonComponent className="e-outline d-none d-sm-inline-block" iconCss="e-icons e-chevron-right" iconPosition="Right" content="NEXT" type="button" aria-label="go to next page" role="button"></ButtonComponent>
                                    <ButtonComponent className="e-outline d-sm-none" iconCss="e-icons e-chevron-right" iconPosition="Right" type="button" aria-label="go to next page" role="button"></ButtonComponent>
                                </div>)}
                            ></PagerComponent>
                        </div>
                    </section>
                );
        }
    };

    return getContent();
}
