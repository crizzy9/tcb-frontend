export const sections: Array<any> = [
    {
        n: 1,
        id: 'intro',
        name: 'Intro'
    },
    {
        n: 2,
        id: 'education',
        name: 'Education'
    },
    {
        n: 3,
        id: 'experience',
        name: 'Experience'
    },
    {
        n: 4,
        id: 'skills',
        name: 'Skills'
    },
    {
        n: 5,
        id: 'projects',
        name: 'Projects'
    },
    {
        n: 6,
        id: 'achievements',
        name: 'Achievements'
    },
];

// Project details
export const projects = [
    {
        text: 'Transferable Reinforcement Learning',
        cols: 1,
        rows: 1,
        color: 'gray',
        image: 'assets/images/hand-manipulate-block.png',
        github: 'https://github.com/crizzy9/MuGeTransGan',
        show_github: false,
        desc: 'Analyzed the potential scope of Transfer Learning in the Hand Manipulate Block and Egg environment from Open AI Gym with Q Learning, DQN and Policy Gradient Methods'
    },
    {
        text: 'Music Multi Transformer',
        cols: 1,
        rows: 1,
        color: 'lightgreen',
        image: 'assets/images/multi_transformer.jpg',
        github: 'https://github.com/crizzy9/MuGeTransGan',
        show_github: true,
        desc: 'Built four Music Transformers for each track inspired by Google Magenta and applied Global Multi Headed Attention allowing all decoders to attend over all encoders from all Transformers modifying the traditional architecture of a Transformer Network'
    },
    {
        text: 'Automatic Hypernym Detection',
        cols: 1,
        rows: 1,
        color: 'lightgreen',
        image: 'assets/images/hypernym.png',
        github: 'https://github.com/crizzy9/hypernym_detection',
        show_github: true,
        desc: 'Trained several Matrix Factorization models on the Gutenberg corpus to automatically extract hypernyms from patterns'
    },
    {
        text: 'Fan Forge',
        cols: 1,
        rows: 1,
        color: 'lightblue',
        image: 'assets/images/comic-con-museum.jpg',
        github: 'https://github.com/Comic-Con-Museum/fan-forge-backend',
        show_github: true,
        desc: 'Led a backend team of 5 and designed an open-source application where fans can curate ideas about exhibits and artifacts to be held in Comic-Con Museum using Express.js and AWS Lambdas'
    },
    {
        text: 'Text Reconstruction',
        cols: 1,
        rows: 1,
        color: '#DDBDF1',
        image: 'assets/images/feature_vectors.png',
        github: 'https://github.com/crizzy9/text_reconstruction',
        show_github: true,
        desc: 'Analyzed several models in Tensorflow for generating paragraph representations using VAE and Unidirectional LSTM Seq2Seq with/without Attention on Feature rich word embeddings retrieved from the Gutenberg Corpus'
    },
    // {
    //     text: 'Starcraft II Bot',
    //     cols: 1,
    //     rows: 1,
    //     color: 'lightgreen',
    //     image: 'assets/images/starcraft.png',
    //     github: 'https://github.com/crizzy9/starcraft_bot',
    //     show_github: false,
    //     desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porttitor ligula porttitor, lacinia sapien non.'
    // },
    {
        text: 'Deep Car',
        cols: 1,
        rows: 1,
        color: 'lightpink',
        image: 'assets/images/deepcar.jpg',
        github: 'https://github.com/crizzy9/deepcar',
        show_github: false,
        desc: 'Assembled a self-driving RC car on a Raspberry pi, PWM driver with camera and trained on a CNN model in Keras based on data collected by driving on race tracks, performing on 96% accuracy'
    },
    {
        text: 'Search Engine',
        cols: 1,
        rows: 1,
        color: 'yellow',
        image: 'assets/images/search_engine.png',
        github: 'https://github.com/crizzy9/css_retrieval',
        show_github: true,
        desc: 'Implemented a multiprocessing Search Engine, Snippet Generator and Web Crawler with a MAP greater than Lucene combining several retrieval models such as BM25, Smoothed Query Likelihood and TF-IDF'
    },
    {
        text: 'SoNIC',
        cols: 1,
        rows: 1,
        color: 'orange',
        image: 'assets/images/sonic.png',
        github: 'https://github.com/crizzy9/SoNIC',
        show_github: true,
        desc: 'Developed a social awareness network using Android, PHP and MySQL that aims to resolve common issues in the city of Mumbai by reporting them through proper channels'
    },
    {
        text: 'Nand2Tietris',
        cols: 1,
        rows: 1,
        color: 'orange',
        image: 'assets/images/nand2tetris.png',
        github: 'https://www.nand2tetris.org/',
        show_github: true,
        desc: 'Built a virtual computer based on an Operating System written in a custom programming language that runs on a simulated CPU architecture with an Assembler, Virtual Machine and Compiler in Python'
    }
];

