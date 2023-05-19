import { ratelogo, communitylogo, languagelogo, creativelogo, creditlogo, loanlogo, loanlogotwo, equipmentlogo, testimonialone, testimonialthree, testimonialtwo, stepimageone, stepimagethree, stepimagetwo, } from "../assets";




const featureCard = [
    {
        img: ratelogo,
        title: `Competitive`,
        titleTwo: `Rates`
    },
    {
        img: communitylogo,
        title: 'Local & Community',
        titleTwo: 'Service'
    },
    {
        img: languagelogo,
        title: 'Multi Language',
        titleTwo: ''
    },
    {
        img: creativelogo,
        title: 'Extensive',
        titleTwo:'Knowledge'
    }
]

const loanFeatureCard = [
    {
        title: 'Secured Lines of Credit',
        img: creditlogo,
        miniFeature: [
            '$2,500 to $500,000',
            'Monthly Payment',
            'No Prepayment Penalty',
            'Rates from 3,498%',
            'True Revolver line'
        ]
    },
    {
        title: 'Secured Conventional Loan',
        img: loanlogo,
        miniFeature: [
            '$2,500 to $750,000',
            'Monthly Payment Loans',
            'No Prepayment Penalty as low as',
            '36-84 month terms'
        ]
    },
    {
        title: 'Equipment Funding',
        img: equipmentlogo,
        miniFeature: [
            '$2,500 to $750,000',
            'Monthly Payment Loans',
            'No Prepayment Penalty as low as',
            '36-84 month terms'
        ]
    },
]

const banklyFinderList = [
    {
        title: 'Ansog gratis & unforpligtende',
        description: 'Du indsender en ansagning. Det tager kun et par minutter, Herefter indhenter vi tilbud.'
    },
    {
        title: 'Sammenlign dine tilbud',
        description: 'Du indsender en ansagning. Det tager kun et par minutter, Herefter indhenter vi tilbud.'
    },
    {
        title: 'Vaelg det bedste tilbud',
        description: 'Du indsender en ansagning. Det tager kun et par minutter, Herefter indhenter vi tilbud.'
    },
]

const testimonialData = [
    {
        img: testimonialone,
        description: 'Lorem ipsum dolor amet consectetur Egestas quam massa habitant in. lacinia tincidunt vestibulum molestie diam posuere nibh',
        name: 'Bernice Long'
    },
    {
        img: testimonialtwo,
        description: 'Lorem ipsum dolor amet consectetur Egestas quam massa habitant in. lacinia tincidunt vestibulum molestie diam posuere nibh',
        name: 'Comfort James'
    },
    {
        img: testimonialthree,
        description: 'Lorem ipsum dolor amet consectetur Egestas quam massa habitant in. lacinia tincidunt vestibulum molestie diam posuere nibh',
        name: 'Royce Bull'
    }
]

const stepData = [
    {
        name: 'Step 1',
        description: 'SLorem ipsum dolor sit amet consectetur',
        img: stepimageone
    },
    {
        name: 'Step 2',
        description: 'SLorem ipsum dolor sit amet consectetur',
        img: stepimagetwo
    },
    {
        name: 'Step 3',
        description: 'SLorem ipsum dolor sit amet consectetur',
        img: stepimagethree
    },
    {
        name: 'Step 4',
        description: 'SLorem ipsum dolor sit amet consectetur',
        img: stepimagetwo
    },
]

const faqsData = [
    {
        question: 'Do I need to register with to place orders?',
        answer: 'Yeah you need to register with your email address and password. By registering we will have access to all the necessary information needed about you.'
    },
    {
        question: 'How long can i borrow for?',
        answer: 'Depending on the amount you borrowed and the intended reason for borrowing, the time range for repayment varies and will be agreed upon.'
    },
    {
        question: 'What documents do i need for a business loan?',
        answer: 'The document you need might include letter for application, a copy to prove the existence of your business enterprise and my vary too.'
    },
    {
        question: 'When do i need to start repaying my business loan?',
        answer: 'This obviously depends on the type of business you do and the amount of loan obtainedit may vary from 3 months and above though it will be agreed upon.'
        
    }
]

const navLinks = [
    {
        name: 'PRODUCT',
        link: 'product'
    },
    {
        name: 'MONEYLIFE',
        link: 'moneylife'
    },
    {
        name: 'ABOUT US',
        link: 'aboutus'
    }
]

export {
    navLinks,
    faqsData,
    stepData,
    testimonialData,
    banklyFinderList,
    loanFeatureCard,
    featureCard,
}