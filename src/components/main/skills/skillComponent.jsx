/* eslint-disable react/prop-types */
import React from 'react';
import { Col, FlexboxGrid, Tooltip, Whisper } from 'rsuite';
import ProgressCircle from 'rsuite/lib/Progress/ProgressCircle';
import { skills } from './skillsData';
import classes from './skillComponent.module.css';
import uuid from 'react-uuid';
import FlexboxGridItem from 'rsuite/lib/FlexboxGrid/FlexboxGridItem';

export default function SkillComponent (props) {
  const legendDescription = (
    <ul className={classes.legendList}>
      <li> 0 = I heard something about it</li>
      <br />
      <li className={classes.level}> Junior Level</li>
      <br />
      <li> 20 = Basics are known</li>
      <li> 40 = Can use it safely</li>
      <br />
      <li className={classes.level}> Intermediate Level</li>
      <br />
      <li> 60 = I can use advanced stuff</li>
      <li> 80 = There is no problem wich I could not solve</li>
      <br />
      <li className={classes.level}> Senior Level</li>
      <br />
      <li> 100 = Master on this topic</li>
    </ul>
  );

  return (
    <>
      <h1 className={classes.skillHead}>Skills</h1>
      <Whisper
        placement="auto"
        trigger="hover"
        speaker={<Tooltip>{legendDescription}</Tooltip>}
      >
        <h2 className={classes.legend}>Legend</h2>
      </Whisper>
      <div className="show-grid">
        <FlexboxGrid justify="space-around" align="middle">
          {skills.map((element) => {
            return (
              <FlexboxGridItem
                key={uuid()}
                componentClass={Col}
                colspan={24}
                xs={12}
                sm={8}
                md={6}
                lg={4}
              >
                <Whisper
                  placement="auto"
                  trigger="hover"
                  speaker={<Tooltip>{element.description}</Tooltip>}
                >
                  <div className={classes.skillCircle}>
                    <h2 className={classes.skillTitle}>{element.title}</h2>
                    <ProgressCircle
                      percent={element.percent * 20}
                      strokeColor="#17768B"
                      trailWidth={1}
                      trailColor={'rgba(0, 25, 50, 0.25)'}
                    >
                      <h2>{element.title}</h2>
                    </ProgressCircle>{' '}
                  </div>
                </Whisper>
              </FlexboxGridItem>
            );
          })}
        </FlexboxGrid>
      </div>
    </>
  );
}
