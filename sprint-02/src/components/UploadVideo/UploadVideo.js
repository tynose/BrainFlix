import React, { Component } from 'react';
import './UploadVideo.scss';

export default class UploadVideo extends Component {
  render() {
    return (
      <div className='uploadVideo'>
        <div className='uploadVideo__container'>
          <div className='uploadVideo__uploadStatus'>
            <img className='uploadVideo__thumbNail' src='/assets/Images/r241851_600x400_3-2.jpg' alt='baseball'></img>
            <h5 className='uploadVideo__statusHeader'>Upload Status:</h5>
            <span className='uploadVideo__statusSpan'>Processing</span>
          </div>
          <div className='uploadVideo__dataInput'>
          <div className='uploadVideo__buttonContainer'>
            <button className='uploadVideo__publish'>
              <span className='uploadVideo__publishText'>Publish</span>
            </button>
          </div>
            <h5 className='uploadVideo__header uploadVideo__header--formHeader'>Basic Information</h5>
            <form className='uploadVideo__form'>
              <label className='uploadVideo__label' name='titleLabel'><h5 className='uploadVideo__header'>Title:</h5></label>
              <input className='uploadVideo__input' type='text' name='titleInput' placeholder='Add a title to your video' required />
              <label className='uploadVideo__label' name='descriptionLabel'><h5 className='uploadVideo__header'>Description:</h5></label>
              <textarea className='uploadVideo__text' name='descriptionInput' placeholder=' Add a description of your video' required></textarea>
              <label className='uploadVideo__label' name='tagLabel'><h5 className='uploadVideo__header'>Tags:</h5></label>
              <input className='uploadVideo__input' type='text' name="tagInput" placeholder='(e.g., albert einstein, flying pig, mashup, videos)' required />
              <select className='uploadVideo__input uploadVideo__input--option'>
                <option value='public'>Public</option>
                <option value='private'>Private</option>
              </select>
              <div className='uploadVideo__videoInput'>
                <h5 className='uploadVideo__header'>Video Thumbnails</h5>
                <div className='uploadVideo__videoInputs'>
                  <input className='uploadVideo__imageInput' src='/assets/Images/r241851_600x400_3-2.jpg' alt='baseball' type='image' name="imageInput"/>
                  <input className='uploadVideo__imageInput' src='/assets/Images/r241851_600x400_3-2.jpg' alt='baseball' type='image' name="imageInput"/>
                  <input className='uploadVideo__imageInput' src='/assets/Images/r241851_600x400_3-2.jpg' alt='baseball' type='image' name="imageInput"/>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
