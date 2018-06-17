import React from 'react';

import LoadingIcon from '../assets/loading.svg';

export default function Loader(props) {
  return (
    <div className='loading'>
      <img className='loadingIcon' src={LoadingIcon} alt='loading icon'/>
    </div>
  );
}
