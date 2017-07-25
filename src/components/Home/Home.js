import React, { Component } from 'react';
import '../../styles/Home.css';
import Nav from '../Header/Nav.js'
import OrangeBar from './OrangeBar/OrangeBar.js'
import ShopCards from './ShopCards/ShopCards.js'
import Carousel from './Carousel.js'
import InfoCards from './InfoCards.js';



export default class Home extends Component {
  render() {
    return (
      <div className='Home'>
          <h1>You're good to go. Now make Etsy!</h1>
          {/* <Header /> */}
          <Carousel />
          <InfoCards />
          <ShopCards type="category" />
          {/* <BrowseCollections /> */}
          <ShopCards type="gifts"/>
          <OrangeBar type="safety" />
          {/* <RecentReviews /> */}
          <OrangeBar type="selling"/>
          {/* <FreshBlog /> */}
          <OrangeBar type="whatIs"/>
          <h1>You're good to go. Now make Etsy!</h1>
      </div>
    );
  }
}
