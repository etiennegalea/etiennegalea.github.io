import React from 'react';
import '../styles/References.css';

const References = () => {
  const references = [
    {
      img: "/people/ian_mamo.jpg",
      name: "Ian Mamo",
      position: "Technical Operations Manager",
      company: "Betsson Group",
      reference: [
        "I had the pleasure of working with Etienne, and came to know him as a truly valuable asset to absolutely any team. He is honest, dependable, and incredibly hard-working. Beyond that, he is motivated to ensure that the current task at hand is not only a solution to the business requirement, but also an enhancement to the system.",
        "His knowledge of the development cycles, and expertise in software development management was a huge advantage to our entire department. He put his skillset to work in order to obtain an integration between the CRM system and a newly introduced 3rd party system which provided our clientele the best customer journey which is crucial for our operation.",
        "Along with his undeniable talent, Etienne has always been a true team player, and always manages to foster positive discussions and bring the best out of other employees through his ideas, and solutions. Without a doubt, I confidently recommend him as a dedicated and knowledgeable employee and an all-around great person, I know that he will be a beneficial addition to any organization within his expertise.",
        "Please feel free to contact me at ianmamo@gmail.com should you like to discuss Etienne's experience further. I'd be happy to expand on my recommendation."
      ],
      contact: "ianmamo@gmail.com"
    },
    {
      img:"/organizations/ostfalia.jpeg",
      name: "Günter Kircher",
      position: "i.A. Dipl.-Ing.",
      company: "Ostfalia University",
      reference: [
        "Our working group at the Institute of Distributed Systems of the Faculty of Computer Science deals with tools for model-based software development. Application examples for this are microcontroller applications and test environments for autonomous vehicles.",
        "During his internship, Mr. Galea got to know all the work areas of the team. His primary focus was to develop software to apply machine learning algorithms for traffic sign detection. In particular, he worked on the following tasks:",
        "- Concept design for traffic sign detection from real-time video signals",
        "- Software development based on OpenCV and integration in the model's control application",
        "- Training of a cascade of classifiers",
        "- Analyse the performance of the detection",
        "Our thanks go to Mr. Galea for his constructive and very active cooperation. We wish him all the best and a lot of success for his future"
      ],
      contact: "guenter.kircher@ostfalia.de"
    },
  ];

  // Helper function to check if a string starts with a bullet point
  const isBulletPoint = (text) => {
    return text.trim().startsWith('-');
  };

  // Helper function to process reference text and convert bullet points to list items
  const processReferenceText = (referenceTexts) => {
    const result = [];
    let currentList = [];
    let inList = false;

    referenceTexts.forEach((text, index) => {
      if (isBulletPoint(text)) {
        // Start a new list if not already in one
        if (!inList) {
          inList = true;
        }
        // Add the bullet point to the current list
        currentList.push(text.trim().substring(1).trim());
      } else {
        // If we were in a list, add it to the result and reset
        if (inList) {
          result.push({ type: 'list', items: [...currentList] });
          currentList = [];
          inList = false;
        }
        // Add the regular paragraph
        result.push({ type: 'paragraph', text });
      }
    });

    // Add any remaining list items
    if (currentList.length > 0) {
      result.push({ type: 'list', items: currentList });
    }

    return result;
  };

  return (
    <div className="max-w-4xl mx-auto mb-8 references-container">
      {references.map((ref, index) => {
        const processedReference = processReferenceText(ref.reference);
        
        return (
          <div key={index} className="reference-card">
            <div className="reference-header">
              <div className="reference-image">
                <img src={ref.img} alt={ref.name} />
              </div>
              <div className="reference-info">
                <h3 className="text-black dark:text-white">{ref.name}</h3>
                {ref.position && <p className="reference-title text-gray-700 dark:text-gray-300">{ref.position}</p>}
                <p className="reference-company text-gray-700 dark:text-gray-300">{ref.company}</p>
              </div>
            </div>
            <div className="reference-content">
              {processedReference.map((item, i) => {
                if (item.type === 'paragraph') {
                  return <p key={i} className="text-gray-600 dark:text-gray-300">{item.text}</p>;
                } else if (item.type === 'list') {
                  return (
                    <ul key={i} className="reference-list">
                      {item.items.map((listItem, j) => (
                        <li key={j} className="text-gray-600 dark:text-gray-300">{listItem}</li>
                      ))}
                    </ul>
                  );
                }
                return null;
              })}
              <p className="reference-contact text-gray-500 dark:text-gray-400">{ref.contact}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default References; 