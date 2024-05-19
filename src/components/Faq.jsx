import React, { useState, useEffect } from 'react';
import ContentFrame from "./ContentFrame";
import { Col, Container, Row } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion';
import Icon from "../assets/img/icon2.png";
export default function Faq() {
  const accordionData = [
    {
        id:1,
        title:'Why DumRose?',
        desc:'Did you ever thought to yourself "wtf is Rose doing?" United by desperation we have decided to form a rebellion against demonic Rose. Let the rage and the memes free.',
    },
    {
        id:2,
        title:'Why was I temporarily baanned?',
        desc:'Rose did not agree with you opinion, try again in 10 minutes.',
    },
    {
        id:3,
        title:'What is the long term goal?',
        desc:'To help the actual Rose team develop a less annoying bot, with community feedback trough eye opening memes.',
    },
    {
        id:4,
        title:'Why was I muted ?',
        desc:'Did you just criticize Rose? You are on thin ice buddy',
    },
];
const [activeKey, setActiveKey] = useState(accordionData[0].id.toString());

const handleAccordionSelect = (selectedKey) => {
    setActiveKey(selectedKey);
};
  return (
    <ContentFrame icon={Icon} name="FAQ">
      <div className="faq">
        <div className="container">
            <div className="row">           
              <div className="col-12">
                <div className="section-title text-center">
                  <h2 className="mb-4">FAQ</h2>
                </div>
              </div>
              <div className="col-12">
                <div className="faq__wrapper">
                    <Accordion onSelect={handleAccordionSelect}>
                        {accordionData.map((item) => (
                            <Accordion.Item key={item.id} eventKey={item.id.toString()}  data-aos="fade-up" data-aos-duration="1000">
                                <Accordion.Header className={activeKey === item.id.toString() ? 'active' : ''}>
                                    {item.title}
                                </Accordion.Header>
                                <Accordion.Body>{item.desc}</Accordion.Body>
                            </Accordion.Item>
                        ))}
                    </Accordion>
                </div>
              </div>
            </div>
        </div>
      </div>
    </ContentFrame>
  )
}
