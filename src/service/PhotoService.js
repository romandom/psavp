export const PhotoService = {
    getData() {
        return [
            {
                itemImageSrc: 'assets/slider/1.jpg',
                thumbnailImageSrc: 'assets/slider/1.jpg',
                alt: 'Čistenie silážnej jamy',
                title: 'Čistenie silážnej jamy'
            },
            {
                itemImageSrc: 'src/assets/slider/2.jpg',
                thumbnailImageSrc: 'src/assets/slider/2.jpg',
                alt: 'Čistenie silážnej jamy',
                title: 'Čistenie silážnej jamy'
            },
            {
                itemImageSrc: 'src/assets/slider/3.jpg',
                thumbnailImageSrc: 'src/assets/slider/3.jpg',
                alt: 'Prevoz materiálu a vyrovnávanie pozemku',
                title: 'Prevoz materiálu a vyrovnávanie pozemku'
            },
            {
                itemImageSrc: 'src/assets/slider/4.jpg',
                thumbnailImageSrc: 'src/assets/slider/4.jpg',
                alt: 'Prevoz materiálu a vyrovnávanie pozemku',
                title: 'Prevoz materiálu a vyrovnávanie pozemku'
            },
        ];
    },

    getImages() {
        return Promise.resolve(this.getData());
    }
};

