import { useLayoutEffect, useMemo, useRef, useState } from 'react';
import navStyles from './navSlider.module.css';

export const Slider = ({ tab, setTab = () => {}, navSliderTabs = [] }) => {
  const changeTab = (index) => {
    setTab(index);
  };
  const containerRef = useRef();
  const currentPosition = useMemo(() => {
    const positions = {
      x: 0,
      width: 0,
    };
    if (containerRef.current && !isNaN(tab)) {
      const child = containerRef.current.childNodes;
      const parentLeft = containerRef.current.getBoundingClientRect().left;
      if (child && child.length > 0) {
        const childToFind = child[tab];
        const elementWidth = childToFind.offsetWidth;
        const elementLeft = childToFind.getBoundingClientRect().left;
        positions.width = elementWidth;
        positions.x = elementLeft - parentLeft;
      }
    }
    return positions;
  }, [containerRef, tab]);

  useLayoutEffect(() => {
    setTab(navSliderTabs.length > -1 ? 0 : null);
  }, []);

  return (
    <div>
      <div ref={containerRef} className={navStyles['slider-container']}>
        {navSliderTabs.map((elementToRender, index) => (
          <div
            key={`slider-item-${index}`}
            onClick={() => changeTab(index)}
            className={navStyles['slider-item']}
          >
            {elementToRender}
          </div>
        ))}
        <div
          className={navStyles['slider-bar']}
          style={{
            transform: `translateX(${currentPosition.x}px)`,
            width: currentPosition.width,
          }}
        />
      </div>
    </div>
  );
};
