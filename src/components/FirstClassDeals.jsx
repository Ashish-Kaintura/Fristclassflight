import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const deals = [

    {
        route: "London → Dubai",
        airline: "Emirates A380",
        price: "$5,999",
        originalPrice: "$12,000",
        discount: "50% OFF",
        image: "https://cdn.britannica.com/15/189715-050-4310222B/Dubai-United-Arab-Emirates-Burj-Khalifa-top.jpg"
    },
    {
        route: "New York → Hong Kong",
        airline: "Cathay Pacific",
        price: "$6,499",
        originalPrice: "$13,500",
        discount: "52% OFF",
        image: "https://res.klook.com/image/upload/fl_lossy.progressive,q_60/v1755071654/destination/rjgbib6j1mmzviy5gvi1.jpg"
    },
    {
        route: "Sydney → London",
        airline: "Singapore Airlines",
        price: "$7,299",
        originalPrice: "$15,000",
        discount: "51% OFF",
        image: "https://www.thecityofldn.com/wp-content/uploads/2023/05/jamiesmithphoto-2162-Tower-Bridge-with-City-behind-reduced-2000x1334.jpg",

    },
    {
        route: "Frankfurt → San Francisco",
        airline: "Lufthansa",
        price: "$5,799",
        originalPrice: "$11,800",
        discount: "50% OFF",
        image: "https://cdn.britannica.com/51/178051-050-3B786A55/San-Francisco.jpg?w=400&h=225&c=crop"
    },
  
    {
        route: "New York → Hong Kong",
        airline: "Cathay Pacific",
        price: "$6,499",
        originalPrice: "$13,500",
        discount: "52% OFF",
        image: "https://res.klook.com/image/upload/fl_lossy.progressive,q_60/v1755071654/destination/rjgbib6j1mmzviy5gvi1.jpg"

    },
    {
        route: "Sydney → London",
        airline: "Singapore Airlines",
        price: "$7,299",
        originalPrice: "$15,000",
        discount: "51% OFF",
        image: "https://res.klook.com/image/upload/fl_lossy.progressive,q_60/v1755071506/destination/f8u2ktjkdlnbyrif6yls.jpg"

    },
   
];

export default function FirstClassDeals() {
    const [visible, setVisible] = useState(4);
    const [index, setIndex] = useState(visible);
    const [paused, setPaused] = useState(false);

    const sliderRef = useRef(null);
    const startX = useRef(0);
    const isDragging = useRef(false);

    // 🔁 Responsive cards
    useEffect(() => {
        const update = () => {
            if (window.innerWidth < 640) setVisible(1);
            else if (window.innerWidth < 1024) setVisible(2);
            else setVisible(4);
        };
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    const width = 100 / visible;
    const slides = [
        ...deals.slice(-visible),
        ...deals,
        ...deals.slice(0, visible),
    ];

    // 🔁 Loop reset
    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        if (index === slides.length - visible) {
            setTimeout(() => {
                slider.style.transition = "none";
                setIndex(visible);
            }, 500);
        }

        if (index === 0) {
            setTimeout(() => {
                slider.style.transition = "none";
                setIndex(slides.length - visible * 2);
            }, 500);
        }
    }, [index, slides.length, visible]);

    // ▶️ Autoplay
    useEffect(() => {
        if (paused) return;
        const timer = setInterval(() => {
            setIndex((i) => i + 1);
        }, 3500);
        return () => clearInterval(timer);
    }, [paused]);

    // 👉 Swipe handlers
    const startDrag = (x) => {
        startX.current = x;
        isDragging.current = true;
        setPaused(true);
    };

    const endDrag = (x) => {
        if (!isDragging.current) return;
        const diff = startX.current - x;
        if (diff > 50) setIndex((i) => i + 1);
        if (diff < -50) setIndex((i) => i - 1);
        isDragging.current = false;
        setPaused(false);
    };

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h4 className="text-sm uppercase font-semibold mb-1  text-blue-600 tracking-wide">
                        Best Selling
                    </h4>
                    <h5 className="text-4xl ">
                        Exclusive Premium Frist Class Flight Deals
                    </h5>
                </div>

                <div
                    className="relative overflow-hidden"
                    onMouseEnter={() => setPaused(true)}
                    onMouseLeave={() => setPaused(false)}
                >
                    <div
                        ref={sliderRef}
                        className="flex transition-transform duration-500 ease-[cubic-bezier(.4,0,.2,1)]"
                        style={{ transform: `translateX(-${index * width}%)` }}
                        onTransitionEnd={() =>
                        (sliderRef.current.style.transition =
                            "transform 0.5s cubic-bezier(.4,0,.2,1)")
                        }
                        onMouseDown={(e) => startDrag(e.clientX)}
                        onMouseUp={(e) => endDrag(e.clientX)}
                        onTouchStart={(e) => startDrag(e.touches[0].clientX)}
                        onTouchEnd={(e) => endDrag(e.changedTouches[0].clientX)}
                    >
                        {slides.map((deal, i) => (
                            <div
                                key={i}
                                className="px-3 shrink-0"
                                style={{ width: `${width}%` }}
                            >
                                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition">
                                    <div className="relative h-52">
                                        <img
                                            src={deal.image}
                                            alt={deal.route}
                                            className="w-full h-full object-cover rounded-t-2xl"
                                            draggable={false}
                                        />
                                        <span className="absolute top-4 right-4 bg-[#c8a27a] text-whitepx-3 py-1 px-2 rounded-full text-sm font-semibold">
                                            {deal.discount}
                                        </span>
                                    </div>

                                    <div className="p-5">
                                        <h3 className="font-bold text-lg">{deal.route}</h3>
                                        <p className="text-gray-500 mb-3">{deal.airline}</p>
                                        <div className="flex justify-between items-end">
                                            <div>
                                                <p className="text-sm line-through text-gray-400">
                                                    {deal.originalPrice}
                                                </p>
                                                <p className="text-2xl font-bold text-[#c8a27a]">
                                                    {deal.price}
                                                </p>
                                            </div>
                                            {/* <button className="bg-retext-[#c8a27a] hover:bg-amber-600 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                                                Book Now
                                            </button> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Controls */}
                    <button
                        onClick={() => setIndex((i) => i - 1)}
                        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow hover:bg-gray-100"
                    >
                        <ChevronLeft />
                    </button>
                    <button
                        onClick={() => setIndex((i) => i + 1)}
                        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow hover:bg-gray-100"
                    >
                        <ChevronRight />
                    </button>
                </div>
            </div>
        </section>
    );
}
