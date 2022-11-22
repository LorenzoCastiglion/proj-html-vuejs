import { reactive } from "vue";


export const store = reactive({


    NavItems: [
        {
            text: "Home",
            url: "#",

        },
        {
            text: "Pages",
            url: "#",

        },
        {
            text: "Courses",
            url: "#",

        },
        {
            text: "Features",
            url: "#",

        },
        {
            text: "Blog",
            url: "#",

        },
        {
            text: "Shops",
            url: "#",

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