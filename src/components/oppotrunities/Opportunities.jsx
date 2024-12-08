import image1 from "../../images/1.jpg";
import image2 from "../../images/2.jpg";
import image3 from "../../images/3.jpg";
import image4 from "../../images/4.jpg";

const Opportunities = () => {
  const cards = [
    {
      title: "Card 1",
      description: "This is the description for card 1.",
      image: image1,
      points: [
        "NCSDE Largest affiliated training partner",
        "Tie-ups with Govt. & State Ministries for skilling projects",
        "NSQF Aligned skilling courses",
      ],
    },
    {
      title: "Card 2",
      description: "This is the description for card 2.",
      image: image2,
      points: [
        "120 skilling and ability enhancement courses through AISECT Learn",
        "Franchisee opportunities through Financial Services",
        "G2C & B2C services through AISECT Seva Kendra (ASK)",
      ],
    },
    {
      title: "Card 3",
      description: "This is the description for card 3.",
      image: image3,
      points: [
        "Atal Incubation center, AIC-RNTU, Bhopal (NITI Aayog) to promote entrepreneurship",
        "CVRU Incubation Center",
        "NSQF Aligned skilling courses",
        "Micro-entrepreneurship consultancy",
      ],
    },
    {
      title: "Card 4",
      description: "This is the description for card 4.",
      image: image4,
      points: [
        "Raman Greens",
        "Balshaali Pipes",
        "Early Childhood Education",
        "AISECT Publication",
        "Placement Services",
        "Apprenticeship",
      ],
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      {/* Section Heading */}
      <h1 className="text-4xl font-bold text-center text-grey-800 mb-4">
        Opportunities to Collaborate
      </h1>
      <h2 className="font-normal text-center text-gray-800 mb-8">
        The AISECT Model is multi-purpose, self-sustainable, and highly scalable.
      </h2>

      <div className="flex gap-16 px-4 flex-wrap justify-center">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-blue-200 shadow-lg rounded-lg p-4 w-72 text-center flex flex-col"
          >
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              {card.title}
            </h2>
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-40 object-cover rounded-lg"
            />
            <p className="text-gray-600 mt-4">{card.description}</p>
            <ul className="text-left mt-4 list-disc pl-6 text-gray-700 flex-grow">
              {card.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Opportunities;
