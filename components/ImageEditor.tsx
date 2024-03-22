import React, { useState, FormEvent } from 'react';
import ImageEditor from './ImageEditor';

interface ImageSizeOptions {
  [key: string]: string; 
}

export default function Home() {
  const [imageSize, setImageSize] = useState<string>('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Selected Image Size:', imageSize);
  };

  return (
    <div>
      <ImageEditor />
      <form onSubmit={handleSubmit} className="space-y-8 divide-y divide-gray-200">
        <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Select Image Size
            </h3>
            <div className="mt-4 sm:mt-6">
              <fieldset>
                <legend className="sr-only">Choose image size</legend>
                <div className="flex items-center space-x-4">
                  {['2x6', '4x6', '5x7'].map((size) => (
                    <label key={size} className="flex items-center">
                      <input
                        type="radio"
                        className="radio"
                        name="imageSize"
                        value={size}
                        onChange={(e) => setImageSize(e.target.value)} // Corrected here
                      />
                      <span className="ml-2 text-sm font-medium text-gray-900">{size}</span>
                    </label>
                  ))}
                </div>
              </fieldset>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
