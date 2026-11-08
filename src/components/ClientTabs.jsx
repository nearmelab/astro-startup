import { Tab } from '@headlessui/react';
import { useEffect, useState, lazy, Suspense } from 'react';
import videos from '../data/videos.json';

// Lazy load VimeoEmbed
const VimeoEmbed = lazy(() => import('./VimeoEmbed.jsx'));

const ClientTabs = ({ lang, ctaText }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [swiper, setSwiper] = useState(null);
  const [SwiperComponents, setSwiperComponents] = useState(null);
  const isRTL = lang === 'ar';

  // Dynamically import Swiper
  useEffect(() => {
    import('swiper/react').then((mod) => {
      setSwiperComponents({ Swiper: mod.Swiper, SwiperSlide: mod.SwiperSlide });
    });
    // Lazy load Swiper CSS
    import('swiper/css');
  }, []);

  useEffect(() => {
    if (swiper && !swiper.destroyed && swiper.activeIndex !== selectedIndex) {
      swiper.slideTo(selectedIndex);
    }
  }, [selectedIndex, swiper]);

  const handleSlideChange = (swiperInstance) => {
    if (selectedIndex !== swiperInstance.activeIndex) {
      setSelectedIndex(swiperInstance.activeIndex);
    }
  };

  // Loading state for Swiper
  if (!SwiperComponents) {
    return <div className="w-full h-64 animate-pulse bg-gray-200 rounded"></div>;
  }

  const { Swiper, SwiperSlide } = SwiperComponents;

  return (
    <div className={isRTL ? 'w-full rtl' : 'w-full'}>
      <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
        <Tab.Panels className="w-full max-w-7xl mx-auto">
          {videos.map((video, index) => (
            <Tab.Panel key={video.id} unmount={false} className="focus:outline-none">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
                <div className={isRTL ? 'md:col-span-3 order-2' : 'md:col-span-3 order-1'}>
                  <Suspense fallback={<div className="aspect-video bg-gray-200 animate-pulse rounded-lg" />}>
                    <VimeoEmbed vimeoId={video.vimeoId} />
                  </Suspense>
                </div>
                <div className={isRTL ? 'md:col-span-2 text-right order-2' : 'md:col-span-2 text-left order-1'}>
                  <h4 className="text-primary font-bold uppercase tracking-wider">{video.client}</h4>
                  <h3 className="text-3xl font-bold text-gray-800 dark:text-white my-4">{video.title}</h3>
                  <div className={isRTL ? 'w-24 h-1 bg-primary mb-6 ml-auto' : 'w-24 h-1 bg-primary mb-6'}></div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{video.description}</p>
                  <button className="border border-primary text-primary py-2 px-4 rounded-lg transition-colors hover:bg-primary hover:text-white">
                    {ctaText || 'Contact us to learn more'}
                  </button>
                </div>
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>

        <Tab.List className="w-full max-w-7xl mx-auto mt-20">
          <Swiper
            onSwiper={setSwiper}
            onSlideChange={handleSlideChange}
            slidesPerView={'auto'}
            spaceBetween={30}
            slideToClickedSlide={true}
            className={isRTL ? 'py-4 rtl' : 'py-4'}
          >
            {videos.map((video, index) => (
              <SwiperSlide key={video.id} style={{ width: '320px' }}>
                <Tab className="focus:outline-none w-full">
                  {({ selected }) => (
                    <div
                      className={`aspect-video rounded-lg overflow-hidden cursor-pointer transition-all duration-300 transform focus:outline-none grayscale hover:grayscale-0 ${
                        selected ? 'scale-105 !grayscale-0' : 'scale-90 opacity-80'
                      }`}
                    >
                      <img
                        src={video.thumbnailUrl}
                        alt={video.title}
                        className="w-full h-full object-cover"
                        loading={index === 0 ? 'eager' : 'lazy'}
                      />
                    </div>
                  )}
                </Tab>
              </SwiperSlide>
            ))}
          </Swiper>
        </Tab.List>
      </Tab.Group>
    </div>
  );
};

export default ClientTabs;