import React from 'react';
import { useParams } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import { Heart, Shield, Thermometer, Activity, Stethoscope, Clock, Users, CheckCircle } from 'lucide-react';

const treatmentData: Record<string, {
  title: string;
  description: string;
  symptoms: string[];
  treatments: string[];
  duration: string;
  category: string;
  icon: any;
}> = {
  'thyroid-disorders': {
    title: 'Thyroid Disorders',
    description: 'Comprehensive care for thyroid conditions including hypothyroidism, hyperthyroidism, and thyroid nodules. Our endocrinologists provide personalized treatment plans.',
    symptoms: ['Fatigue', 'Weight changes', 'Temperature sensitivity', 'Heart rate changes', 'Mood changes'],
    treatments: ['Thyroid hormone replacement therapy', 'Anti-thyroid medications', 'Regular monitoring', 'Lifestyle modifications', 'Nutritional counseling'],
    duration: '3-6 months ongoing',
    category: 'Chronic Diseases',
    icon: Heart
  },
  'dengue-treatment': {
    title: 'Dengue Treatment',
    description: 'Expert management of dengue fever with focus on symptom relief, monitoring for complications, and supportive care.',
    symptoms: ['High fever', 'Severe headache', 'Pain behind eyes', 'Muscle aches', 'Nausea and vomiting'],
    treatments: ['Fluid management', 'Pain relief', 'Platelet monitoring', 'Fever control', 'Rest and recovery'],
    duration: '7-10 days',
    category: 'Acute Conditions',
    icon: Thermometer
  },
  'hypertension': {
    title: 'Hypertension Management',
    description: 'Complete blood pressure management program including medication, lifestyle changes, and regular monitoring.',
    symptoms: ['Headaches', 'Dizziness', 'Chest pain', 'Shortness of breath', 'Often asymptomatic'],
    treatments: ['Antihypertensive medications', 'Diet modifications', 'Exercise program', 'Stress management', 'Regular check-ups'],
    duration: 'Ongoing management',
    category: 'Chronic Diseases',
    icon: Heart
  },
  'diabetes': {
    title: 'Diabetes Care',
    description: 'Comprehensive diabetes management including blood sugar control, medication management, and complication prevention.',
    symptoms: ['Excessive thirst', 'Frequent urination', 'Fatigue', 'Blurred vision', 'Slow healing wounds'],
    treatments: ['Blood glucose monitoring', 'Insulin therapy', 'Oral medications', 'Diet planning', 'Exercise guidance'],
    duration: 'Lifelong management',
    category: 'Chronic Diseases',
    icon: Heart
  },
  'acne': {
    title: 'Acne Treatment',
    description: 'Advanced acne treatment using modern dermatological approaches for clear, healthy skin.',
    symptoms: ['Blackheads', 'Whiteheads', 'Inflammatory papules', 'Cysts', 'Scarring'],
    treatments: ['Topical retinoids', 'Antibiotics', 'Chemical peels', 'Lifestyle counseling', 'Scar prevention'],
    duration: '3-6 months',
    category: 'Skin Conditions',
    icon: Shield
  },
  'back-pain': {
    title: 'Back Pain Relief',
    description: 'Comprehensive back pain management using physiotherapy, medication, and lifestyle modifications.',
    symptoms: ['Lower back pain', 'Muscle stiffness', 'Limited mobility', 'Radiating pain', 'Muscle spasms'],
    treatments: ['Physical therapy', 'Pain medications', 'Exercise therapy', 'Posture correction', 'Heat/cold therapy'],
    duration: '4-8 weeks',
    category: 'Pain Management',
    icon: Activity
  },
  'dandruff': {
    title: 'Dandruff Treatment',
    description: 'Effective dandruff treatment using medicated shampoos, scalp care, and lifestyle modifications.',
    symptoms: ['White flakes on scalp', 'Itchy scalp', 'Dry scalp', 'Hair fall', 'Scalp irritation'],
    treatments: ['Medicated shampoos', 'Antifungal treatments', 'Scalp moisturizing', 'Diet recommendations', 'Stress management'],
    duration: '4-6 weeks',
    category: 'Skin Conditions',
    icon: Shield
  },
  'allergic-reactions': {
    title: 'Allergic Reactions',
    description: 'Comprehensive allergy management including identification of triggers and effective treatment.',
    symptoms: ['Skin rash', 'Itching', 'Swelling', 'Respiratory symptoms', 'Digestive issues'],
    treatments: ['Antihistamines', 'Topical treatments', 'Allergy testing', 'Trigger avoidance', 'Emergency protocols'],
    duration: '2-4 weeks',
    category: 'Skin Conditions',
    icon: Shield
  },
  'fungal-infections': {
    title: 'Fungal Infections',
    description: 'Treatment of various fungal infections affecting skin, nails, and other areas.',
    symptoms: ['Skin patches', 'Itching', 'Scaling', 'Discoloration', 'Nail changes'],
    treatments: ['Antifungal medications', 'Topical creams', 'Oral treatments', 'Hygiene counseling', 'Prevention strategies'],
    duration: '2-6 weeks',
    category: 'Skin Conditions',
    icon: Shield
  },
  'dermatitis-treatment': {
    title: 'Dermatitis Treatment',
    description: 'Specialized care for various types of dermatitis including eczema and contact dermatitis.',
    symptoms: ['Red inflamed skin', 'Itching', 'Dry patches', 'Blisters', 'Skin thickening'],
    treatments: ['Topical corticosteroids', 'Moisturizers', 'Trigger identification', 'Lifestyle modifications', 'Skin barrier repair'],
    duration: '4-8 weeks',
    category: 'Skin Conditions',
    icon: Shield
  },
  'acidity': {
    title: 'Acidity Treatment',
    description: 'Management of acid reflux and gastric acidity through medication and lifestyle changes.',
    symptoms: ['Heartburn', 'Chest pain', 'Sour taste', 'Nausea', 'Bloating'],
    treatments: ['Antacids', 'Proton pump inhibitors', 'Diet modifications', 'Lifestyle changes', 'Stress management'],
    duration: '2-4 weeks',
    category: 'Acute Conditions',
    icon: Thermometer
  },
  'headaches': {
    title: 'Headache Management',
    description: 'Comprehensive headache treatment including tension headaches and migraines.',
    symptoms: ['Head pain', 'Sensitivity to light', 'Nausea', 'Muscle tension', 'Visual disturbances'],
    treatments: ['Pain relievers', 'Trigger identification', 'Stress management', 'Sleep hygiene', 'Preventive medications'],
    duration: '2-6 weeks',
    category: 'Acute Conditions',
    icon: Thermometer
  },
  'sore-throat': {
    title: 'Sore Throat Treatment',
    description: 'Effective treatment for bacterial and viral throat infections.',
    symptoms: ['Throat pain', 'Difficulty swallowing', 'Swollen glands', 'Fever', 'Hoarse voice'],
    treatments: ['Antibiotics (if bacterial)', 'Pain relievers', 'Throat gargles', 'Rest and hydration', 'Throat lozenges'],
    duration: '5-7 days',
    category: 'Acute Conditions',
    icon: Thermometer
  },
  'fever-cold-&-cough': {
    title: 'Fever, Cold & Cough',
    description: 'Comprehensive treatment for common cold, fever, and cough symptoms.',
    symptoms: ['Fever', 'Runny nose', 'Cough', 'Body aches', 'Fatigue'],
    treatments: ['Fever reducers', 'Decongestants', 'Cough suppressants', 'Rest and fluids', 'Symptomatic relief'],
    duration: '7-10 days',
    category: 'Acute Conditions',
    icon: Thermometer
  },
  'body-ache': {
    title: 'Body Ache Relief',
    description: 'Treatment for general body aches and muscle pain.',
    symptoms: ['Muscle pain', 'Joint stiffness', 'Fatigue', 'Tender points', 'Limited mobility'],
    treatments: ['Pain medications', 'Muscle relaxants', 'Physical therapy', 'Heat therapy', 'Gentle exercise'],
    duration: '1-3 weeks',
    category: 'Pain Management',
    icon: Activity
  },
  'joint-pain': {
    title: 'Joint Pain Management',
    description: 'Comprehensive care for joint pain including arthritis and injury-related pain.',
    symptoms: ['Joint stiffness', 'Swelling', 'Pain with movement', 'Limited range of motion', 'Morning stiffness'],
    treatments: ['Anti-inflammatory medications', 'Physical therapy', 'Joint injections', 'Exercise therapy', 'Lifestyle modifications'],
    duration: '4-12 weeks',
    category: 'Pain Management',
    icon: Activity
  },
  'stomach-ache': {
    title: 'Stomach Ache Treatment',
    description: 'Management of abdominal pain and digestive discomfort.',
    symptoms: ['Abdominal pain', 'Nausea', 'Bloating', 'Changes in bowel habits', 'Loss of appetite'],
    treatments: ['Antispasmodics', 'Dietary modifications', 'Probiotics', 'Hydration therapy', 'Symptom monitoring'],
    duration: '3-7 days',
    category: 'Infections',
    icon: Stethoscope
  },
  'diarrhea': {
    title: 'Diarrhea Treatment',
    description: 'Effective management of acute and chronic diarrhea with focus on hydration and recovery.',
    symptoms: ['Loose stools', 'Frequent bowel movements', 'Abdominal cramps', 'Dehydration', 'Nausea'],
    treatments: ['Oral rehydration therapy', 'Anti-diarrheal medications', 'Dietary adjustments', 'Probiotics', 'Electrolyte replacement'],
    duration: '3-5 days',
    category: 'Infections',
    icon: Stethoscope
  },
  'wound-infections': {
    title: 'Wound Infection Treatment',
    description: 'Specialized care for infected wounds with proper cleaning and antibiotic therapy.',
    symptoms: ['Wound redness', 'Swelling', 'Pus discharge', 'Increased pain', 'Fever'],
    treatments: ['Wound cleaning', 'Antibiotic therapy', 'Dressing changes', 'Pain management', 'Healing monitoring'],
    duration: '1-3 weeks',
    category: 'Infections',
    icon: Stethoscope
  },
  'respiratory-infections': {
    title: 'Respiratory Infections',
    description: 'Treatment of upper and lower respiratory tract infections including bronchitis and pneumonia.',
    symptoms: ['Cough', 'Shortness of breath', 'Chest pain', 'Fever', 'Mucus production'],
    treatments: ['Antibiotics (if bacterial)', 'Bronchodilators', 'Expectorants', 'Rest and hydration', 'Breathing exercises'],
    duration: '7-14 days',
    category: 'Infections',
    icon: Stethoscope
  },
  'uti': {
    title: 'Urinary Tract Infection (UTI)',
    description: 'Effective treatment of urinary tract infections with appropriate antibiotics and supportive care.',
    symptoms: ['Burning urination', 'Frequent urination', 'Cloudy urine', 'Pelvic pain', 'Strong urine odor'],
    treatments: ['Antibiotic therapy', 'Increased fluid intake', 'Pain relief', 'Cranberry supplements', 'Prevention counseling'],
    duration: '3-7 days',
    category: 'Infections',
    icon: Stethoscope
  }
};

