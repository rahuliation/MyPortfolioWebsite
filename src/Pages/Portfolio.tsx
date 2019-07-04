import * as React from 'react';



export const Portfolio = () => (
    <div className="fl w-100 gotham primary pb4 ph3-ns ph2">
        {
            [
                {
                    title: 'Buddy Ltd',
                    subtitle: 'Car Pooling Ride Sharing App',
                    image: '/img/buddy.png',
                    details: 'Buddy is an upcoming ride-sharing platform which you can utilize to make the daily commutes much easier. We provide carpooling service to your desired destination so that you can be punctual and economical at the same time.',
                    contribution: 'Build Restfull API By Javascript Base Plateform NodeJS.'
                },
                {
                    title: 'DoctorKoi Smart',
                    image: '/img/prescription.png',
                    subtitle: 'Prescription Generating Desktop App',
                    details: 'Doctorkoi SMART is prescription management software that helps Doctors to generate prescriptions within just few clicks. It requires few seconds to prepare a full prescription by using SMART. Doctors can customize prescription according to their needs. Medicines can be selected from 26,000+ registered drug lists. So there is no chance to make any mistake. All the prescriptions with patient history will be saved for future reference. The best thing is you don’t need any internet connection to use the software. The application works fully offline. Finally, this is an auto learning software, so if a Doctor uses the software, it will be automatically catered for that specific user.',
                    contribution: 'My Contribution behind the app is building and upgrading new features with ReactJS, ElectronJS and FeatherJS.'
                }, {
                    title: 'Tripzip Tours',
                    image: '/img/tripzip.jpg',
                    subtitle: 'Tour Managment, Hotel & Homestay Booking Web App',
                    details: 'Travel Booking, Hotel Booking, Resort Booking, Tour Packages Booking, Online Booking and Payment, Adventure Tours, Activity Tours, Youth Special Tours, Cultural Tours, Budget Hotel Booking.',
                    contribution: 'My contribution is buidling App with Php/Laravel.'

                },
                {
                    title: 'Amar Ride',
                    subtitle: 'Car/Bike Ride Sharing APP',
                    image: '/img/512x512bb.jpg',
                    details: 'Amar Ride app is the easiest and fastest way to book a motor bike or a car in Bangladesh. It is the most popular bike & car booking service in Dhaka. Amar Ride is a ridesharing app for fast, reliable rides in a moment—day or night. There’s no need to wait for a taxi or bus. With Amar ride, you just tap to request a ride, and it’s easy to pay with credit or cash in select cities.',
                    contribution: 'My contribution is buidling Restfull api with NodeJS Express.'
                }
            ].map((port, key) => (<div className="cf flex items-center bg-white shadow-custom flex-row-l flex-column br4 center pv5 ph4 mt4 mw-custom" key={key} >
                <div className="w-70-l w-100 pa4-ns pa1 order-0-l order-2" data-aos="fade-right" data-aos-once="true" data-aos-duration="750">
                    <h2 className="f2 ma0 mb1">{port.title} </h2>
                    <h3 className="f4 ma0 black-70">{port.subtitle}</h3>
                    <p className="f4-l f6 justify lh-copy measure">
                        {port.details}
                    </p>
                    <p className="f4-l f6 i justify lh-copy measure black-70">
                        {port.contribution}
                    </p>
                </div>
                <div className="w-30-l w-100 pa2 " data-aos="fade-left" data-aos-once="true" data-aos-duration="1000">
                    <img src={port.image} className="w-100" />
                </div>
            </div>))
        }



    </div>
);