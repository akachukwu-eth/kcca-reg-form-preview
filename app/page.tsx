import React from 'react';
import RegistrationForm from './components/registrationForm';

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <RegistrationForm />
    </div>
  );
};

export default HomePage;