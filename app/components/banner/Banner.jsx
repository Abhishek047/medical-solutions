import bannerStyles from './styles/banner.module.css';
import { Typography } from "../ui/typography/Typography"
import svg from '../../../public/images/operation-table.webp';
import Button from '../ui/buttons/Button';
import { ShoppingBag } from 'react-feather';
import BorderedImage from './BorderedImage';
import { Feature } from './Feature';

const FEATURES = [
  'Enhanced Mobility',
  'Radiolucent Design',
  'Easy Cleanability',
]

const graphicColor = 'primary';

export const Banner = () => {
  return (
    <section>
        <div className={bannerStyles.container}>
          <div className={bannerStyles.content}>
            <Typography type="h2" color='primary' fontWeight={600}>
                Revolutionize Medical Solutions
            </Typography>
            <Typography type="h5">
                <q>
                    Discover Cutting-Edge Products and Operation Tables for Optimal Healthcare
                </q>
            </Typography>
            <div className={bannerStyles['button-grp']}>
              <Button type='filled' color='primary' startIcon={<ShoppingBag fontSize='0.9rem' />}>
                Browse
              </Button>
              <Button type='outlined' color='primary' >
                Contact
              </Button>
            </div>
          </div>
          <div className={bannerStyles.graphics}>
            <div>
             <BorderedImage src={svg} color={graphicColor} name={'operation table'} vertical='top' horizontal='left' width='80%' height='80%' />
            </div>
            <div className={`
            ${bannerStyles['feature-container']}
            ${bannerStyles[`feature-container-${graphicColor}`]}
            `}>
              <div className={`
            ${bannerStyles['feature-container-line']}
            ${bannerStyles[`feature-container-line-${graphicColor}`]}
            `}/>
              {
                FEATURES.map((feature) => 
                <Feature key={feature} text={feature} color={graphicColor} />
                )
              }
            </div>
          </div>
        </div>
    </section>
  )
}
