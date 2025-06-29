export const exerciseData = {
  head: {
    name: 'Baş ve Boyun',
    exercises: [
      {
        id: 1,
        title: 'Boyun Esneklik Egzersizleri',
        description: 'Boyun kaslarını gevşeten ve esneklik kazandıran egzersizler. Masa başında çalışanlar için idealdir.',
        duration: '5 dakika',
        url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
      },
      {
        id: 2,
        title: 'Boyun Güçlendirme Egzersizleri',
        description: 'Boyun kaslarını güçlendiren ve duruş bozukluğunu önleyen egzersizler.',
        duration: '8 dakika',
        url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
      }
    ]
  },
  shoulders: {
    name: 'Omuz',
    exercises: [
      {
        id: 3,
        title: 'Omuz Dönüşleri',
        description: 'Omuz kaslarını gevşeten ve esneklik kazandıran temel egzersizler.',
        duration: '6 dakika',
        url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
      },
      {
        id: 4,
        title: 'Omuz Güçlendirme',
        description: 'Deltoid kaslarını güçlendiren ve omuz stabilitesini artıran egzersizler.',
        duration: '12 dakika',
        url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'
      }
    ]
  },
  arms: {
    name: 'Kol',
    exercises: [
      {
        id: 5,
        title: 'Biceps Egzersizleri',
        description: 'Ön kol kaslarını güçlendiren biceps egzersizleri. Dumbbell veya vücut ağırlığı ile yapılabilir.',
        duration: '15 dakika',
        url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4'
      },
      {
        id: 6,
        title: 'Triceps Egzersizleri',
        description: 'Arka kol kaslarını güçlendiren triceps egzersizleri.',
        duration: '12 dakika',
        url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4'
      }
    ]
  },
  chest: {
    name: 'Göğüs',
    exercises: [
      {
        id: 7,
        title: 'Şınav Varyasyonları',
        description: 'Göğüs kaslarını güçlendiren farklı şınav teknikleri ve varyasyonları.',
        duration: '20 dakika',
        url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4'
      },
      {
        id: 8,
        title: 'Göğüs Esneklik Egzersizleri',
        description: 'Göğüs kaslarını esnetmek ve duruş bozukluğunu önlemek için egzersizler.',
        duration: '10 dakika',
        url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4'
      }
    ]
  },
  abs: {
    name: 'Karın',
    exercises: [
      {
        id: 9,
        title: 'Karın Kası Egzersizleri',
        description: 'Karın kaslarını güçlendiren temel egzersizler. Plank, crunch ve varyasyonları.',
        duration: '18 dakika',
        url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4'
      },
      {
        id: 10,
        title: 'Core Güçlendirme',
        description: 'Gövde stabilitesini artıran ve core kaslarını güçlendiren egzersizler.',
        duration: '25 dakika',
        url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4'
      }
    ]
  },
  legs: {
    name: 'Bacak',
    exercises: [
      {
        id: 11,
        title: 'Squat Egzersizleri',
        description: 'Bacak kaslarını güçlendiren squat egzersizleri ve varyasyonları.',
        duration: '22 dakika',
        url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4'
      },
      {
        id: 12,
        title: 'Bacak Esneklik Egzersizleri',
        description: 'Bacak kaslarını esnetmek ve esneklik kazandırmak için egzersizler.',
        duration: '15 dakika',
        url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4'
      }
    ]
  },
  back: {
    name: 'Sırt',
    exercises: [
      {
        id: 13,
        title: 'Sırt Güçlendirme Egzersizleri',
        description: 'Sırt kaslarını güçlendiren ve duruş problemlerini çözen egzersizler.',
        duration: '20 dakika',
        url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
      },
      {
        id: 14,
        title: 'Alt Sırt Egzersizleri',
        description: 'Bel ağrısını önleyen ve alt sırt kaslarını güçlendiren egzersizler.',
        duration: '16 dakika',
        url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
      }
    ]
  }
};

export const getExercisesByBodyPart = (bodyPart) => {
  return exerciseData[bodyPart] || null;
};