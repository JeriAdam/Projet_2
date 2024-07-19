import React from 'react';
import '../index.css'
import { useTranslation } from 'react-i18next';


function About(){

    const {t} = useTranslation();
    React.useEffect(() => {
        const observer = new IntersectionObserver((entries) =>{
            entries.forEach((entry) =>{
              if (entry.isIntersecting){
                entry.target.classList.add('show');
              } else {
                entry.target.classList.remove('show');
              }
            });
          });
          const x = document.querySelectorAll('.x');
          
          x.forEach((el) => observer.observe(el));
    })

    
    return (
    <>
        <div className="container text-stone-200" style={{display : "flex"}}> 
        <div className="row ">
            <div className="col-md-6 x y">
                <div className="content header w">
                    <p className='font-bold text-5xl mb-8 mt-4'>{t("greeting")}</p>
                    <p className='mb-12 text-lg'>{t('description')}</p>
                    <img src='https://blog-images.carshop.co.uk/2019/06/bestcarshowroom.png'/>
                </div>
            </div>
            <div className="col-md-6 x y">
                <div className="content">
                <p className='font-bold text-5xl mt-4 mb-8'>{t('contact')}</p>
                    <div className='row'>
                        <div className='col-md-6'>
                        <p className='text-3xl'>{t('hours')}</p>
                        </div>
                        <div className='col-md-6'>
                        <ul className='text-lg'>
                        <li>{t('mHours')}</li>
                        <li>{t('tHours')}</li>
                        <li>{t('wHours')}</li>
                        <li>{t('Thours')}</li>
                        <li>{t('fHours')}</li>
                        <li>{t('sHours')}</li>
                        <li>{t('Shours')}</li>
                    </ul>
                        </div>
                    </div>
                    <p className='mt-5 mb-7 text-3xl'>{t('location')}</p>

                    <img src='https://upload.wikimedia.org/wikipedia/commons/5/5b/Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg'/>
                </div>
            </div>
        </div>
    </div>
    </>)
    


}
    






export default About;