export const words = [
    {text: 'Python', size: 109},
    {text: 'Machine Learning', size: 102},
    {text: 'Artificial Intelligence', size: 100},
    {text: 'Backend', size: 100},
    {text: 'Natural Language Processing', size: 99},
    {text: 'Data Science', size: 95},
    {text: 'Tensorflow', size: 90},
    {text: 'Java', size: 90},
    {text: 'Serverless', size: 88},
    {text: 'NLTK', size: 87},
    {text: 'Computer Vision', size: 85},
    {text: 'Java Script', size: 79},
    {text: 'Express.js', size: 78},
    {text: 'Angular', size: 78},
    {text: 'Meteor', size: 77},
    {text: 'Torch', size: 67},
    {text: 'Spring', size: 65},
    {text: 'Dynamo DB', size: 63},
    // {text: 'twist', size: 16},
    // {text: 'board', size: 15},
    // {text: 'more', size: 15},
    // {text: 'one', size: 15},
    // {text: 'workhouse', size: 15},
    // {text: 'parish', size: 14},
    // {text: 'there', size: 14},
    // {text: 'come', size: 13},
    // {text: 'hand', size: 13},
    // {text: 'know', size: 13},
    // {text: 'sir', size: 13},
    // {text: 'being', size: 12},
    // {text: 'head', size: 12},
    // {text: 'make', size: 12},
];

export const northeasternCourses = [
    {
        name: 'Programming Design Paradigms',
        color: '#abb2b9',
        text_color: 'black'
    },
    {
        name: 'Information Retrieval',
        color: '#5e646a',
        text_color: 'white'
    },
    {
        name: 'Algorithms',
        color: '#abb2b9',
        text_color: 'black'
    },
    {
        name: 'Natural Lanugage Processing',
        color: '#5e646a',
        text_color: 'white'
    },
    {
        name: 'Data Mining Techniques',
        color: '#5e646a',
        text_color: 'white'
    },
    {
        name: 'Special Topics in Artificial Intelligence',
        color: '#5e646a',
        text_color: 'white'
    },
    {
        name: 'Computer Systems',
        color: '#abb2b9',
        text_color: 'black'
    },
    {
        name: 'Reinforcement Learning',
        color: '#5e646a',
        text_color: 'white'
    }
    // Add new courses here
];

export const mumbaiUnivCourses = [
    {
        name: 'Data Structures',
        color: '#5e646a',
        text_color: 'white'
    },
    {
        name: 'Artificial Intelligence',
        color: '#5e646a',
        text_color: 'white'
    },
    {
        name: 'Machine Learning',
        color: '#5e646a',
        text_color: 'white'
    },
    {
        name: 'Web Technologies',
        color: '#abb2b9',
        text_color: 'black'
    },
    {
        name: 'Software Engineering',
        color: '#abb2b9',
        text_color: 'black'
    },
    {
        name: 'Operating Systems',
        color: '#abb2b9',
        text_color: 'black'
    },
    {
        name: 'Object Oriented Programming',
        color: '#5e646a',
        text_color: 'white'
    },
    {
        name: 'Cryptography',
        color: '#abb2b9',
        text_color: 'black'
    },
    {
        name: 'Distributed Systems',
        color: '#5e646a',
        text_color: 'white'
    },
]

