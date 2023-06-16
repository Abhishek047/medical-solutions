'use client'
import { forwardRef } from 'react';
import styles from './rating.module.css';
import Tippy from '@tippyjs/react';
import { Typography } from '../typography/Typography';


export const Rating =  forwardRef(({value = 0, max = 5, width = '1rem', height = '1rem', showTooltip = true}, ref) => {
  return (
    <Tippy interactive theme='primary' content={
      <Typography gutterBottom={false} type='caption'>
        {value} / {max}
      </Typography>
    } disabled={!showTooltip}>
      <div ref={ref} className={styles.container}>
          {
              new Array(max).fill(1).map((val, index) => 
              (<div key={val+index+value} className={styles.star}>
                  <div className={styles.fill} style={{width: (val+index) < value ? '100%' : Math.ceil(value) === (val+index) ? `${Math.ceil((value % 1) * 100)}%` : '0%'}}/>
              </div>))
          }
      </div>
    </Tippy>
  )
})
