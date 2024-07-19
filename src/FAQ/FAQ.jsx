import { useTranslation } from 'react-i18next';
import image1 from './b.png'
import image2 from './c.png'
import image3 from './d.png'
import image4 from './a.png'
import image5 from './e.png'
import './FAQ.css'
export default function FAQ(){
    const {t} = useTranslation();
    return(
        <>
        <div className="container">
            <div className="row text-center mt-10">
                <p className="text-5xl text-blue-700">{t('FAQ')}</p>
            </div>
            <div className="row text-center my-24 d-flex">
                <div className='col-md-6'>
                    <img src={image1}/>
                </div>
                <div className='col-md-6 center'>
                    <p className='text-2xl'>{t('exp1')}</p>
                </div>
            </div>
            <div className="row text-center my-24">
            <div className='col-md-6 center'>
                    <p className='text-2xl'>{t('exp2')}</p>
                </div>
                <div className='col-md-6'>
                <img src={image2}/>
                </div>
               
            </div>
            <div className="row text-center my-24">
                <div className='col-md-6'>
                <img src={image3}/>
                </div>
                <div className='col-md-6 center'>
                    <p className='text-2xl'>{t('exp3')}</p>
                </div>
            </div>

            <div className="row text-center mt-10">
            <div className='col-md-6 center'>
                    <p className='text-2xl'>{t('exp4')}</p>
                </div>
                <div className='col-md-6 center'>
                <img style={{width:"50%"}} src={image4}/>
                </div>
               
            </div>
            <div className="row text-center mt-10">
                <div className='col-md-4'>
                <img style={{width:"50%"}} src={image5}/>
                </div>
                <div className='col-md-8 center'>
                    <p className='text-2xl'>{t('exp5')}</p>
                </div>
            </div>
        </div>
        </>
    )
}