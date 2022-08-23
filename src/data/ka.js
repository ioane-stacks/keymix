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
                    productName: 'პლასტიკური ბარათები'
                },
                {
                    productName: 'სამაჯურები'
                },
                {
                    productName: 'სტიკერები'
                },
                {
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
        priority: {},
        productions: [
            {
                productName: 'პლასტიკური ბარათები',
                productIcon: <BsFillCreditCard2BackFill />,
                productDescription: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa expedita doloremque earum quia cumque nihil. Quasi est, vel debitis ex rem suscipit consequuntur inventore labore quis atque optio recusandae reiciendis sapiente, quod impedit laborum, saepe doloribus alias. Sit magnam ipsum cumque voluptatibus. Nemo autem odit sunt recusandae accusamus laboriosam eum.',
                more: 'მეტი...'
            },
            {
                productName: 'სამაჯურები',
                productIcon: <IoIosWatch />,
                productDescription: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa expedita doloremque earum quia cumque nihil. Quasi est, vel debitis ex rem suscipit consequuntur inventore labore quis atque optio recusandae reiciendis sapiente, quod impedit laborum, saepe doloribus alias. Sit magnam ipsum cumque voluptatibus. Nemo autem odit sunt recusandae accusamus laboriosam eum.',
                more: 'მეტი...'
            },
            {
                productName: 'სტიკერები',
                productIcon: <TbSticker />,
                productDescription: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa expedita doloremque earum quia cumque nihil. Quasi est, vel debitis ex rem suscipit consequuntur inventore labore quis atque optio recusandae reiciendis sapiente, quod impedit laborum, saepe doloribus alias. Sit magnam ipsum cumque voluptatibus. Nemo autem odit sunt recusandae accusamus laboriosam eum.',
                more: 'მეტი...'
            },
            {
                productName: 'ბრელოკები',
                productIcon: <GiGemPendant />,
                productDescription: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa expedita doloremque earum quia cumque nihil. Quasi est, vel debitis ex rem suscipit consequuntur inventore labore quis atque optio recusandae reiciendis sapiente, quod impedit laborum, saepe doloribus alias. Sit magnam ipsum cumque voluptatibus. Nemo autem odit sunt recusandae accusamus laboriosam eum.',
                more: 'მეტი...'
            }
        ]
    }
}