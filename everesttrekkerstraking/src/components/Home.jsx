import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Jumbotron, Grid, Row, Col, Image, Button, Thumbnail } from 'react-bootstrap';
import './Home.css';

import withAuthorization from './withAuthorization';
// import { db } from '../firebase';

const HomePage = () =>
  (
    <Grid>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <div id="row1">

            <Thumbnail id="thumbnail1" src="http://www.nationalgeographicexpeditions.com/assets/images/8034/master.jpg" >
              <hr />
              <h4>Kathmandu - Everest Basecamp</h4>
              <p>13-Days</p>
            </Thumbnail>
            
            <h2 id="trekInfoPageTitle">TREK Info</h2>
            <p id="trekInfoPageTitleSub">Everest presents itself differently during every climbing season and 
              each attempt can be unique. Weather and Mother Nature can both play significant rolls in altering 
              the routes and timing of attempts to make the trek and individual stops along the way. This is 
              just a tentative, average climbing schedule, compiled from multiple credible sources, for basic 
              reference.</p>
              <br/>

            <h3 id="phase1Title">PHASE 1 - To Everest Base Camp</h3>

            <h4>Days 1 & 2 — Kathmandu to Lukla</h4>
            <p>Arrive in Kathmandu. Spend the following day discovering Kathmandu, or resting for the trek.</p>
            
            <h4>Day 3 — Lukla/Begin Trek/Phakding</h4>
            <p>Weather permitting, fly over the mountains to Lukla (9,200'), perched high on a slope in the 
              Khumbu region of the Himalaya. Here, we’ll meet porters, Sherpa guides, and pack animals and 
              start out on the trek, descending 1,500 feet to the Dudh Kosi (River of Milk). As we follow 
              the trail to the village of Phakding, we’ll pass mani walls, boulders carved with Tibetan 
              Buddhist prayer inscriptions. (5 miles hiking, 3 hours)</p>
            
            <h4>Days 4 & 5 — Namche Bazaar</h4>
            <p>The trail continues north up the Dudh Kosi valley to Monjo, where it officially enters 
              Sagarmatha (Everest) National Park, a UNESCO World Heritage site. Catch a first glimpse of 
              Everest during a steep climb that brings us to the Sherpa market town of Namche Bazaar, our 
              home for the next two nights. We’ll spend an extra day here to acclimatize, heading out on 
              short hikes to take in views of Everest. (Day 4: 6 miles hiking, 5-6 hours; Day 5: 3-4 
              miles hiking, 2-3 hours)</p>
            
            <h4>Day 6 — Thami</h4>
            <p>Set out on a trail along the Bhote Kosi to the remote village of Thami, the last outpost on 
              the ancient trading route over the Nangpa La (pass) between Tibet and Nepal. Cross the Bhote 
              Kosi and hike steeply uphill to Thami. (2-3 miles hiking; 4-5 hours)</p>
            
            <h4>Day 7 — Khumjung</h4>
            <p>Venture into Thami Monastery (13,000'), then retrace your steps before turning uphill toward 
              the lovely village of Khumjung, where Sir Edmund Hillary established a school in 1961. Pay a 
              visit to the school and learn about “Sir Ed’s” other projects in the community. (7 miles 
              hiking; 5-6 hours)</p>
            
            <h4>Day 8 — Tengboche/Debuche</h4>
            <p>Set out through the Dudh Kosi gorge to Tengboche Monastery on one of the most beautiful valley 
              walks on Earth. The monastery is the home of the Rimpoche of Tengboche. After our visit, descend 
              to our lodge in Debuche. (7-8 miles; 5-6 hours)</p>
            
            <h4>Days 9 & 10 — Pheriche</h4>
            <p>Today’s hike takes us down through a beautiful forest to the village of Pangboche. With the 
              stunning peak of Ama Dablam towering directly overhead, hike up to the remote village of Pheriche, 
              where we will spend two nights at a lodge. The next day, head out on one of the most scenic hikes 
              of the trip, an optional 2,100-foot climb to Nangkartshang Peak (16,672') to see Lhotse, Makalu, 
              and Cho Oyu (three of the six highest peaks in the world). (Day 9: 6 miles hiking, 5-6 hours; 
              Day 10: 5 miles hiking, 6-7 hours )</p>
            
            <h4>Days 11 & 12 — Lobuje/Gorak Shep</h4>
            <p>Continue along the valley floor to Dughla (15,157'), where we stop for lunch before hiking on 
              Lobuje. The next day, walk to the edge of the Khumbu Glacier then hike up to the village of Gorak 
              Shep, nestled under the soaring summits. Climb up Kala Pattar (18,192') for a dramatic close up 
              view of Everest. (Day 11: 4 miles hiking, 5-6 hours; Day 12: 5 miles optional hiking, 2-3 hours)</p>
            
            <h4>Day 13 — Everest Base Camp/Lobuje</h4>
            <p>Weather permitting, we’ll head out on the final climb to Everest Base Camp, tucked into the 
              mountainside under the sparkling Khumbu Icefall. Return to Lobuje for the night. (9 miles hiking; 
              9-10 hours)</p>
            
            <h4>Day 14 - 17 — Acclimate</h4>
            <p>Multiple days of acclimation are necessary to prepare for higher altitudes.</p>

          </div>
        </Col>
      </Row>

        <br/><br/>

      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <div id="row2">

            <Thumbnail id="thumbnail2" src="https://i.pinimg.com/originals/63/b3/f7/63b3f783ea47c87722082d03130e9967.jpg" >
              <hr />
              <h4>Everest Basecamp - Summit - Return</h4>
              <p>North Face 38-Days</p>
            </Thumbnail>
            
            <h3 id="phase2Title">PHASE 2 - North Face</h3>
            <h4>Days 18 - 22 — Everest Base Camp — Basecamp One</h4>
            <p>Climbers can begin their journey into the Icefall and attempt to go on to Base Camp One.</p>
            
            <h4>Days 23 - 27 — First Rotation</h4>
            <p>Two nights at Camp I, three nights at Camp II, and the return to Base Camp.</p>
            
            <h4>Days 28 - 31 — Rest</h4>
            <p>Rest days at Base Camp</p>
            
            <h4>Days 32 - 35 — Second Rotation</h4>
            <p>A few nights at Camp I and Camp II, and a day trip to Camp III.</p>
            
            <h4>Days 36 - 38 — Rest</h4>
            <p>Rest days at Base Camp</p>
            
            <h4>Days 39 - 42 — Third Rotation</h4>
            <p>This includes nights at Camp I and Camp II, and a night sleeping at Camp II.</p>
            
            <h4>Days 43 - 48 — Rest</h4>
            <p>Rest days at Base Camp. Some elect to descend to lower elevations to recuperate before summit attempts. 
              Others may choose to remain at Base Camp. Depending on the individuals and the events of the 
              season.</p>

            <h4>Days 49 - 54 — Summit Attempt</h4>
            <p>First chance for a summit attempt. We will spend two nights at Camp II, one night at Camp III, and a 
              short night at the South Col before climbing. The descent will include a South Col night after summit 
              day, and a night at Camp II during the descent to Base Camp.</p>

            <br/><br/>

            <Thumbnail id="thumbnail2" src="http://www.ropeaccesscontractors.com/wp-content/uploads/2014/11/Everest-route-map.jpg" >
              <hr />
              <h4>Everest Basecamp - Summit - Return</h4>
              <p>South Face 34-Days</p>
            </Thumbnail>

            <h3 id="phase2Title">PHASE 2 - South Face</h3>
            <h4>Days 18 - 22 — Everest Base Camp — Basecamp One</h4>
            <p>Climbers can begin their journey into the Icefall and attempt to go on to Base Camp One.</p>
            
            <h4>Days 23 - 27 — First Rotation</h4>
            <p>Two nights at Camp I, three nights at Camp II, and the return to Base Camp.</p>
            
            <h4>Days 28 - 31 — Rest</h4>
            <p>Rest days at Base Camp</p>
            
            <h4>Days 32 - 35 — Second Rotation</h4>
            <p>A few nights at Camp I and Camp II, and a day trip to Camp III.</p>
            
            <h4>Days 36 - 38 — Rest</h4>
            <p>Rest days at Base Camp</p>
            
            <h4>Days 39 - 42 — Third Rotation</h4>
            <p>This includes nights at Camp I and Camp II, and a night sleeping at Camp II.</p>
            
            <h4>Days 43 - 48 — Rest</h4>
            <p>Rest days at Base Camp. Some elect to descend to lower elevations to recuperate before summit attempts. 
              Others may choose to remain at Base Camp. Depending on the individuals and the events of the 
              season.</p>

            <h4>Days 49 - 54 — Summit Attempt</h4>
            <p>First chance for a summit attempt. We will spend two nights at Camp II, one night at Camp III, and a 
              short night at the South Col before climbing. The descent will include a South Col night after summit 
              day, and a night at Camp II during the descent to Base Camp.</p>

          </div>
        </Col>
      </Row>

        <br/><br/>

      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <div id="row3">

            <Thumbnail id="thumbnail2" src="http://www.nationalgeographicexpeditions.com/assets/images/8034/master.jpg" >
              <hr />
              <h4>Everest Basecamp - Return</h4>
              <p>North Face 7-Days</p>
            </Thumbnail>
            
            <h3 id="phase3Title">PHASE 3 - Everest Base Camp to Lukla</h3>
            <h4>Days 55, 56, & 57 — Descent to Lukla</h4>
            <p>Retrace your steps along the Imja Khola to Debuche. The following day, hike down a steep trail to the 
              Dudh Kosi and climb to Namche Bazaar for the night. The final day of our descent, we’ll have a long and 
              leisurely trek back to Lukla. (Day 14: 9-10 miles hiking, 6-7 hours; Day 15: 8-9 miles hiking, 5-7 hours; 
              Day 16: 9 miles hiking, 8 hours)</p>
            
            <h4>Day 58 — Lukla/Kathmandu</h4>
            <p>Weather permitting, we’ll fly back to Kathmandu today and enjoy the rest of the day at leisure. We have 
              scheduled an extra day in case of a delay in our flight.</p>
            
            <h4>Days 59 & 60 — Kathmandu/U.S.</h4>
            <p>Explore the town of Bhaktapur, which has preserved its ancient character. See the temples and palaces of 
              Durbar Square and examine the intricate Sun Dhoka, a gilded copper gate crafted in 1753. This afternoon, 
              Kathmandu is yours to explore. The following day, depart Kathmandu on your homeward-bound flight.</p>

          </div>
        </Col>
      </Row>

    </Grid>
  );

export default HomePage;


