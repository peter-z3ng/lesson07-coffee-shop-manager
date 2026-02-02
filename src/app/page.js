'use client';

import { useState, useEffect } from 'react';
import Header from '../components/Header';
import CustomerCounter from '../components/CustomerCounter';
import OrderForm from '../components/OrderForm';
import OrderList from '../components/OrderList';

export default function CoffeeShopManager() {
    // ========================================
    // 📚 DEMO useState 1: with Customer Count
    // ========================================
    const [customerCount, setCustomerCount] = useState(0);

    // ========================================
    // 📚 DEMO useState 2: with Orders Array
    // ========================================
    const [orders, setOrders] = useState([]);

    // ========================================
    // 📚 DEMO useEffect 1: Update Document Title
    // ========================================
    // This useEffect runs whenever customerCount or orders change
    useEffect(() => {
        document.title = `${customerCount}👥 | ${orders.length}☕ ITCoffee`;
        console.log('Document title updated');
    }, [customerCount, orders]);
    
    // ========================================
    // 📚 DEMO useEffect 2: Auto-save Customer Count
    // ========================================
    // This useEffect saves customerCount to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('coffeeShop_customerCount', customerCount.toString());
        console.log('Saved customer count:', customerCount);
    }, [customerCount]);
    
    // ========================================
    // 🎯 EXERCISE useEffect 1: Auto-save Orders
    // ========================================
    // TODO: Create a useEffect that saves orders to localStorage whenever orders change
    // Hint: Use localStorage.setItem('coffeeShop_orders', JSON.stringify(orders))
    // Hint: The dependency array should include [orders]
    // Hint: Don't forget to add a console.log to see when it runs!

    // ========================================
    // 🎯 EXERCISE useEffect 2: Load from localStorage on Mount
    // ========================================
    // TODO: Create a useEffect that loads saved data when the component first mounts
    // Hint: Use an empty dependency array [] to run only once on mount
    // Hint: Load customerCount with localStorage.getItem('coffeeShop_customerCount')
    // Hint: Load orders with localStorage.getItem('coffeeShop_orders')
    // Hint: Remember to parse the JSON string for orders: JSON.parse(savedOrders)
    // Hint: Check if the values exist before setting state (if (savedValue !== null) { ... })

    return (
        <div className="min-h-screen bg-[#D2B48C] py-8 px-4">
            <div className="max-w-3xl mx-auto">
                {/* Header */}
                <Header />

                {/* Main Content */}
                <div className="space-y-6">
                    <CustomerCounter 
                        count={customerCount} 
                        setCount={setCustomerCount} 
                    />

                    <OrderForm 
                        orders={orders} 
                        setOrders={setOrders} 
                    />
                    
                    <OrderList 
                        orders={orders}
                    />
                </div>
            </div>
        </div>
    );
}