const Treatments = () => {
  const { treatmentSlug } = useParams<{ treatmentSlug: string }>();
  
  if (!treatmentSlug || !treatmentData[treatmentSlug]) {
    return (
      <MainLayout>
        <div className="container py-16">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-healthcare-700 mb-4">Treatment Not Found</h1>
            <p className="text-gray-600">The requested treatment information is not available.</p>
          </div>
        </div>
      </MainLayout>
    );
  }

  const treatment = treatmentData[treatmentSlug];
  const IconComponent = treatment.icon;

  return (
    <MainLayout>
      <div className="bg-gradient-to-r from-healthcare-800 to-healthcare-700 py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <IconComponent className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">{treatment.title}</h1>
            <p className="text-healthcare-100 text-lg">{treatment.description}</p>
          </div>
        </div>
      </div>

      <div className="container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Symptoms Section */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-healthcare-700 mb-6 flex items-center">
              <Activity className="w-6 h-6 mr-3" />
              Common Symptoms
            </h2>
            <ul className="space-y-3">
              {treatment.symptoms.map((symptom, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-healthcare-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{symptom}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments Section */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-healthcare-700 mb-6 flex items-center">
              <Stethoscope className="w-6 h-6 mr-3" />
              Our Treatment Approach
            </h2>
            <ul className="space-y-3">
              {treatment.treatments.map((treatmentMethod, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-healthcare-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{treatmentMethod}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Treatment Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-healthcare-50 rounded-lg p-6 text-center">
            <Clock className="w-8 h-8 text-healthcare-600 mx-auto mb-3" />
            <h3 className="font-semibold text-healthcare-700 mb-2">Treatment Duration</h3>
            <p className="text-gray-600">{treatment.duration}</p>
          </div>
          
          <div className="bg-healthcare-50 rounded-lg p-6 text-center">
            <Users className="w-8 h-8 text-healthcare-600 mx-auto mb-3" />
            <h3 className="font-semibold text-healthcare-700 mb-2">Expert Care</h3>
            <p className="text-gray-600">Specialist doctors and healthcare team</p>
          </div>
          
          <div className="bg-healthcare-50 rounded-lg p-6 text-center">
            <Heart className="w-8 h-8 text-healthcare-600 mx-auto mb-3" />
            <h3 className="font-semibold text-healthcare-700 mb-2">Personalized</h3>
            <p className="text-gray-600">Customized treatment plans for you</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-healthcare-700 rounded-xl p-8 mt-12 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Start Your Treatment?</h2>
          <p className="text-healthcare-100 mb-6">
            Book a consultation with our specialists to discuss your symptoms and create a personalized treatment plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-healthcare-700 hover:bg-healthcare-50 px-8 py-3 rounded-lg font-semibold transition-colors">
              Book Consultation
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-healthcare-700 px-8 py-3 rounded-lg font-semibold transition-colors">
              Call Now: +91 80 4567 8900
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Treatments;