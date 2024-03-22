import Head from 'next/head';
import { useState } from 'react';

interface ImageData {
  imageUrl: string;
}

const Home: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');

  // Remove unused variables
  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
  //   setInputValue(e.target.value);
  // };

  // const handleGenerateClick = async (): Promise<void> => {
  //   try {
  //     const response = await fetch('/api/image', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ prompt: inputValue }),
  //     });
  //     const data = await response.json() as ImageData;
  //     console.log('Generated image data:', data);
  //   } catch (error) {
  //     console.error('Error generating image:', error);
  //   }
  // };

  return (
    <>
      <Head>
        <title>AI Background Generator</title>
      </Head>

      {/* ... (rest of your JSX code) ... */}
   </>
 );
};

export default Home;
