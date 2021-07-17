let img = require('images-scraper');

const google = new img({
    puppeteer: {
      headless: true,
    },
  });

module.exports = {
    name: 'image',
    description: 'Image Scraper For Eternals Discord Channel',
    async execute(client, message, args){
        const image_query = args.join(' ');
        if(!image_query) return message.channel.send('Please enter an image name');

        const image_results = await google.scrape(image_query, 1);
        message.channel.send(image_results[0].url);
        // We use URL because Discord auto-converts url's to images
    }
}