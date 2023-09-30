export const PhotoService = {
    getData() {
        return [
            {
                itemImageSrc: 'src/assets/slider/1.jpeg',
                thumbnailImageSrc: 'src/assets/slider/1.jpeg',
                alt: 'Čistenie silážnej jamy',
                title: 'Čistenie silážnej jamy'
            },
            {
                itemImageSrc: 'src/assets/slider/2.jpeg',
                thumbnailImageSrc: 'src/assets/slider/2.jpeg',
                alt: 'Čistenie silážnej jamy',
                title: 'Čistenie silážnej jamy'
            },
            {
                itemImageSrc: 'src/assets/slider/3.jpeg',
                thumbnailImageSrc: 'src/assets/slider/3.jpeg',
                alt: 'Prevoz materiálu a vyrovnávanie pozemku',
                title: 'Prevoz materiálu a vyrovnávanie pozemku'
            },
            {
                itemImageSrc: 'src/assets/slider/4.jpeg',
                thumbnailImageSrc: 'src/assets/slider/4.jpeg',
                alt: 'Prevoz materiálu a vyrovnávanie pozemku',
                title: 'Prevoz materiálu a vyrovnávanie pozemku'
            },
        ];
    },

    getImages() {
        return Promise.resolve(this.getData());
    }
};

