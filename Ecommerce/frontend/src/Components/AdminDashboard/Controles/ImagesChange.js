import React, { useState } from 'react';

const ImagesChange = ({ handleImageChange, imageArr }) => {
  const [imagesArr, setImagesArr] = useState([...imageArr] || []);
  const changeValue = (imageUrl, imageIndex) => {
    console.log(imageUrl);
    console.log(imageIndex);
    const tempImageArr = imagesArr.map((image, index) => {
      if (imageIndex === index) return { ...image, url: imageUrl };
      else return image;
    });
    setImagesArr(tempImageArr);
    handleImageChange(tempImageArr);
  };
  const addImage = () => {
    if (imagesArr.length < 5) {
      setImagesArr([...imagesArr, imagesArr[0]]);
    }
  };
  const remImage = () => {
    const temp = [...imagesArr];
    temp.pop();
    if (imagesArr.length > 1) {
      setImagesArr(temp);
    }
  };
  console.log(imagesArr);

  return (
    <div>
      <label className='form-label' htmlFor='formProductDescription'>
        Product Images
      </label>
      <button class='btn btn-outline-secondary' onClick={remImage}>
        -
      </button>
      <button class='btn btn-outline-secondary' onClick={addImage}>
        +
      </button>
      {imagesArr &&
        imagesArr.map((image, index) => {
          return (
            <>
              <article className=' rounded my-2 p-1'>
                <div className='input-group my-2'>
                  <span class='input-group-text'>Image Name</span>
                  <input
                    className='form-control'
                    type='text'
                    defaultValue={'name'}
                  />
                </div>
                <div className='input-group my-2'>
                  <img
                    src={image.url}
                    style={{ width: '75px', height: '75px' }}
                  />
                  <input
                    className='form-control'
                    type='text'
                    defaultValue={image.url}
                    onChange={(e) => {
                      changeValue(image.url, index);
                    }}
                  />
                  <span class='input-group-text'> Url</span>
                </div>
              </article>
              <hr />
            </>
          );
        })}
      <p className='form-text'>Max 5 Images Min 1 Image</p>
    </div>
  );
};
export default ImagesChange;
