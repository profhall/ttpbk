import React, { useState, useRef, useEffect } from 'react';
import chair from './chair.jpg';
import gif from './giphy.gif';

export function Product({ product }) {
    const [paidFor, setPaidFor] = useState(false);
    const [error, setError] = useState(null);
    const paypalRef = useRef();

    useEffect(() => {
        window.paypal
            .Buttons({
                createOrder: (data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                description: product.description,
                                amount: {
                                    currency_code: 'USD',
                                    value: product.price,
                                },
                            },
                        ],
                    });
                },
                onApprove: async (data, actions) => {
                    const order = await actions.order.capture();
                    setPaidFor(true);
                    console.log(order);
                },
                onError: err => {
                    setError(err);
                    console.error(err);
                },
            })
            .render(paypalRef.current);
    }, [product.description, product.price]);

    if (paidFor) {
        return (
            <div>
                <h1>Congrats, you just bought {product.name}!</h1>
                <img alt={product.description} src={gif} />
            </div>
        );
    }

    return (
        <div >
            {error && <div>Uh oh, an error occurred! {error.message}</div>}

            <h3>
                {product.description} for ${product.price} (plus tax)
            </h3>

            <img alt={product.description} src={product.image} width="100" />
            <div ref={paypalRef} />
        </div>
    );
}



