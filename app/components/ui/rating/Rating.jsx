import styles from './rating.module.css';

export const Rating = ({value = 0, max = 5, width = '1rem', height = '1rem'}) => {
  return (
    <div className={styles.container}>
        {
            new Array(max).fill(1).map((val, index) => 
            (<div key={val+index+value} className={styles.star}>
                <div className={styles.fill} style={{width: (val+index) < value ? '100%' : Math.ceil(value) === (val+index) ? `${Math.ceil((value % 1) * 100)}%` : '0%'}}/>
            </div>))
        }
    </div>
  )
}
