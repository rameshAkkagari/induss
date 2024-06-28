import React,{useState} from 'react';
import { MdEmail } from "react-icons/md";
import { GrDocumentText } from "react-icons/gr";
import { RiPagesLine } from "react-icons/ri";
import { BsPhone } from "react-icons/bs";
import classNames from 'classnames';
import './cards.css'; // Assuming you have a CSS file for custom styles
// import { data } from './data';
const data = [
    {
        title:"Easy onboarding",
        icon:<MdEmail/>,
        features:["Apply online",
            "Document Submission",
           " Instant Verification",
            "Support"]
    },
  
    {
        title:"Seamlessapi Integration",
        icon:<RiPagesLine/>,
        features:["Intuitive Interface" , 
            "Pre-Built Connectors",
            "Customization",
            "Testing & Development"]
    },
  
    {
        title:"Quick KYC Verification",
        icon:<GrDocumentText/>,
        features:["Online Submission" , 
            "Automated Verification",
           "Document Security",
            "Dedicated Support"]
    },
  
    {
        title:"Smooth Transactions",
        icon:<BsPhone/>,
        features:["Speed & Efficiency",
            "Security",
            "User- Friendly Interface",
            "comprehensive Tracking",]
    }
  ]
function Cards() {
    const [arr, setArr] = useState(data);

const handlerClick = (index) => {
  const newArr = [...arr];
  // Move the clicked item to the start of the array
  const [clickedItem] = newArr.splice(index, 1);
  newArr.push(clickedItem);
  setArr(newArr);

};
  return (
    <>
        <div>
            <h1 className='text-1xl text-blue-500 text-center font-bold p-4'>Product Highlights</h1>
            <h1 className='text-4xl text-center font-bold'>Indusspay provides seamless payment infrastructure <br/> to small-big businesses all over the nation.</h1>
        </div>
        <div className='allcards'>
                    {arr.map((item, index) => (
                    <div className="card-container" key={index} onClick={() => handlerClick(index)}>
                    <div className={classNames("card", `card-style-${index % 4}`)}>
                        <div className="card-content">
                        <div className="email-icon" style={{ fontSize: '100px', color: 'orange' }}>
                            {item.icon}
                        </div>
                        <h1 className="card-title">{item.title}</h1>
                        </div>
                        <div className="card-details">
                        {item.features.map((text, idx) => <p key={idx}>{text}</p>)}
                        </div>
                    </div>
                    </div>
                ))}
        </div>
    

    </>
  );
}

export default Cards;
