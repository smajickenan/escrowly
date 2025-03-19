import React, { useState, useRef } from 'react';
import "./ApiNavigation.scss";

const ApiNavItem = ({ icon, title, subMenuItems, initialActive = false }) => {
    const [active, setActive] = useState(initialActive);

    const toggleActive = (e) => {
        e.preventDefault();
        setActive(!active);
    };

    return (
        <li className={active ? 'active' : ''}>
            <a href="#url" onClick={toggleActive}>
                <img src={icon} alt="" />
                {title}
            </a>
            <ul className="sub-menu">
                {subMenuItems.map((item, index) => (
                    <li key={index}>
                        <a href="#url"><span>{item}</span></a>
                    </li>
                ))}
            </ul>
        </li>
    );
};

const ApiNavigation = ({ active, apiNav, setApiNav }) => {
    const [dragY, setDragY] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const startY = useRef(0);

    // Начало перетаскивания
    const handleDragStart = (e) => {
        setIsDragging(true);
        startY.current = e.touches ? e.touches[0].clientY : e.clientY;
    };

    // Перетаскивание
    const handleDragMove = (e) => {
        if (!isDragging) return;
        const currentY = e.touches ? e.touches[0].clientY : e.clientY;
        const deltaY = currentY - startY.current;

        if (deltaY > 0) {
            setDragY(deltaY);
        }

        if (deltaY > 200) {
            setApiNav(false); // Закрыть меню
        }
    };

    // Завершение перетаскивания
    const handleDragEnd = () => {
        setIsDragging(false);
        if (dragY < 200) {
            setDragY(0);
        }
    };

    return (
        <div className={`col api-documentation-nav ${active}`}>
            <nav
                className="api-navigation"
                style={isDragging ? { transform: `translateY(${dragY}px)` } : {}}
            >
                <div
                    className="drag-close"
                    onMouseDown={handleDragStart}
                    onMouseMove={handleDragMove}
                    onMouseUp={handleDragEnd}
                    onTouchStart={handleDragStart}
                    onTouchMove={handleDragMove}
                    onTouchEnd={handleDragEnd}
                ></div>
                <div className="api-navigation-wrapper">
                    <ul>
                        <ApiNavItem
                            icon="/img/api-icon-file.svg"
                            title="Escrow API Documentation"
                            subMenuItems={[
                                "Escrow API Basics",
                                "Create a Customer",
                                "Update a Customer",
                                "Create a Transaction",
                                "Fetch Transaction Details",
                                "Listing Your Transactions",
                                "Listing Partner Transactions"
                            ]}
                            initialActive={true}
                        />
                        <li className="separator"></li>
                        <ApiNavItem
                            icon="/img/api-icon-chart.svg"
                            title="Managing Transactions"
                            subMenuItems={[
                                "Escrow API Basics",
                                "Create a Customer",
                                "Update a Customer",
                                "Create a Transaction",
                                "Fetch Transaction Details",
                                "Listing Your Transactions",
                                "Listing Partner Transactions"
                            ]}
                        />
                        <ApiNavItem
                            icon="/img/api-icon-zap.svg"
                            title="Additional Features"
                            subMenuItems={[
                                "Escrow API Basics",
                                "Create a Customer",
                                "Update a Customer",
                                "Create a Transaction",
                                "Fetch Transaction Details",
                                "Listing Your Transactions",
                                "Listing Partner Transactions"
                            ]}
                        />
                        <li className="separator"></li>
                        <ApiNavItem
                            icon="/img/api-icon-target.svg"
                            title="Escrow Offer"
                            subMenuItems={[
                                "Escrow API Basics",
                                "Create a Customer",
                                "Update a Customer",
                                "Create a Transaction",
                                "Fetch Transaction Details",
                                "Listing Your Transactions",
                                "Listing Partner Transactions"
                            ]}
                        />
                        <ApiNavItem
                            icon="/img/api-icon-coins-bitcoin.svg"
                            title="Escrow Pay"
                            subMenuItems={[
                                "Escrow API Basics",
                                "Create a Customer",
                                "Update a Customer",
                                "Create a Transaction",
                                "Fetch Transaction Details",
                                "Listing Your Transactions",
                                "Listing Partner Transactions"
                            ]}
                        />
                        <li className="separator"></li>
                        <ApiNavItem
                            icon="/img/api-icon-setting.svg"
                            title="Setup & Plugins"
                            subMenuItems={[
                                "Escrow API Basics",
                                "Create a Customer",
                                "Update a Customer",
                                "Create a Transaction",
                                "Fetch Transaction Details",
                                "Listing Your Transactions",
                                "Listing Partner Transactions"
                            ]}
                        />
                        <ApiNavItem
                            icon="/img/api-icon-search.svg"
                            title="Additional Resources"
                            subMenuItems={[
                                "Escrow API Basics",
                                "Create a Customer",
                                "Update a Customer",
                                "Create a Transaction",
                                "Fetch Transaction Details",
                                "Listing Your Transactions",
                                "Listing Partner Transactions"
                            ]}
                        />
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default ApiNavigation;
