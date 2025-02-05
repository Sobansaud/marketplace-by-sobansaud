// "use client"
// import { useSearchParams } from "next/navigation";
// import { useEffect, useState } from "react";

// export default function PaymentSuccess() {
//     const searchParams = useSearchParams();
//     const sessionId = searchParams.get("session_id");
//     const [loading, setLoading] = useState(true);
//     const [orderConfirmed, setOrderConfirmed] = useState(false);

//     useEffect(() => {
//         if (sessionId) {
//             fetch("/api/save-order", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({ sessionId }),
//             })
//                 .then(() => {
//                     setOrderConfirmed(true);
//                     setLoading(false);
//                 })
//                 .catch(() => {
//                     setOrderConfirmed(false);
//                     setLoading(false);
//                 });
//         }
//     }, [sessionId]);

//     if (loading) return <p className="text-center text-xl">Processing your order...</p>;

//     return (
//         <div className="text-center">
//             {orderConfirmed ? (
//                 <h1 className="text-4xl font-bold text-green-600">Thank you! Your order has been placed successfully.</h1>
//             ) : (
//                 <h1 className="text-4xl font-bold text-red-600">Payment Failed. Please try again.</h1>
//             )}
//         </div>
//     );
// }
