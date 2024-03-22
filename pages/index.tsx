import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleGenerateClick = async () => {
    // Placeholder for generate function replaced with API call
    console.log('Generating backgrounds for:', inputValue);
    try {
      const response = await fetch('/api/image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: inputValue }),
      });
      const data = await response.json();
      console.log('Generated image data:', data);
      // Handle displaying the generated image here
    } catch (error) {
      console.error('Error generating image:', error);
    }
  };

  return (
    <>
      <Head>
        <title>AI Background Generator</title>
      </Head>
      
      <div className="container">
        <header className="header">
          <h1>AI Background Generator</h1>
          <p>Describe the image you want, and it will magically generate an infinite number of unique backgrounds using stable diffusion that match your exact request</p>
          <div className="search">
            <input
              type="text"
              placeholder="E.g. a wooden table with a flower pot in a photorealistic style"
              value={inputValue}
              onChange={handleInputChange}
            />
            <button onClick={handleGenerateClick}>Generate</button>
          </div>
        </header>
        
        <main className="gallery">
          {/* Map through your images and use GalleryItem component for each */}
        </main>
      </div>
      
      <style jsx>{`
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
        }
        
        .header {
          text-align: center;
          padding: 50px 20px;
        }
        
        .search input {
          padding: 10px;
          margin-right: 8px;
          border-radius: 5px;
          border: 1px solid #ccc;
        }
        
        .search button {
          padding: 10px 20px;
          border-radius: 5px;
          border: none;
          background-color: #4A0072;
          color: white;
          cursor: pointer;
        }

        .gallery {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          grid-gap: 20px;
          margin-top: 50px;
        }

        .gallery-item {
          border-radius: 10px;
          overflow: hidden;
        }

        .gallery-item img {
          width: 100%;
          height: auto;
          display: block;
        }

        .gallery-item p {
          text-align: center;
          padding: 5px;
          background-color: #fff;
          margin: 0;
        }

        @media (max-width: 600px) {
          .header {
            padding: 20px 10px;
          }

          .search {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .search input {
            margin: 0 0 8px 0;
          }
        }
      `}</style>
    </>
  );
}