export const technicalSkills = [
    {
        section_name: 'Languages',
        skills: [
            {
                name: 'Python',
                img: '',
                proficiency: 100
            },
            {
                name: 'Java',
                img: '',
                proficiency: 90
            },
            {
                name: 'JavaScript',
                img: '',
                proficiency: 80
            },
            {
                name: 'C/C++',
                img: '',
                proficiency: 70
            },
            {
                name: 'Scala',
                img: '',
                proficiency: 60
            },
            {
                name: 'Lisp',
                img: '',
                proficiency: 60
            },
            {
                name: 'SQL',
                img: '',
                proficiency: 80
            },
            {
                name: 'PHP',
                img: '',
                proficiency: 60
            },
            {
                name: 'VimScript',
                img: '',
                proficiency: 50
            }
]
    },
    {
        section_name: 'Tools',
        skills: [
            {
                name: 'Pytorch',
                img: '',
                proficiency: 80
            },
            {
                name: 'NLTK',
                img: '',
                proficiency: 80
            },
            {
                name: 'Tensorflow',
                img: '',
                proficiency: 60
            },
            {
                name: 'Matplotlib',
                img: '',
                proficiency: 70
            },
            {
                name: 'Numpy',
                img: '',
                proficiency: 90
            },
            {
                name: 'SKLearn',
                img: '',
                proficiency: 70
            },
            {
                name: 'Pandas',
                img: '',
                proficiency: 70
            },
            {
                name: 'OpenCV',
                img: '',
                proficiency: 50
            },
            {
                name: 'OpenAI Gym',
                img: '',
                proficiency: 80
            },
            // {
            //     name: 'Gensim',
            //     img: '',
            //     proficiency: 50
            // }
        ]
    },
    {
        section_name: 'Frameworks',
        skills: [
            {
                name: 'Angular',
                img: '',
                proficiency: 90
            },
            {
                name: 'Express.js',
                img: '',
                proficiency: 90
            },
            {
                name: 'Spring Boot',
                img: '',
                proficiency: 90
            },
            {
                name: 'React',
                img: '',
                proficiency: 80
            },
            {
                name: 'Meteor',
                img: '',
                proficiency: 70
            },
            {
                name: 'Elasticsearch',
                img: '',
                proficiency: 50
            },
            {
                name: 'Django',
                img: '',
                proficiency: 50
            },
        ]
    },
    {
        section_name: 'Databases',
        skills: [
            {
                name: 'MySQL',
                img: '',
                proficiency: 80
            },
            {
                name: 'DynamoDB',
                img: '',
                proficiency: 80
            },
            {
                name: 'MongoDB',
                img: '',
                proficiency: 70
            },
            {
                name: 'Oracle',
                img: '',
                proficiency: 50
            },
            {
                name: 'PostgreSQL',
                img: '',
                proficiency: 50
            },
            {
                name: 'Redis',
                img: '',
                proficiency: 60
            },
        ]
    },
    {
        section_name: 'Cloud',
        skills: [
            {
                name: 'AWS',
                img: '',
                proficiency: 100
            },
            {
                name: 'GCP',
                img: '',
                proficiency: 90
            }
        ]
    },
    {
        section_name: 'Platforms',
        skills: [
            {
                name: 'Linux',
                img: '',
                proficiency: 100
            },
            {
                name: 'MacOS',
                img: '',
                proficiency: 100
            },
            {
                name: 'Windows',
                img: '',
                proficiency: 100
            },
            {
                name: 'Android',
                img: '',
                proficiency: 100
            }
        ]
    }
]


