import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MdEmail } from "react-icons/md";
import { GrDocumentText } from "react-icons/gr";
import { RiPagesLine } from "react-icons/ri";
import { BsPhone } from "react-icons/bs";
import Cards from './components/Cards';

const data = [
  {
      title:"easy_onboardingEasy Onboarding",
      icons:<MdEmail/>,
      features:["Apply online",
          "Document Submission",
         " Instant Verification",
          "Support"]
  },

  {
      title:"seamless_api_integrationSeamless API Integration",
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
function App() {
  const [cardShow,setCardShow] = useState(false)
  const showDetails  =()=>{
      setCardShow(true)
  }
  const hideDetails  =()=>{
      setCardShow(false)
  }

  return (
    <>
        <Cards/>
    </>
        
  )
}

export default App
