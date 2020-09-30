import React from 'react';
import PropTypes from 'prop-types';

function Actress({ name, picture, rating }) {  
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

const actressILike = [
  {
    id: 1,
    name: 'Imogen Poots',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Imogen_Poots.jpg',
    rating: 4.5,
  },
  {
    id: 2,
    name: '정다은',
    image: 'https://img.extmovie.com/files/attach/images/135/396/666/054/e3e0b10b3bedd713927ab9d53161e43a.jpg',
    rating: 4.3,
  },
  {
    id: 3,
    name: '박신혜',
    image: 'https://www.topstarnews.net/news/photo/201807/452836_104813_1410.jpg',
    rating: 4.3,
  },
  {
    id: 4,
    name: '김민정',
    image: 'https://t1.daumcdn.net/cfile/blog/2771E13B589D19C104',
    rating: 3.8,

  },
  {
    id: 5,
    name: '강지영',
    image: 'https://spnimage.edaily.co.kr/images/Photo/files/NP/S/2016/12/PS16120600036.jpg',
    rating: 3.5,
  },
];

const renderActress = a => <Actress key={a.id} name={a.name} picture={a.image} rating={a.rating} />;

function App() {  
  return (
    <div>
      {actressILike.map(renderActress)}
    </div>
  );
}

Actress.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

export default App;
