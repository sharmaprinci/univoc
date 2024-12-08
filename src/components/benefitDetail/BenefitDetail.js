
import { useParams } from 'react-router-dom';
import benefitsData from '../BenefitsData';
import '../benefitDetail/BenefitDetail.css';

const BenefitDetail = () => {
  const { id } = useParams();
  const benefit = benefitsData.find((b, index) => index === parseInt(id, 10));

  if (!benefit) {
    return <p>Benefit not found.</p>;
  }

  return (
    <div className="data-detail">
      <h2 className="data-title" >{benefit.title}</h2>
      <div className="data-cards">
        {benefit.description.map((section, index) => (
          <div key={index} className="data-card">
            {section.heading && (
              <span className="section-heading">{section.heading}:</span>
            )}
            <span className="section-content">{section.content}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BenefitDetail;
