import { AiOutlineCheck, AiFillLike } from 'react-icons/ai';
import { FaGlobeEurope } from 'react-icons/fa';

import { BsFillCreditCard2BackFill } from 'react-icons/bs';
import { IoIosWatch } from 'react-icons/io'; 
import { TbSticker } from 'react-icons/tb';
import { GiGemPendant } from 'react-icons/gi';

export const en = {
    navbar: {
        menubar: {
            production: 'PRODUCTION',
            productionMenu: [
                {
                    productName: 'CARDS'
                },
                {
                    productName: 'BRACELET'
                },
                {
                    productName: 'STICKERS'
                },
                {
                    productName: 'KEYCHAIN'
                }
            ]
        },
        service: 'SERVICE',
        gallery: 'GALERRY',
        information: 'INFORMATION',
        prices: 'PRICES',
    },
    bodyInformation: {
        productionName: 'PRODUCTION',
        priority: [
            {
                priorityIcon: <AiOutlineCheck />,
                priorityDescription: '100% QUALITY GARANTY'
            },
            {
                priorityIcon: <AiFillLike />,
                priorityDescription: '72 HOURS DELIVERY'
            },
            {
                priorityIcon: <FaGlobeEurope />,
                priorityDescription: 'MADE IN GEORGIA'
            }
        ],
        productions: [
            {
                productName: 'PLASTIC CARDS',
                productIcon: <BsFillCreditCard2BackFill />,
                productDescription: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa expedita doloremque earum quia cumque nihil. Quasi est, vel debitis ex rem suscipit consequuntur inventore labore quis atque optio recusandae reiciendis sapiente, quod impedit laborum, saepe doloribus alias. Sit magnam ipsum cumque voluptatibus. Nemo autem odit sunt recusandae accusamus laboriosam eum.',
                more: 'more...'
            },
            {
                productName: 'BRACELETS',
                productIcon: <IoIosWatch />,
                productDescription: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa expedita doloremque earum quia cumque nihil. Quasi est, vel debitis ex rem suscipit consequuntur inventore labore quis atque optio recusandae reiciendis sapiente, quod impedit laborum, saepe doloribus alias. Sit magnam ipsum cumque voluptatibus. Nemo autem odit sunt recusandae accusamus laboriosam eum.',
                more: 'more...'
            },
            {
                productName: 'STICKERS',
                productIcon: <TbSticker />,
                productDescription: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa expedita doloremque earum quia cumque nihil. Quasi est, vel debitis ex rem suscipit consequuntur inventore labore quis atque optio recusandae reiciendis sapiente, quod impedit laborum, saepe doloribus alias. Sit magnam ipsum cumque voluptatibus. Nemo autem odit sunt recusandae accusamus laboriosam eum.',
                more: 'more...'
            },
            {
                productName: 'KEYFOBS',
                productIcon: <GiGemPendant />,
                productDescription: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa expedita doloremque earum quia cumque nihil. Quasi est, vel debitis ex rem suscipit consequuntur inventore labore quis atque optio recusandae reiciendis sapiente, quod impedit laborum, saepe doloribus alias. Sit magnam ipsum cumque voluptatibus. Nemo autem odit sunt recusandae accusamus laboriosam eum.',
                more: 'more...'
            }
        ]
    }
}