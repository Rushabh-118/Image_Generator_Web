import React from 'react'

const Testimonials = () => {

    const cardsData = [
        {
            image: 'https://tse2.mm.bing.net/th/id/OIP.uNR1qTpKHREJ-q4y5syFCwAAAA?rs=1&pid=ImgDetMain&o=7&rm=3',
            name: 'rashmika mandanna',
            date: 'April 20, 2025'
        },
        {
            image: 'https://assets.vogue.in/photos/601bfddd3514c40d2b37e596/2:3/w_2560%2Cc_limit/jacqueline%2520fernandez%2520makeup%2520skincare.jpg',
            name: 'jacqueline fernandez',
            date: 'May 10, 2025'
        },
        {
            image: 'https://external-preview.redd.it/rakul-preet-singh-3840-5758-v0-I6yRFBUyuofVQVxxImf8xKBtXFzDJDB41C7zTbYYVX8.jpg?width=640&crop=smart&auto=webp&s=767f9d9cb13ddb2255c19fe8aaf3453cce9926cf',
            name: 'rakul preet singh',
            date: 'June 5, 2025'
        },
        {
            image: 'https://www.kollywoodzone.com/boxoffice/wp-content/uploads/2021/02/Samantha-Ruth-Prabhu-in-Orthodox-Saree-01.jpg',
            name: 'Samantha Ruth Prabhu',
            date: 'May 10, 2025'
        },
    ];

    const CreateCard = ({ card }) => (
        <div className="p-4 rounded-lg mx-4 shadow hover:shadow-lg transition-all duration-200 w-72 shrink-0">
            <div className="flex gap-2">
                <img className="size-11 rounded-full" src={card.image} alt="User Image" />
                <div className="flex flex-col">
                    <div className="flex items-center gap-1">
                        <p>{card.name}</p>
                        <svg className="mt-0.5" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M4.555.72a4 4 0 0 1-.297.24c-.179.12-.38.202-.59.244a4 4 0 0 1-.38.041c-.48.039-.721.058-.922.129a1.63 1.63 0 0 0-.992.992c-.071.2-.09.441-.129.922a4 4 0 0 1-.041.38 1.6 1.6 0 0 1-.245.59 3 3 0 0 1-.239.297c-.313.368-.47.551-.56.743-.213.444-.213.96 0 1.404.09.192.247.375.56.743.125.146.187.219.24.297.12.179.202.38.244.59.018.093.026.189.041.38.039.48.058.721.129.922.163.464.528.829.992.992.2.071.441.09.922.129.191.015.287.023.38.041.21.042.411.125.59.245.078.052.151.114.297.239.368.313.551.47.743.56.444.213.96.213 1.404 0 .192-.09.375-.247.743-.56.146-.125.219-.187.297-.24.179-.12.38-.202.59-.244a4 4 0 0 1 .38-.041c.48-.039.721-.058.922-.129.464-.163.829-.528.992-.992.071-.2.09-.441.129-.922a4 4 0 0 1 .041-.38c.042-.21.125-.411.245-.59.052-.078.114-.151.239-.297.313-.368.47-.551.56-.743.213-.444.213-.96 0-1.404-.09-.192-.247-.375-.56-.743a4 4 0 0 1-.24-.297 1.6 1.6 0 0 1-.244-.59 3 3 0 0 1-.041-.38c-.039-.48-.058-.721-.129-.922a1.63 1.63 0 0 0-.992-.992c-.2-.071-.441-.09-.922-.129a4 4 0 0 1-.38-.041 1.6 1.6 0 0 1-.59-.245A3 3 0 0 1 7.445.72C7.077.407 6.894.25 6.702.16a1.63 1.63 0 0 0-1.404 0c-.192.09-.375.247-.743.56m4.07 3.998a.488.488 0 0 0-.691-.69l-2.91 2.91-.958-.957a.488.488 0 0 0-.69.69l1.302 1.302c.19.191.5.191.69 0z" fill="#2196F3" />
                        </svg>
                    </div>
                </div>
            </div>
            <p className="text-sm py-4 text-gray-800">Radiant made undercutting all of our competitors an absolute
                breeze.</p>
            <div className="flex items-center justify-between text-slate-500 text-xs">
                <div className="flex items-center gap-1">
                    <span>Posted on</span>
                    <a href="https://x.com" target="_blank" className="hover:text-sky-500">
                        <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="m.027 0 4.247 5.516L0 10h.962l3.742-3.926L7.727 10H11L6.514 4.174 10.492 0H9.53L6.084 3.616 3.3 0zM1.44.688h1.504l6.64 8.624H8.082z" fill="currentColor" />
                        </svg>
                    </a>
                </div>
                <p>{card.date}</p>
            </div>
        </div>
    );

    return (
        <section className="py-20 bg-linear-to-br from-slate-50 to-blue-50/30">
            {/* Title Section */}
            <div className="text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                <h2 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                    What Our Users Say
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Join thousands of satisfied users who have transformed their creative workflow with our AI image generation platform.
                </p>
            </div>

            <style>{`
            @keyframes marqueeScroll {
                0% { transform: translateX(0%); }
                100% { transform: translateX(-50%); }
            }

            .marquee-inner {
                animation: marqueeScroll 25s linear infinite;
            }

            .marquee-reverse {
                animation-direction: reverse;
            }
        `}</style>

            <div className="marquee-row w-full mx-auto max-w-5xl overflow-hidden relative">
                <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-linear-to-r from-white to-transparent"></div>
                <div className="marquee-inner flex transform-gpu min-w-[200%] pt-10 pb-5">
                    {[...cardsData, ...cardsData].map((card, index) => (
                        <CreateCard key={index} card={card} />
                    ))}
                </div>
                <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-linear-to-l from-white to-transparent"></div>
            </div>

            <div className="marquee-row w-full mx-auto max-w-5xl overflow-hidden relative">
                <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-linear-to-r from-white to-transparent"></div>
                <div className="marquee-inner marquee-reverse flex transform-gpu min-w-[200%] pt-10 pb-5">
                    {[...cardsData, ...cardsData].map((card, index) => (
                        <CreateCard key={index} card={card} />
                    ))}
                </div>
                <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-linear-to-l from-white to-transparent"></div>
            </div>
        </section>
    )
}

export default Testimonials
