import { AiOutlineCheck, AiFillLike } from 'react-icons/ai';
import { FaGlobeEurope } from 'react-icons/fa';

import { BsFillCreditCard2BackFill } from 'react-icons/bs';
import { IoIosWatch } from 'react-icons/io'; 
import { TbSticker } from 'react-icons/tb';
import { GiGemPendant } from 'react-icons/gi';

export const ka = {
    navbar: {
        menubar: {
            production: 'პროდუქცია',
            productionMenu: [
                {
                    id: 1,
                    productName: 'პლასტიკური ბარათები'
                },
                {
                    id: 2,
                    productName: 'სამაჯურები'
                },
                {
                    id: 3,
                    productName: 'სტიკერები'
                },
                {
                    id: 4,
                    productName: 'ბრელოკები'
                }
            ]
        },
        service: 'სერვისი',
        gallery: 'გალერეა',
        information: 'ინფორმაცია',
        prices: 'ფასები',
    },
    bodyInformation: {
        productionName: 'პროდუქცია',
        priority: [
            {
                priorityIcon: <AiOutlineCheck />,
                priorityDescription: '100% ხარისხის გარანტია'
            },
            {
                priorityIcon: <AiFillLike />,
                priorityDescription: '72 საათის მანძილზე ხელმისაწვდომია'
            },
            {
                priorityIcon: <FaGlobeEurope />,
                priorityDescription: 'დამზადებულია საქართველოში'
            }
        ],
        productions: [
            {
                productName: 'პლასტიკური ბარათები',
                productIcon: <BsFillCreditCard2BackFill />,
                productDescription: 'ლორემ იპსუმ გაიციმციმა ჩაატარეთო გონიერ პრორექტორს მოსდოს ჯავრიანი გვსურს იტირებდა სიბნელეა გაემგზავროთ, ბრმები ინტელიგენტურობა. დოლარით დაწყებულიყო ბარხანას, აუღელვებლად, მიაყარა, დაუბრუნდეს, განდეგილები ჯაგრის. ჩაფლულიყო იკლაკნებიან თასები მოსმაზე როლები კრიტიკული წარმოიდგენთ დაჟანგული დაწყებულიყო მიაყარა ბადებდა.',
                more: 'მეტი...'
            },
            {
                productName: 'სამაჯურები',
                productIcon: <IoIosWatch />,
                productDescription: 'ლორემ იპსუმ გაიციმციმა ჩაატარეთო გონიერ პრორექტორს მოსდოს ჯავრიანი გვსურს იტირებდა სიბნელეა გაემგზავროთ, ბრმები ინტელიგენტურობა. დოლარით დაწყებულიყო ბარხანას, აუღელვებლად, მიაყარა, დაუბრუნდეს, განდეგილები ჯაგრის. ჩაფლულიყო იკლაკნებიან თასები მოსმაზე როლები კრიტიკული წარმოიდგენთ დაჟანგული დაწყებულიყო მიაყარა ბადებდა.',
                more: 'მეტი...'
            },
            {
                productName: 'სტიკერები',
                productIcon: <TbSticker />,
                productDescription: 'ლორემ იპსუმ გაიციმციმა ჩაატარეთო გონიერ პრორექტორს მოსდოს ჯავრიანი გვსურს იტირებდა სიბნელეა გაემგზავროთ, ბრმები ინტელიგენტურობა. დოლარით დაწყებულიყო ბარხანას, აუღელვებლად, მიაყარა, დაუბრუნდეს, განდეგილები ჯაგრის. ჩაფლულიყო იკლაკნებიან თასები მოსმაზე როლები კრიტიკული წარმოიდგენთ დაჟანგული დაწყებულიყო მიაყარა ბადებდა.',
                more: 'მეტი...'
            },
            {
                productName: 'ბრელოკები',
                productIcon: <GiGemPendant />,
                productDescription: 'ლორემ იპსუმ გაიციმციმა ჩაატარეთო გონიერ პრორექტორს მოსდოს ჯავრიანი გვსურს იტირებდა სიბნელეა გაემგზავროთ, ბრმები ინტელიგენტურობა. დოლარით დაწყებულიყო ბარხანას, აუღელვებლად, მიაყარა, დაუბრუნდეს, განდეგილები ჯაგრის. ჩაფლულიყო იკლაკნებიან თასები მოსმაზე როლები კრიტიკული წარმოიდგენთ დაჟანგული დაწყებულიყო მიაყარა ბადებდა.',
                more: 'მეტი...'
            }
        ]
    },
    footer: {
        socialPages: {
            socialPageName: 'სოციალური გვერდები',
            facebook: 'ფეისბუქი',
            instagram: 'ინსტაგრამი',
            linkedin: 'ლინკდინი',
            youtube: 'იუთუბი'
        },
        aboutUs: {
            aboutUsName: 'ჩვენს შესახებ',
            termsAndConditions: 'ვადები და პირობები',
            termsOfUse: 'მოხმარების პირობები',
            privacyPolicy: 'კონფიდენციალურობის პოლიტიკა',
            siteMap: 'საიტის რუკა'
        },
        contact: {
            contactName: 'კონტაქტი',
            phoneNumber: '555 123 456',
            email: 'youremail@example.com',
            address: 'რაღაც მისამართი, რაღაც ნომერი 2',
            findUs: 'გვიპოვეთ რუკაზე',
        }
    }
}