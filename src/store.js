import { reactive } from "vue";


export const store = reactive({


    NavItems: [
        {
            text: "Home",
            url: "#",
            current: false,
        },
        {
            text: "Pages",
            url: "#",
            current: false,
        },
        {
            text: "Courses",
            url: "#",
            current: false,
        },
        {
            text: "Features",
            url: "#",
            current: false,
        },
        {
            text: "Blog",
            url: "#",
            current: false,
        },
        {
            text: "Shops",
            url: "#",
            current: false,
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

        },

        {
            ulText: "Information",
            liText: [
                'Membership',
                'Purchase guide',
                'Privacy policy',
                'Terms of services'
            ],
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


    ]

});