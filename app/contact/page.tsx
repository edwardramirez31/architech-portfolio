'use client';

import type { NextPage } from 'next';

import ContactForm from './ContactForm';
import FormLayout from './FormLayout';

const Services: NextPage = () => {
  return (
    <main>
      <FormLayout>
        <ContactForm />
      </FormLayout>
    </main>
  );
};

export default Services;
