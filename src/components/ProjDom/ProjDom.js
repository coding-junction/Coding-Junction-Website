import React, { useState } from 'react';
import './ProjDom.css'
import ProjDomsCards from '../ProjDomsCards/ProjDomsCards';

export default function ProjDom() {

  const domainArray=[
    {
      title: "Web Dev",
      imgUrl: require("../../Assets/Logo/Domain-logo/webdev.png"),
      desc: "Web development is the process of creating and maintaining websites and web applications. It involves using coding languages and other tools to build user-friendly interfaces, manage databases, and connect websites to the internet."
    },
    {
      title: "Android",
      imgUrl: require("../../Assets/Logo/Domain-logo/android.png"),
      desc: "Android development is the process of creating and maintaining applications for devices that run on the Android operating system. It involves using Java or Kotlin programming languages and the Android SDK to build user interfaces, handle user input, and interact with device hardware and software."
    },
    {
      title: "C++",
      imgUrl: require("../../Assets/Logo/Domain-logo/cpp.png"),
      desc: "C++ is a powerful and versatile programming language that is used to build a wide range of applications, from operating systems to video games to scientific simulations. It is known for its speed, efficiency, and flexibility."
    },
    {
      title: "AI/ML",
      imgUrl: require("../../Assets/Logo/Domain-logo/ai.png"),
      desc: "AI/ML is a rapidly evolving field with the potential to revolutionize many aspects of our lives. AI/ML is already having a major impact on the world around us. As the technology continues to develop, we can expect to see even more innovative and transformative applications in the years to come."
    }
  ];

  return (
    <div className='ProjDom'>
      <div className='projDom-head'>
        Project Domains
      </div>
      <div className='projDoms-domains'>
      {
        domainArray.map(domainArray => (
          <ProjDomsCards title={domainArray.title} imgUrl={domainArray.imgUrl} desc={domainArray.desc}/>
          ))
      } 
      </div>
        
    </div>
  )
}
