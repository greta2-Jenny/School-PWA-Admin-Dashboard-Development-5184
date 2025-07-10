import React,{useState} from 'react';
import {motion,AnimatePresence} from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import {useTheme} from '../contexts/ThemeContext';
import {useData} from '../contexts/DataContext';

const {FiImage,FiX,FiChevronLeft,FiChevronRight,FiFilter}=FiIcons;

const Gallery=()=> {
  const {darkMode}=useTheme();
  const {data}=useData();
  const [selectedImage,setSelectedImage]=useState(null);
  const [selectedCategory,setSelectedCategory]=useState('all');

  const categories=[
    {value: 'all',label: 'All Photos'},
    {value: 'activities',label: 'Activities'},
    {value: 'outdoor',label: 'Outdoor Play'},
    {value: 'events',label: 'Events'},
    {value: 'facilities',label: 'Facilities'}
  ];

  // Updated gallery data with working image URLs
  const galleryImages=[
    {id: 1,src: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&h=400&fit=crop',title: 'Classroom Activities',category: 'activities',description: 'Children engaged in creative learning activities'},
    {id: 2,src: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop',title: 'Story Time',category: 'activities',description: 'Daily story time with our loving teachers'},
    {id: 3,src: 'https://images.unsplash.com/photo-1597248881519-db089d3744a5?w=600&h=400&fit=crop',title: 'Outdoor Playground',category: 'outdoor',description: 'Safe outdoor play area for physical development'},
    {id: 4,src: 'https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?w=600&h=400&fit=crop',title: 'Art Projects',category: 'activities',description: 'Creative art projects and crafts'},
    {id: 5,src: 'https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?w=600&h=400&fit=crop',title: 'Learning Together',category: 'activities',description: 'Collaborative learning experiences'},
    {id: 6,src: 'https://images.unsplash.com/photo-1551966775-a4ddc8df052b?w=600&h=400&fit=crop',title: 'Reading Corner',category: 'facilities',description: 'Cozy reading corner in our library'},
    {id: 7,src: 'https://images.unsplash.com/photo-1576765608622-067973a79f53?w=600&h=400&fit=crop',title: 'Garden Time',category: 'outdoor',description: 'Learning about nature in our garden'},
    {id: 8,src: 'https://images.unsplash.com/photo-1560785496-3c9d27877182?w=600&h=400&fit=crop',title: 'Music Class',category: 'activities',description: 'Music and movement activities'},
    {id: 9,src: 'https://images.unsplash.com/photo-1594736797933-d0810c85da96?w=600&h=400&fit=crop',title: 'Christmas Celebration',category: 'events',description: 'Annual Christmas celebration with families'},
    {id: 10,src: 'https://images.unsplash.com/photo-1544475762-f8baaff7b575?w=600&h=400&fit=crop',title: 'Graduation Day',category: 'events',description: 'Proud graduates moving to the next level'},
    {id: 11,src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop',title: 'Science Discovery',category: 'activities',description: 'Hands-on science experiments and discovery'},
    {id: 12,src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',title: 'Sports Day',category: 'events',description: 'Annual sports day with fun activities'}
  ];

  const filteredImages=selectedCategory==='all' ? galleryImages : galleryImages.filter(image=> image.category===selectedCategory);

  const openModal=(image)=> {
    setSelectedImage(image);
  };

  const closeModal=()=> {
    setSelectedImage(null);
  };

  const nextImage=()=> {
    if (selectedImage) {
      const currentIndex=filteredImages.findIndex(img=> img.id===selectedImage.id);
      const nextIndex=(currentIndex + 1) % filteredImages.length;
      setSelectedImage(filteredImages[nextIndex]);
    }
  };

  const prevImage=()=> {
    if (selectedImage) {
      const currentIndex=filteredImages.findIndex(img=> img.id===selectedImage.id);
      const prevIndex=(currentIndex - 1 + filteredImages.length) % filteredImages.length;
      setSelectedImage(filteredImages[prevIndex]);
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-500 via-primary-400 to-secondary-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <motion.h1
              className="font-display font-bold text-4xl lg:text-6xl mb-6"
              initial={{opacity: 0,y: 20}}
              animate={{opacity: 1,y: 0}}
            >
              Photo Gallery
            </motion.h1>
            <motion.p
              className="text-xl lg:text-2xl max-w-3xl mx-auto"
              initial={{opacity: 0,y: 20}}
              animate={{opacity: 1,y: 0}}
              transition={{delay: 0.2}}
            >
              Glimpses of joy,learning,and growth at Lil' Hale Learners
            </motion.p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className={`py-8 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center space-x-2">
              <SafeIcon icon={FiFilter} className={`w-5 h-5 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
              <span className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Filter by Category:
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category)=> (
                <button
                  key={category.value}
                  onClick={()=> setSelectedCategory(category.value)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory===category.value
                      ? 'bg-gradient-primary text-white shadow-lg'
                      : darkMode
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image,index)=> (
              <motion.div
                key={image.id}
                initial={{opacity: 0,y: 20}}
                whileInView={{opacity: 1,y: 0}}
                transition={{delay: index * 0.1}}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={()=> openModal(image)}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      console.error('Image failed to load:', image.src);
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-display font-bold text-lg mb-1">{image.title}</h3>
                    <p className="text-sm text-white/90">{image.description}</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <SafeIcon icon={FiImage} className="w-4 h-4 text-white" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{scale: 0.8,opacity: 0}}
              animate={{scale: 1,opacity: 1}}
              exit={{scale: 0.8,opacity: 0}}
              className="relative max-w-4xl max-h-[90vh] mx-4"
              onClick={(e)=> e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                onError={(e) => {
                  console.error('Modal image failed to load:', selectedImage.src);
                  e.target.style.display = 'none';
                }}
              />
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors duration-200"
              >
                <SafeIcon icon={FiX} className="w-6 h-6" />
              </button>
              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors duration-200"
              >
                <SafeIcon icon={FiChevronLeft} className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors duration-200"
              >
                <SafeIcon icon={FiChevronRight} className="w-6 h-6" />
              </button>
              {/* Image Info */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-4 text-white">
                <h3 className="font-display font-bold text-xl mb-1">{selectedImage.title}</h3>
                <p className="text-white/90">{selectedImage.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;