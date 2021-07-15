class Artist {
    constructor(vardas, valiuta) {
        this.vardas = vardas;
        this.valiuta = valiuta;
        this.playList = [];
    }

    intro() {
        console.log(`Hi, my name is ${this.vardas} and I am a musician!`);
    }

    songPrice(price) {

        this.playList.price = price / 100
        console.log(`${this.vardas}'s price per song is ${price / 100} ${this.valiuta}`);
        return price
    }

    addSong(songName) {
        this.playList.push({
            songName: songName,
            repeats: 0,
            price: 0,

        })
    }

    playlist() {
        console.log(`${this.vardas}'s playlist:`);
        console.log(`====================`);
        for (let i = 0; i < this.playList.length; i++) {
            const element = this.playList[i];
            console.log(`${i + 1}. ${element.songName} (${element.repeats})`);
        }

    }

    playSong(trackNumber) {
        let songName = this.playList[trackNumber].songName;
        for (let i = 0; i < this.playList.length; i++) {
            const element = this.playList[i];
            if (i === trackNumber) {
                element.repeats++
            }

        }
        // console.log(this.playList.repeats);
        console.log(`Playing song: ${songName}.`);
    }

    fortune() {
        let totalRepeats = 0;
        for (let i = 0; i < this.playList.length; i++) {
            const element = this.playList[i];
            totalRepeats += element.repeats;
        }

        let uzdarbis = totalRepeats * this.playList.price

        console.log(` Total lifetime wealth of ${this.vardas} is ${uzdarbis} ${this.valiuta} right now!`);
    }

}

module.exports = Artist;