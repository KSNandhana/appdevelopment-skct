import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import firstSlide from '../Assets/images/slide7 (3).png';
import secondSlide from '../Assets/images/slide4 (3).png';
import thirdSlide from '../Assets/images/slide6.png';
import Footer from './Footer';
import '../Assets/styles/home.css';

const slides = [firstSlide, secondSlide, thirdSlide];

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="homepage-container">
      <div className="carousel-container">
        <div className="carousel-slide" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slides.map((slide, index) => (
            <div className="carousel-image-container" key={index}>
              <img
                className="d-block w-100"
                src={slide}
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="content-container">
        {/* <h1>TAXCREST</h1> */}
        <div className="para">
    <p>TaxCrest is designed to simplify the process of calculating taxes for employees. It allows users to input various income components such as gross income, allowances, bonuses, commissions, and other income. The app also accommodates different salary frequencies and provides fields for deductions under sections like 80C and 80D.</p>
    <p>This user-friendly tool ensures accurate and efficient tax computation, helping employees manage their finances better. The app offers the following features:</p>
    <ul>
        <li>Customizable input fields for different types of income and deductions.</li>
        <li>Support for various salary frequencies including monthly, bi-weekly, weekly, and daily.</li>
        <li>Detailed breakdown of tax calculations to help users understand their tax liabilities.</li>
        <li>Secure storage of user data to ensure privacy and confidentiality.</li>
        <li>Responsive design, making it accessible on both desktop and mobile devices.</li>
        <li>Option to save and retrieve previous tax calculations for future reference.</li>
    </ul>
    <p>This is a comprehensive solution for employees seeking to streamline their tax calculations and optimize their financial planning.</p>
</div>

      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
