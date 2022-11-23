import { reactive } from "vue";


export const store = reactive({


    NavItems: [
        {
            text: "Home",
            url: "#",
            hover: false,
            link: [
                {
                    title: 'maxCoach education',
                    hot: true,
                    new: false
                },
                {
                    title: 'course portal',
                    hot: false,
                    new: false
                },
                {
                    title: 'distant learning',
                    hot: true,
                    new: false
                },
                {
                    title: 'multimedia pedagogy',
                    hot: false,
                    new: false
                },
                {
                    title: 'moderrn schooling',
                    hot: false,
                    new: false
                },
                {
                    title: 'remote training',
                    hot: false,
                    new: false
                },
                {
                    title: 'health coaching',
                    hot: false,
                    new: false
                },
                {
                    title: 'gym coaching',
                    hot: false,
                    new: false
                },
                {
                    title: 'business',
                    hot: false,
                    new: false
                },
                {
                    title: 'artist',
                    hot: false,
                    new: false
                },
                {
                    title: 'kitchen coach',
                    hot: false,
                    new: false
                },
                {
                    title: 'motivation',
                    hot: false,
                    new: false
                },
                {
                    title: 'dancin',
                    hot: false,
                    new: false
                },
                {
                    title: 'guitar',
                    hot: false,
                    new: false
                },
                {
                    title: 'yoga',
                    hot: false,
                    new: false
                },
                {
                    title: 'photography',
                    hot: false,
                    new: false
                },
                {
                    title: 'personal finance',
                    hot: false,
                    new: false
                },
                {
                    title: 'sales coaching',
                    hot: false,
                    new: true
                },
                {
                    title: 'mental therapy',
                    hot: false,
                    new: true
                },

            ],

            dwnimg: 'dropdown_img'


        },
        {
            text: "Pages",
            url: "#",
            hover: false,
            link: [
                {
                    title: 'start here',
                    hot: false,
                    new: false
                },

                {
                    title: 'success story',
                    hot: false,
                    new: false
                },

                {
                    title: 'about me',
                    hot: false,
                    new: false
                },

                {
                    title: 'about us 01',
                    hot: false,
                    new: false
                },

                {
                    title: 'about us 02',
                    hot: false,
                    new: false
                },

                {
                    title: 'about us 03',
                    hot: false,
                    new: false
                },

                {
                    title: 'contact me',
                    hot: false,
                    new: false
                },

                {
                    title: 'contact us',
                    hot: false,
                    new: false
                },

                {
                    title: 'purchase guide',
                    hot: false,
                    new: false
                },

                {
                    title: 'privacy policy',
                    hot: false,
                    new: false
                },

                {
                    title: 'terms of service',
                    hot: false,
                    new: false
                },



            ],

            dwnimg: ''


        },
        {
            text: "Courses",
            url: "#",
            hover: false,
            link: [
                {
                    title: 'course grid 01',
                    hot: false,
                    new: false
                },
                {
                    title: 'course grid 02',
                    hot: false,
                    new: false
                },
                {
                    title: 'course grid 03',
                    hot: false,
                    new: false
                },
                {
                    title: 'membership level',
                    hot: false,
                    new: false
                },
                {
                    title: 'become a teacher',
                    hot: false,
                    new: false
                },
                {
                    title: 'profile',
                    hot: false,
                    new: false
                },
                {
                    title: 'checkout',
                    hot: false,
                    new: false
                },
                {
                    title: 'single layout',
                    hot: false,
                    new: false
                },


            ],

            dwnimg: ''

        },
        {
            text: "Features",
            url: "#",
            hover: false,
            link: [
                {
                    title: 'events',
                    hot: false,
                    new: false
                },

                {
                    title: 'zoom meetings',
                    hot: false,
                    new: false
                },

            ],

            dwnimg: ''


        },
        {
            text: "Blog",
            url: "#",
            hover: false,
            link: [
                {
                    title: 'blog grid',
                    hot: false,
                    new: false
                },
                {
                    title: 'blog masonry',
                    hot: false,
                    new: false
                },
                {
                    title: 'blog classic',
                    hot: false,
                    new: false
                },
                {
                    title: 'blog list',
                    hot: false,
                    new: false
                },
            ],
            dwnimg: ''


        },
        {
            text: "Shop",
            url: "#",
            hover: false,
            link: [
                {
                    title: 'shop left sidebar',
                    hot: false,
                    new: false
                },
                {
                    title: 'shop right sidebar',
                    hot: false,
                    new: false
                },
                {
                    title: 'cart',
                    hot: false,
                    new: false
                },
                {
                    title: 'wishlist',
                    hot: false,
                    new: false
                },
                {
                    title: 'single product',
                    hot: false,
                    new: false
                },
            ],
            dwnimg: ''


        }
    ],

    FootNav: [
        {
            ulText: "Address",
            liText: [
                '382 NE 191st St # 87394 Miami, FL 33179-3899',
                '+1(305) 547-9909 (9am - 5pm EST, Monday - Frday)',
                'suppor@maxcoach.com'
            ],
            icons: [
                'fa-square-facebook',
                'fa-twitter',
                'fa-instagram',
                'fa-linkedin'


            ]
        },

        {
            ulText: "Explore",
            liText: [
                'Start here',
                'Blog',
                'About Us',
                'Success story',
                'Courses',
                'Contact us'
            ],
            icons: [


            ]

        },

        {
            ulText: "Information",
            liText: [
                'Membership',
                'Purchase guide',
                'Privacy policy',
                'Terms of services'
            ],
            icons: [



            ]
        }


    ],

    cards: [
        {
            price: '$40.00',
            info: 'Learning to Write as a Professional Author',
            students: '50',
            lessons: '20',
            img: 'course-write'
        },

        {
            price: 'Free',
            info: 'Customer-centric Info-Tech Strategies',
            students: '769',
            lessons: '24',
            img: 'course-customer'
        },

        {
            price: '$19.00',
            info: 'Open Programming Courses for Everyone: Python',
            students: '62',
            lessons: '17',
            img: 'course-programming'
        },

        {
            price: '$26.00',
            info: 'Accademic Listening and Note-taking',
            students: '67',
            lessons: '17',
            img: 'course-notetaking'
        },

        {
            price: '$39.00',
            info: 'Master JQuery in a Short Period of Time',
            students: '51',
            lessons: '6',
            img: 'course-jquery'
        },

        {
            price: '$59.00',
            info: 'Introduction to Javascript for Beginners',
            students: '76',
            lessons: '14',
            img: 'course-javascript'
        }
    ],

    brands: [
        '01', '02', '03', '04', '05', '06'

    ],

    carouselcard: [
        {
            title: 'High level of efficiency and scientific teaching methods',
            content: 'I am free to learn at my own pace, follow my own schedule and choose the subject I want to learn from the syllabus, Great study for people like me.',
            name: 'mina hollace',
            job: '/Freelancer',
            pic: '02'
        },

        {
            title: 'It\'s a choice of quality for people with special needs',
            content: 'I am a very strict person so I require everthing to be organized and neat. Then, I\'ll be able to make things right and shine. MaxCoach guys just gor me.',
            name: 'forence themes',
            job: '/Multimedia Admin',
            pic: '03'
        },

        {
            title: 'Professional team of specialists and passionate mentors at reach',
            content: 'I need to ge a certification for English proficiency and MaxCoach is my best choice. Theur tytors are smart and professional when dealing with students',
            name: 'madley pondor',
            job: '/IT specialist',
            pic: '04'
        },

        {
            title: 'I like turtles',
            content: 'TUUUUURTLEEEESSSS!!!',
            name: 'Pough Bigsley',
            job: '/Accountant',
            pic: '01'
        },


    ],

    cloud: [
        {
            img: '01',
            title: 'Customize reference',
            content: 'Learners are given the right to arrange and customize their study schedule and timetable based on preferences.',
            cta: 'Start here',
        },

        {
            img: '02',
            title: 'Clous Storage',
            content: 'You can store online lessons via online cloud or download to tour device and revise lessons on the way',
            cta: 'Get Free Quote',
        },

        {
            img: '03',
            title: 'Multimedia Channel',
            content: 'We provide the study materials with various formats: video, audio, slides, doc prints, books and applications',
            cta: 'Start now',
        }
    ],

    counter: [
        {
            title: 'Successfully trained',
            num: 1790,
            subtitle: 'enrolled learners'
        },

        {
            title: 'Proudly Received',
            num: 19,
            subtitle: 'countrywide awards'
        },

        {
            title: 'Firmly Established',
            num: 24,
            subtitle: 'local branches'
        },

        {
            title: 'Getting Featured on',
            num: 1090,
            subtitle: 'blog posts'
        },
    ],

    blog: [
        {
            img: 'blog-2',
            titlesm: 'busines',
            title: 'Ten Benefits Of Rentals That May Change Your Perspective',
            date: 'Dec 28, 2020',
            views: '2,276'
        },

        {
            img: 'blog-1',
            titlesm: 'busines',
            title: '10 Things Successful Mompreneurs Do Different',
            date: 'Dec 28, 2020',
            views: '2,053'
        }

    ]

});