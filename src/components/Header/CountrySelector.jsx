import React, { useState } from 'react';
import { Check, ChevronDown } from 'lucide-react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const countries = [
  { code: 'us', name: 'USA', flag: '🇺🇸' },
  { code: 'ca', name: 'Canada', flag: '🇨🇦' },
  { code: 'gb', name: 'UK', flag: '🇬🇧' },
  { code: 'fr', name: 'France', flag: '🇫🇷' },
  { code: 'de', name: 'Germany', flag: '🇩🇪' },
  { code: 'es', name: 'Spain', flag: '🇪🇸' },
  { code: 'it', name: 'Italy', flag: '🇮🇹' },
  { code: 'au', name: 'Australia', flag: '🇦🇺' },
];

const CountrySelector = ({ isMobile = false }) => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  if (isMobile) {
    return (
      <div className="flex flex-wrap gap-2">
        {countries.map((country) => (
          <button
            key={country.code}
            onClick={() => setSelectedCountry(country)}
            className={`flex items-center justify-center space-x-1 px-3 py-1 rounded-full border ${
              selectedCountry.code === country.code
                ? 'border-blue-500 bg-blue-50 text-blue-600'
                : 'border-gray-300 hover:border-gray-400'
            }`}
          >
            <span className="text-sm">{country.flag}</span>
            <span className="text-sm">{country.name}</span>
          </button>
        ))}
      </div>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center space-x-1 px-3 py-1 rounded-full border border-gray-300 hover:border-gray-400">
        <span className="text-xl">{selectedCountry.flag}</span>
        <span className="text-sm hidden md:inline">{selectedCountry.name}</span>
        <ChevronDown size={16} />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[180px] bg-white">
        {countries.map((country) => (
          <DropdownMenuItem
            key={country.code}
            className="flex items-center justify-between px-3 py-2 cursor-pointer hover:bg-gray-100"
            onClick={() => setSelectedCountry(country)}
          >
            <div className="flex items-center">
              <span className="text-xl mr-2">{country.flag}</span>
              <span>{country.name}</span>
            </div>
            {selectedCountry.code === country.code && (
              <Check size={16} className="text-blue-500" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CountrySelector;
