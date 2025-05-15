import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

const menuData = [
  {
    title: 'Chronic Diseases',
    subItems: ['Diabetes', 'Hypertension', 'Thyroid Disorders', 'Asthma'],
  },
  {
    title: 'Skin Conditions',
    subItems: ['Acne', 'Eczema', 'Psoriasis', 'Rashes'],
  },
  {
    title: 'Acute Conditions',
    subItems: ['Fever', 'Cold & Flu', 'Stomach Issues', 'Injuries'],
  },
  {
    title: 'Pain Management',
    subItems: ['Back Pain', 'Joint Pain', 'Headache', 'Muscle Cramps'],
  },
  {
    title: 'Infections',
    subItems: ['UTI', 'Skin Infections', 'Eye Infections', 'Ear Infections'],
  },
];

export default function TreatmentsDropdown() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="relative group">
      <button className="text-white font-medium flex items-center gap-1">
        Treatments <ChevronDown size={16} />
      </button>
      <div className="absolute top-full left-0 bg-white shadow-lg rounded-md mt-2 p-2 w-56 hidden group-hover:block z-50">
        {menuData.map((item, index) => (
          <div
            key={index}
            className="relative group"
            onMouseEnter={() => setOpenIndex(index)}
            onMouseLeave={() => setOpenIndex(null)}
          >
            <div className="flex justify-between items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <span>{item.title}</span>
              <ChevronRight size={16} />
            </div>
            {openIndex === index && (
              <div className="absolute top-0 left-full bg-white shadow-lg rounded-md ml-2 w-52 z-50">
                {item.subItems.map((subItem, subIndex) => (
                  <div
                    key={subIndex}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {subItem}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}